import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// You can use icons from a library like react-icons, or simple high-quality SVGs/images
// If using react-icons: npm install react-icons
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const contactLinks = [
    {
      name: 'LinkedIn',
      icon: <FaLinkedinIn />,
      handle: 'Upekkha Foundation',
      link: 'https://linkedin.com/company/upekkha-foundation', // Update with real link
      color: '#0077b5'
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      handle: '@upekkha.foundation',
      link: 'https://instagram.com/upekkha.foundation', // Update with real link
      color: '#E1306C'
    },
    {
      name: 'Email',
      icon: <FaEnvelope />,
      handle: 'upekkhafoundation@gmail.com',
      link: 'mailto:upekkhafoundation@gmail.com',
      color: '#FFB703'
    }
  ]

  return (
    <div style={{ backgroundColor: '#fcfdfe', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      {/* Header Section */}
      <section style={{ 
        padding: '10rem 5% 4rem', 
        background: 'linear-gradient(135deg, #001F54 0%, #003080 100%)',
        textAlign: 'center',
        color: 'white'
      }}>
        <h1 style={{ fontFamily: "'Noto Serif Devanagari', serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700 }}>Get in Touch</h1>
        <div style={{ width: '60px', height: '3px', background: '#FFB703', margin: '1.5rem auto', borderRadius: '2px' }} />
        <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.1rem', opacity: 0.8, maxWidth: '600px', margin: '0 auto' }}>
          Connect with us on social media or reach out via email. We are always open to collaborations and conversations.
        </p>
      </section>

      {/* Contact Cards Section */}
      <section style={{ flex: 1, padding: '5rem 5%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1100px', 
          width: '100%' 
        }}>
          {contactLinks.map((item) => (
            <a 
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div className="contact-card" style={{
                background: 'white',
                padding: '3rem 2rem',
                borderRadius: '24px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,31,84,0.05)',
                border: '1px solid rgba(0,31,84,0.05)',
                transition: 'all 0.3s ease',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,31,84,0.1)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,31,84,0.05)';
              }}>
                <div style={{ 
                  fontSize: '2.5rem', 
                  color: item.color, 
                  marginBottom: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: '1.5rem', marginBottom: '0.5rem' }}>{item.name}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(0,31,84,0.6)', fontWeight: 500 }}>{item.handle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}