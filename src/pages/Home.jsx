import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import AutoScroll from '../components/AutoScroll'
import { useFadeIn, useCounter } from '../hooks'

const HERO_IMAGES = ['hero1.jpg', 'hero2.jpg', 'hero3.jpg']

const STATS = [
  { target: 2, suffix: '+', label: 'Years of Serving Communities' },
  { target: 12, suffix: '+', label: 'Initiatives' },
  { target: 30, suffix: '+', label: 'Volunteers Engaged' },
  { target: 1600, suffix: '+', label: 'Lives Touched' },
]

const PROGRAMS = [
  { title: 'Project Astitva', desc: 'Improving public education through grassroots research and policy work, while supporting students with academic and life-skills development.', href: '/astitva', img: 'img-20250307-wa0019.jpg' },
  { title: 'Community Service', desc: 'On-ground initiatives addressing immediate community needs, including food redistribution and local support efforts.', href: '#', img: 'news2.jpg' },
  { title: 'Blood & SDP Donation', desc: 'Building awareness and enabling access to blood and stem cell donation, encouraging more people to step forward and contribute to saving lives.', href: '#', img: 'news3.jpg' },
]

const PEOPLE = [
  { name: 'Akshat Mehndirata', role: 'Founder', photo: 'akshat' },
  { name: 'Swarada Desai', role: 'Core Team', photo: 'swarada' },
  { name: 'Yashodhara Dravid', role: 'Core Team', photo: 'yashodhara' },
  { name: 'Sandali Kale', role: 'Core Team', photo: 'sandali' },
  { name: 'Kapish', role: 'Core Team', photo: 'kapish' },
  { name: 'Lakshmi Hasini', role: 'Core Team', photo: 'lakshmi' },
  { name: 'Kasturi Thorat', role: 'Advisor', photo: 'kasturi' },
  { name: 'Amruuta Pawar', role: 'Advisor', photo: 'amruuta' },
]

const GALLERY_IMGS = ['4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg']

function StatItem({ target, suffix, label, active }) {
  const count = useCounter(target, active)
  return (
    <div className="stat-item">
      <h3 className="counter">{count}{suffix}</h3>
      <p>{label}</p>
    </div>
  )
}

