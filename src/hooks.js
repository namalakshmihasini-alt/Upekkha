import { useState, useEffect, useRef } from 'react'

export function useFadeIn() {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); observer.unobserve(el) }
    }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return [ref, visible]
}

export function useCounter(target, active) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const step = Math.max(target / 80, 1)
    const timer = setInterval(() => {
      current += step
      if (current >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.ceil(current))
    }, 20)
    return () => clearInterval(timer)
  }, [active, target])
  return count
}
