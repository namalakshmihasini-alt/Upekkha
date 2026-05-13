import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const TEAM = [
  { name: 'Akshat Mehndirata', designation: 'Founder', photo: 'akshat' },
  { name: 'Swarada Desai', designation: 'Co-Head of Research', photo: 'swarada' },
  { name: 'Yashodhara Dravid', designation: 'Co-Head of Research', photo: 'yashodhara' },
  { name: 'Kapish', designation: 'Project Associate (Operations)', photo: 'kapish' },
  { name: 'Sandali Kale', designation: 'Project Associate (Operations)', photo: 'sandali' },
  { name: 'Lakshmi Hasini', designation: 'Project Associate (Technology)', photo: 'lakshmi' },
]

const ADVISORS = [
  { name: 'Amruuta Pawar', designation: 'Advisor', photo: 'amruuta' },
  { name: 'Kasturi Thorat', designation: 'Advisor', photo: 'kasturi' },
]

function Divider({ align = 'center' }) {
  return <div style={{ width: '56px', height: '3px', background: '#FFB703', borderRadius: '2px', margin: align === 'center' ? '0.9rem auto 0' : '0.9rem 0 0' }} />
}

function PersonCard({ name, designation, photo }) {
  const initials = name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()
  const srcs = [`/${photo}.jpg`, `/${photo}.jpeg`]
  const [imgIdx, setImgIdx] = useState(0)

  return (
    <div style={{
      background: 'white',
      borderRadius: '24px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,31,84,0.06)',
      border: '1px solid rgba(0,31,84,0.05)',
      transition: 'all 0.4s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '3rem 1.5rem 2.5rem', // Increased padding for bigger card feel
      height: '100%',
      position: 'relative'
    }}
      onMouseEnter={e => { 
        e.currentTarget.style.transform = 'translateY(-8px)'; 
        e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,31,84,0.12)';
      }}
      onMouseLeave={e => { 
        e.currentTarget.style.transform = 'translateY(0)'; 
        e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,31,84,0.06)';
      }}
    >
      {/* Larger Decorative colored circle behind the photo */}
      <div style={{
        position: 'absolute',
        top: '2rem',
        width: '170px', // Increased size
        height: '170px', // Increased size
        borderRadius: '50%',
        background: 'linear-gradient(135deg, rgba(0, 31, 84, 0.08) 0%, rgba(0, 48, 128, 0.12) 100%)',
        zIndex: 0
      }} />

      {/* Larger Photo Container */}
      <div style={{ 
        width: '145px', // Increased from 115px
        height: '145px', // Increased from 115px
        borderRadius: '50%', 
        overflow: 'hidden', 
        marginBottom: '1.8rem', 
        border: '4px solid white', 
        boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
        position: 'relative',
        zIndex: 1,
        flexShrink: 0 
      }}>
        {imgIdx < srcs.length
          ? <img key={srcs[imgIdx]} src={srcs[imgIdx]} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={() => setImgIdx(i => i + 1)} />
          : <div style={{ width: '100%', height: '100%', background: '#001F54', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Lato', sans-serif", color: 'white', fontSize: '1.8rem', fontWeight: 700 }}>{initials}</div>
        }
      </div>

      {/* Text Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <h3 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem', lineHeight: 1.3 }}>{name}</h3>
        <span style={{ fontFamily: "'Lato', sans-serif", color: '#FFB703', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1.2px' }}>{designation}</span>
      </div>
    </div>
  )
}

export default function OurPeople() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />

      {/* Original Navy Gradient Header */}
      <section style={{ 
        minHeight: '42vh', 
        background: 'linear-gradient(rgba(0,31,84,0.88), rgba(0,31,84,0.96))', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        padding: '9rem 5% 4rem' 
      }}>
        <div>
          <h1 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.15, fontWeight: 700 }}>Our People</h1>
          <Divider />
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', marginTop: '1.4rem', fontWeight: 400, maxWidth: '540px', lineHeight: 1.8 }}>The individuals behind Upekkha's mission</p>
        </div>
      </section>

      {/* Core Team - Adjusted for Larger Cards */}
      <section style={{ padding: '7rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}> {/* Increased maxWidth for bigger cards */}
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 700, textAlign: 'center' }}>Core Team</h2>
          <Divider />
          <div style={{ 
            marginTop: '4rem', 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', // Increased min width
            gap: '3rem' 
          }}>
            {TEAM.map(person => (
              <PersonCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section style={{ padding: '6rem 5% 9rem', background: '#f8f9fc' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 700, textAlign: 'center' }}>Advisors</h2>
          <Divider />
          <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
            {ADVISORS.map(person => (
              <div key={person.name} style={{ width: '340px' }}> {/* Matched card width */}
                <PersonCard {...person} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}