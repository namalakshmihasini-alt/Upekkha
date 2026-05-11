import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Project Astitva', href: '/astitva' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Reports', href: '/reports' },
  { label: 'Contact', href: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [progress, setProgress] = useState(0)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => {
      const top = document.documentElement.scrollTop
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight
      setProgress(height > 0 ? (top / height) * 100 : 0)
      setScrolled(top > 50)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    if (!href.startsWith('/#')) {
      navigate(href)
      return
    }
    const selector = href.slice(1)
    if (location.pathname === '/') {
      const el = document.querySelector(selector)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    } else {
      navigate('/', { state: { scrollTo: selector } })
    }
  }

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <nav className={scrolled ? 'scrolled' : ''} style={{ zIndex: menuOpen ? 10001 : 1000 }}>
        <Link to="/" className="logo">
          <img src="/logo.png" alt="" className="logo-img" onError={e => e.target.style.display = 'none'} />
          Upekkha
        </Link>
        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a href={link.href} onClick={e => { e.preventDefault(); handleNav(link.href) }}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={`mobile-menu${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </>
  )
}