function PersonCard({ name, role, photo }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const srcs = [`/${photo}.jpg`, `/${photo}.jpeg`]
  const [imgIdx, setImgIdx] = useState(0)
  return (
    <div className="person-card">
      <div className="person-photo-wrap">
        {imgIdx < srcs.length
          ? <img key={srcs[imgIdx]} src={srcs[imgIdx]} alt={name} className="person-photo-img" onError={() => setImgIdx(i => i + 1)} />
          : <div className="person-photo-fallback">{initials}</div>
        }
      </div>
      <div className="person-name">{name}</div>
      <div className="person-position">{role}</div>
    </div>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const location = useLocation()
  const [heroIdx, setHeroIdx] = useState(0)
  useEffect(() => {
  HERO_IMAGES.forEach(src => { const img = new Image(); img.src = src })
}, [])
  const [aboutRef, aboutVisible] = useFadeIn()
  const [impactRef, impactVisible] = useFadeIn()
  const [programsRef, programsVisible] = useFadeIn()
  const [peopleRef, peopleVisible] = useFadeIn()
  const [galleryRef, galleryVisible] = useFadeIn()

  // Rotate hero images
  useEffect(() => {
    const t = setInterval(() => setHeroIdx(i => (i + 1) % HERO_IMAGES.length), 5000)
    return () => clearInterval(t)
  }, [])

  // Handle scroll-to from navigation state
  useEffect(() => {
    const scrollTo = location.state?.scrollTo
    if (!scrollTo) return
    const t = setTimeout(() => {
      const el = document.querySelector(scrollTo)
      el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 120)
    return () => clearTimeout(t)
  }, [location.state])

  const scrollTo = (selector) => {
    const el = document.querySelector(selector)
    el && el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const loopedPeople = [...PEOPLE, ...PEOPLE, ...PEOPLE]
  const loopedGallery = [...GALLERY_IMGS, ...GALLERY_IMGS]

  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="hero" id="home">
        {HERO_IMAGES.map((img, i) => (
          <div key={img} className="hero-slide" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.52),rgba(0,0,0,0.52)), url('${img}')`, opacity: i === heroIdx ? 1 : 0 }} />
        ))}
        <div className="hero-content">
          <h1>Embracing<br />Karm Yog</h1>
          <p>Turning selfless action into meaningful change.</p>
          <a href="#about" className="hero-btn" onClick={e => { e.preventDefault(); scrollTo('#about') }}>LEARN MORE</a>
        </div>
        <div className="hero-dots">
          {HERO_IMAGES.map((_, i) => (
            <button key={i} className={`hero-dot${i === heroIdx ? ' active' : ''}`} onClick={() => setHeroIdx(i)} aria-label={`Slide ${i + 1}`} />
          ))}
        </div>
      </section>

      {/* About / Karm Yog */}
      <section ref={aboutRef} id="about" className={`about-karm-yog fade-in${aboutVisible ? ' visible' : ''}`}>
        <p className="philosophy-tag">The Philosophy Behind Our Work</p>
        <h2 className="section-title">What is Karm Yog?</h2>
        <div className="intro-box">
          <p>Karm Yog is an Indian philosophy that inspires us to do our duty with a steady mind, to maintain the state of divinity in our mind as we navigate through the world. The ability to pursue selfless action as a path to realize divine consciousness.</p>
        </div>
        <div className="duality-container">
          <div className="duality-card">
            <h3 className="card-title-main">Karm</h3>
            <span className="card-subtitle">ACTION</span>
            <p>Karm is not only about selfless work. It is fulfilling our duties without associating with the fruits of our actions.</p>
          </div>
          <div className="duality-card">
            <h3 className="card-title-main">Yog</h3>
            <span className="card-subtitle">UNION</span>
            <p>Yog is the realization of the divinity within. When actions stem from alignment deeper than worldly ambition, it begins to make you whole.</p>
          </div>
        </div>
      </section>

      {/* Impact */}
      <section ref={impactRef} id="impact" className={`our-impact fade-in${impactVisible ? ' visible' : ''}`}>
        <h2 className="section-title">Our Journey in Service</h2>
        <div className="impact-container">
          <div className="impact-image-left" />
          <div className="impact-stats-right">
            {STATS.map(s => <StatItem key={s.label} {...s} active={impactVisible} />)}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section ref={programsRef} id="programs" className={`our-programs fade-in${programsVisible ? ' visible' : ''}`}>
        <h2 className="section-title">Our Programs</h2>
        <div className="programs-grid">
          {PROGRAMS.map(prog => (
            <div key={prog.title} className="program-card" onClick={() => prog.href.startsWith('/') && prog.href !== '#' && navigate(prog.href)} style={{ cursor: prog.href.startsWith('/') && prog.href !== '#' ? 'pointer' : 'default' }}>
              <div className="program-image" style={{ backgroundImage: `url('${prog.img}')` }} />
              <div className="program-content">
                <h3>{prog.title}</h3>
                <p>{prog.desc}</p>
                {prog.href.startsWith('/') && prog.href !== '#' && (
                  <button className="read-more-btn" onClick={e => { e.stopPropagation(); navigate(prog.href) }}>Read More</button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* People */}
      <section ref={peopleRef} className={`our-people fade-in${peopleVisible ? ' visible' : ''}`}>
        <h2 className="section-title">Our People</h2>
        <AutoScroll loopFraction={1 / 3} speed={0.85}>
          {loopedPeople.map((p, i) => <PersonCard key={`${p.name}-${i}`} {...p} />)}
        </AutoScroll>
      </section>

      {/* Founder quote + gallery */}
      <section ref={galleryRef} className={`testimonial-gallery-section fade-in${galleryVisible ? ' visible' : ''}`}>
        <div className="testimonial-block">
          <p className="founder-label">Founder's Note</p>
          <p className="testimonial-quote">"We believe dignity is a fundamental right for every human being.

At the heart of a better society are people who feel empowered to shape their own future. Real change is not just about providing support, it is about empowering individuals and communities to live with confidence, purpose, and self-respect.

The word Upekkha means equanimity. It reflects the ability to act with compassion and a steady mind, even in difficult circumstances. This belief guides how we approach change. 

Our work is our way of honoring the responsibility that comes with the ability to serve others. We believe the lasting impact comes from addressing root causes of systematic problems.

Through education, community programs, and partnerships, we strive to create pathways for people to thrive and live more dignified lives."</p>
          <p className="testimonial-author"> Akshat Mehndirata, Founder</p>
        </div>
        <AutoScroll loopFraction={0.5} speed={0.95}>
          {loopedGallery.map((img, i) => (
            <div key={i} className="gallery-item" style={{ backgroundImage: `url('${img}')` }} />
          ))}
        </AutoScroll>
      </section>

      <Footer />
    </>
  )
}
