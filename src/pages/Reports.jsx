import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const REPORTS = [
  { title: 'Upekkha Foundation Report (2025)', file: '/Upekkha_Foundation_Report.pdf' },
  { title: 'Project Astitva — Pilot Report (2025)', file: '/Project_Astitva_Report.pdf' },
]

const DownloadIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
  </svg>
)

export default function Reports() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />

      {/* Header */}
      <section style={{ minHeight: '42vh', background: 'linear-gradient(rgba(0,31,84,0.88), rgba(0,31,84,0.96))', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '9rem 5% 4rem' }}>
        <div>
          <h1 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.15, fontWeight: 700 }}>Research & Reports</h1>
          <div style={{ width: '56px', height: '3px', background: '#FFB703', borderRadius: '2px', margin: '1.2rem auto 0' }} />
        </div>
      </section>

      {/* Reports list */}
      <section style={{ padding: '7rem 5% 10rem', background: 'white' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
          {REPORTS.map(report => (
            <div key={report.title}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '2.2rem 2.8rem', borderRadius: '12px', border: '1px solid rgba(0,31,84,0.1)', borderLeft: '5px solid #FFB703', boxShadow: '0 4px 24px rgba(0,31,84,0.06)', gap: '2rem', flexWrap: 'wrap', background: 'white', transition: 'box-shadow 0.3s' }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,31,84,0.12)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,31,84,0.06)'}
            >
              <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.1rem, 2.5vw, 1.45rem)', fontWeight: 700, lineHeight: 1.3 }}>{report.title}</h2>
              <a href={report.file} download
                style={{ fontFamily: "'Lato', sans-serif", display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#001F54', color: 'white', padding: '0.85rem 2rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 700, fontSize: '0.88rem', whiteSpace: 'nowrap', flexShrink: 0, transition: 'all 0.3s', letterSpacing: '0.04em' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FFB703'; e.currentTarget.style.color = '#001F54' }}
                onMouseLeave={e => { e.currentTarget.style.background = '#001F54'; e.currentTarget.style.color = 'white' }}
              >
                <DownloadIcon /> Download PDF
              </a>
            </div>
          ))}
        </div>
        <p style={{ fontFamily: "'Lato', sans-serif", textAlign: 'center', color: '#aaa', fontSize: '0.85rem', fontWeight: 400, maxWidth: '600px', margin: '4rem auto 0' }}>
          These reports are the intellectual property of Upekkha Foundation, protected under the Copyright Act, 1957. For questions, contact{' '}
          <a href="mailto:foundation.upekkha@gmail.com" style={{ fontFamily: "'Lato', sans-serif", color: '#001F54', fontWeight: 700 }}>foundation.upekkha@gmail.com</a>
        </p>
      </section>

      <Footer />
    </>
  )
}
