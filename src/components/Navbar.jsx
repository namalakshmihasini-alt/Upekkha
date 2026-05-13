import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Impact', href: '/#impact' },
  { label: 'Project Astitva', href: '/astitva' },
  { label: 'Programs', href: '/#programs' },
  { label: 'Our People', href: '/our-people' },
  { label: 'Reports', href: '/reports' },
  { label: 'Contact', href: '/contact' }, // Updated from /#contact to /contact
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
    
    // Check if it's a section on the home page (starts with /#)
    if (href.startsWith('/#')) {
      const selector = href.slice(1) // gets the #id
      if (location.pathname === '/') {
        const el = document.querySelector(selector)
        el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        navigate('/', { state: { scrollTo: selector } })
      }
    } else {
      // It's a standard page route (like /contact)
      navigate(href)
      window.scrollTo(0, 0) // Ensure new page starts at top
    }
  }

  // GLOBAL LOGIC: Use white theme at the top of ANY page
  const useWhiteTheme = !scrolled

  return (
    <>
      <div className="progress-container">
        <div className="progress-bar" style={{ width: `${progress}%` }} />
      </div>
      <nav className={scrolled ? 'scrolled' : ''} style={{ zIndex: menuOpen ? 10001 : 1000 }}>
        <Link to="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '15px', textDecoration: 'none' }}>
          <img 
            src={useWhiteTheme ? "/logo-white.png" : "/logo-blue.png"} 
            alt="Upekkha Logo" 
            className="logo-img" 
            style={{ 
              transition: 'all 0.3s ease',
              width: '60px', 
              height: 'auto',
              display: 'block'
            }}
            onError={e => e.target.style.display = 'none'} 
          />
          <span className={useWhiteTheme ? "force-white-text" : ""}>
            Upekkha
          </span>
        </Link>

        <ul className={`nav-links${menuOpen ? ' active' : ''}`}>
          {NAV_LINKS.map(link => (
            <li key={link.label}>
              <a 
                href={link.href} 
                onClick={e => { e.preventDefault(); handleNav(link.href) }}
                className={useWhiteTheme ? "force-white-link" : ""}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className={`mobile-menu${menuOpen ? ' active' : ''}`}
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={useWhiteTheme ? "force-white-bg" : ""} />
          <span className={useWhiteTheme ? "force-white-bg" : ""} />
          <span className={useWhiteTheme ? "force-white-bg" : ""} />
        </button>
      </nav>
      {menuOpen && <div className="nav-overlay" onClick={() => setMenuOpen(false)} aria-hidden="true" />}
      
      <style>{`
        nav:not(.scrolled) .logo span.force-white-text {
          color: white !important;
        }
        nav:not(.scrolled) .nav-links a.force-white-link {
          color: white !important;
          opacity: 1 !important;
        }
        nav:not(.scrolled) .mobile-menu span.force-white-bg {
          background-color: white !important;
        }
      `}</style>
    </>
  )
}