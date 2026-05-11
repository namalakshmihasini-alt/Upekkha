import { useRef, useEffect } from 'react'

export default function AutoScroll({ children, loopFraction = 0.5, speed = 0.8 }) {
  const ref = useRef(null)
  const animRef = useRef(null)
  const drag = useRef({ active: false, startX: 0, scrollLeft: 0 })

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const loop = () => {
      if (!drag.current.active) {
        el.scrollLeft += speed
        if (el.scrollLeft >= el.scrollWidth * loopFraction) el.scrollLeft -= el.scrollWidth * loopFraction
      }
      animRef.current = requestAnimationFrame(loop)
    }
    animRef.current = requestAnimationFrame(loop)

    const startDrag = (x) => { drag.current = { active: true, startX: x, scrollLeft: el.scrollLeft }; el.style.cursor = 'grabbing' }
    const moveDrag = (x) => { if (drag.current.active) el.scrollLeft = drag.current.scrollLeft - (x - drag.current.startX) * 1.5 }
    const endDrag = () => { drag.current.active = false; el.style.cursor = 'grab' }

    const onMouseDown = e => startDrag(e.pageX)
    const onMouseMove = e => { if (drag.current.active) { e.preventDefault(); moveDrag(e.pageX) } }
    const onTouchStart = e => startDrag(e.touches[0].pageX)
    const onTouchMove = e => moveDrag(e.touches[0].pageX)

    el.addEventListener('mousedown', onMouseDown)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseup', endDrag)
    el.addEventListener('mouseleave', endDrag)
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchmove', onTouchMove, { passive: true })
    el.addEventListener('touchend', endDrag)

    return () => {
      cancelAnimationFrame(animRef.current)
      el.removeEventListener('mousedown', onMouseDown)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseup', endDrag)
      el.removeEventListener('mouseleave', endDrag)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', endDrag)
    }
  }, [speed, loopFraction])

  return (
    <div ref={ref} style={{ overflowX: 'auto', cursor: 'grab', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch', userSelect: 'none', width: '100%' }}>
      <style>{`div::-webkit-scrollbar{display:none}`}</style>
      <div style={{ display: 'flex', width: 'max-content' }}>{children}</div>
    </div>
  )
}
