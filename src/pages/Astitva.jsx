import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const PHASES = [
  {
    num: 'STAGE 01',
    title: 'Outreach & Partnerships',
    body: 'Built initial access by connecting with schools and learning centres across Pune.',
    bullets: ['Reached out to government schools and NGO centres', 'Built relationships and secured collaborations'],
  },
  {
    num: 'STAGE 02',
    title: 'Ground-Level Research',
    body: 'Studied real classroom conditions to understand student needs and institutional gaps.',
    bullets: ['Conducted surveys, observations, and assessments', 'Identified learning gaps, language barriers, and low exposure levels'],
  },
  {
    num: 'STAGE 03',
    title: 'Curriculum Design',
    body: 'Designed learning modules based on the data and on what students actually needed.',
    bullets: ['Built flexible, activity-based sessions.', 'Focused on core academics, extra-curriculars, and exposure to broader career prospects.'],
  },
  {
    num: 'STAGE 04',
    title: 'On-Ground Implementation',
    body: 'Tested the modules through direct teaching and student interactions for a continued period of time to ensure sustained exposure and a better learning experience for the beneficiaries.',
  },
]

const EVOLUTION = [
  { from: 'FROM TEACHING', to: 'To Research' },
  { from: 'FROM SESSIONS', to: 'To Systems' },
  { from: 'FROM SHORT-TERM', to: 'To Scalable' },
]

function Divider({ align = 'center' }) {
  return <div style={{ width: '56px', height: '3px', background: '#FFB703', borderRadius: '2px', margin: align === 'center' ? '0.9rem auto 0' : '0.9rem 0 0' }} />
}

export default function Astitva() {
  const navigate = useNavigate()
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <>
      <Navbar />

      {/* Header */}
      <section style={{ minHeight: '42vh', background: 'linear-gradient(rgba(0,31,84,0.88), rgba(0,31,84,0.96))', display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '9rem 5% 4rem' }}>
        <div>
          <h1 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4rem)', lineHeight: 1.15, fontWeight: 700 }}>Project Astitva</h1>
          <Divider />
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '5rem 5% 6rem', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.08rem', lineHeight: 1.9, color: '#333', marginBottom: '1.4rem', fontWeight: 400 }}>Project Astitva is Upekkha's initiative into the public education ecosystem in Pune, focused on understanding what students and institutions need beyond core academics.</p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.08rem', lineHeight: 1.9, color: '#333', marginBottom: '1.4rem', fontWeight: 400 }}>Through field visits, needs assessments, and direct engagement with government schools and NGO learning centres, the initiative studies on-ground learning gaps, exposure levels, and the constraints that shape student outcomes.</p>
          <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.08rem', lineHeight: 1.9, color: '#333', fontWeight: 400 }}>It is a research-driven effort to learn from real contexts and build practical, scalable frameworks that can support long-term improvement in public education systems.</p>
        </div>
      </section>

      {/* Why Astitva */}
      <section style={{ padding: '6rem 5%', background: '#F8F9FC' }}>
        <div className="why-astitva-grid" style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
          <div>
            <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700 }}>Why Astitva?</h2>
            <Divider align="left" />
            <div style={{ marginTop: '2rem' }}>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', lineHeight: 1.9, color: '#333', marginBottom: '1.3rem', fontWeight: 400 }}>Our early work showed us that while direct service meets immediate needs, long-term change in education depends on how systems function.</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', lineHeight: 1.9, color: '#333', marginBottom: '1.3rem', fontWeight: 400 }}>For change to last, it has to be shaped by evidence and content that addresses the root cause of any systematic problem.</p>
              <p style={{ fontFamily: "'Lato', sans-serif", fontSize: '1.05rem', lineHeight: 1.9, color: '#333', fontWeight: 400 }}>Project Astitva comes from this shift in approach, moving from direct support to a deeper understanding of existing problems, and from isolated action to research-aligned action that can strengthen public education over time.</p>
            </div>
          </div>
          <div style={{ width: '100%', aspectRatio: '4/3', borderRadius: '16px', overflow: 'hidden', background: '#c8d3e8 url("/img-astitva-why.jpg") center/cover no-repeat', boxShadow: '0 12px 40px rgba(0,31,84,0.12)' }} />
        </div>
      </section>

      {/* Pilot phases */}
      <section style={{ padding: '6rem 5%', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700, textAlign: 'center' }}>Pilot Phase: Project Astitva</h2>
          <Divider />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#666', fontSize: '1rem', textAlign: 'center', marginTop: '1rem', marginBottom: '4rem', fontWeight: 400 }}>Project Astitva moved through four focused stages of learning and implementation.</p>
          <div className="phases-grid" style={{ border: '1px solid #e2e6ef', borderRadius: '12px', overflow: 'hidden' }}>
            {PHASES.map(phase => (
              <div key={phase.num} className="phase-cell" style={{ padding: '3rem 3.2rem', background: 'white' }}>
                <span style={{ fontFamily: "'Lato', sans-serif", display: 'inline-block', border: '1.5px solid #001F54', color: '#001F54', borderRadius: '50px', padding: '0.25rem 0.9rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '1.4rem' }}>{phase.num}</span>
                <h3 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: '1.55rem', fontWeight: 700, lineHeight: 1.25, marginBottom: '1rem' }}>{phase.title}</h3>
                <p style={{ fontFamily: "'Lato', sans-serif", color: '#444', fontSize: '0.98rem', lineHeight: 1.8, fontWeight: 400, marginBottom: phase.bullets ? '1rem' : 0 }}>{phase.body}</p>
                {phase.bullets && (
                  <ul style={{ paddingLeft: '1.2rem' }}>
                    {phase.bullets.map(b => <li key={b} style={{ fontFamily: "'Lato', sans-serif", color: '#555', fontSize: '0.95rem', lineHeight: 1.7, fontWeight: 400, marginBottom: '0.25rem' }}>{b}</li>)}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evolution */}
      <section style={{ background: '#001F54', padding: '6rem 5%', textAlign: 'center' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#FFB703', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.8rem', fontWeight: 700, marginBottom: '2rem' }}>The Evolution</p>
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", fontStyle: 'italic', color: 'white', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', lineHeight: 1.3, marginBottom: '2rem', fontWeight: 600 }}>
            "Good intentions don't create impact.<br />Understanding systems does."
          </h2>
          <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.8, maxWidth: '620px', margin: '0 auto 4rem', fontWeight: 400 }}>Based on our learnings, Project Astitva is evolving in its approach. We realised that meaningful change in education requires structure, continuity, and closer alignment with institutions.</p>
          <div className="evolution-cards">
            {EVOLUTION.map(e => (
              <div key={e.from} className="evolution-card">
                <p style={{ fontFamily: "'Lato', sans-serif", color: 'rgba(255,255,255,0.65)', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '2px' }}>{e.from}</p>
                <span style={{ color: '#FFB703', fontSize: '1.4rem', display: 'block', margin: '0.6rem 0' }}>→</span>
                <p style={{ fontFamily: "'Noto Serif Devanagari', serif", color: 'white', fontSize: '1.6rem', fontWeight: 700 }}>{e.to}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Future */}
      <section style={{ padding: '6rem 5%', background: '#F8F9FC', textAlign: 'center' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700 }}>The Future of Project Astitva</h2>
          <Divider />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#444', fontSize: '1.08rem', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem' }}>Project Astitva now focuses on studying on-ground realities, building practical frameworks, and connecting grassroots understanding with decision-making systems to strengthen public education.</p>
        </div>
      </section>

      {/* Reports CTA */}
      <section style={{ padding: '5rem 5% 8rem', background: 'white', textAlign: 'center' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Noto Serif Devanagari', serif", color: '#001F54', fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 700 }}>Read Our Research</h2>
          <Divider />
          <p style={{ fontFamily: "'Lato', sans-serif", color: '#444', fontSize: '1.05rem', lineHeight: 1.9, fontWeight: 400, marginTop: '2rem', marginBottom: '2.5rem' }}>The full pilot report documents our findings, methodology, and recommendations for improving learning outcomes in public schools.</p>
          <button onClick={() => navigate('/reports')} style={{ fontFamily: "'Lato', sans-serif", background: '#001F54', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', border: 'none', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.05em', cursor: 'pointer', transition: 'all 0.3s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#FFB703'; e.currentTarget.style.color = '#001F54' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#001F54'; e.currentTarget.style.color = 'white' }}
          >View Reports →</button>
          <p style={{ marginTop: '2rem', color: '#999', fontSize: '0.85rem' }}>
            Or visit the full <button onClick={() => navigate('/reports')} style={{ fontFamily: "'Lato', sans-serif", background: 'none', border: 'none', color: '#001F54', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem', textDecoration: 'underline' }}>Reports page →</button>
          </p>
        </div>
      </section>

      <Footer />
    </>
  )
}
