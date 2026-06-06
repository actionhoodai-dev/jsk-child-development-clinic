import React from 'react';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'About Us',
  description:
    'Learn about JSK Child Development & Physiotherapy Center, our history, founder credentials, clinical philosophy, and our journey to bringing world-class therapy to Karaikudi.',
};

export default function About() {
  return (
    <div>
      {/* Page Title */}
      <section className="section section-teal text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal direction="fade">
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>About Our Center</h1>
            <p style={{ color: 'rgba(250, 250, 248, 0.85)', margin: 0, fontSize: '1.25rem' }}>
              Evidence-Based Pediatric & Adult Rehabilitation in Karaikudi
            </p>
          </Reveal>
        </div>
      </section>

      {/* Founder Story & Clinical Philosophy */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal direction="left">
              <div>
                <h2>Our Founder's Vision</h2>
                <p>
                  JSK Child Development & Physiotherapy Center was founded with a single mission: to make world-class pediatric therapy and adult physical rehabilitation accessible to families in Karaikudi and the surrounding Chettinad region.
                </p>
                <p>
                  Recognizing the lack of integrated clinical spaces where children with neurodevelopmental challenges could receive speech, occupational, and behavior therapies under one roof, our founder established JSK.
                </p>
                <p>
                  With **advanced clinical training and protocols imported from Canada**, JSK introduces evidence-based practices that focus on measurable outcomes. We believe in treating patients with absolute compassion, respect, and clinical precision.
                </p>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div
                style={{
                  backgroundColor: 'var(--contrast-navy)',
                  color: '#ffffff',
                  padding: '40px',
                  borderRadius: '8px',
                  borderTop: '5px solid var(--accent-orange)',
                }}
              >
                <h3 style={{ color: '#ffffff', marginBottom: '25px' }}>Our Core Principles</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-orange)' }}>01</span>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Patient-First Care</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      Every therapy plan is completely custom, designed around the unique challenges and environment of the patient.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-orange)' }}>02</span>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Bilingual Support</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      Timely communication in Tamil and English so families fully comprehend the goals of the therapies.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <span style={{ fontSize: '1.5rem', color: 'var(--accent-orange)' }}>03</span>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Integrity & Transparency</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      Honest assessments, clear developmental charts, and no unneeded therapy recommendations.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Qualifications Grid */}
      <section className="section" style={{ backgroundColor: 'var(--light-gray)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <Reveal direction="up">
              <h2>Clinical Qualifications & Credentials</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '650px', margin: '0 auto' }}>
                JSK Center operates under strict compliance with medical codes, ensuring our staff maintains standard certifications.
              </p>
            </Reveal>
          </div>

          <div className="grid-3">
            <Reveal direction="up" delay={0}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-gray)',
                  height: '100%',
                }}
              >
                <i className="fas fa-graduation-cap" style={{ fontSize: '2rem', color: 'var(--primary-teal)', marginBottom: '15px' }}></i>
                <h4 style={{ color: 'var(--contrast-navy)', marginBottom: '10px' }}>Canadian Accreditations</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                  Lead physiotherapist holds advanced clinical certifications from recognized Canadian rehabilitation institutes, specialized in spinal mobilizations and neuromuscular rehab.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-gray)',
                  height: '100%',
                }}
              >
                <i className="fas fa-certificate" style={{ fontSize: '2rem', color: 'var(--primary-purple)', marginBottom: '15px' }}></i>
                <h4 style={{ color: 'var(--contrast-navy)', marginBottom: '10px' }}>IAP Registration</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                  Fully registered members of the Indian Association of Physiotherapists (IAP) and other allied health bodies, enforcing absolute medical ethics.
                </p>
              </div>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div
                style={{
                  backgroundColor: '#ffffff',
                  padding: '30px',
                  borderRadius: '6px',
                  border: '1px solid var(--border-gray)',
                  height: '100%',
                }}
              >
                <i className="fas fa-users-viewfinder" style={{ fontSize: '2rem', color: 'var(--primary-teal)', marginBottom: '15px' }}></i>
                <h4 style={{ color: 'var(--contrast-navy)', marginBottom: '10px' }}>Multidisciplinary Panel</h4>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', marginBottom: 0 }}>
                  Our clinic combines licensed Occupational Therapists, speech-language pathologists, behavior specialists, and pediatric physical therapists on one board.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Clinical Approach & Care Model */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '55px' }}>
            <Reveal direction="up">
              <h2>Our Clinical Care Model</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '750px', margin: '0 auto' }}>
                JSK Center is built upon modern patient care frameworks that combine multidisciplinary collaboration, parent integration, and specialized therapeutic environments.
              </p>
            </Reveal>
          </div>

          <div className="grid-2" style={{ gap: '30px', margin: '0 auto', maxWidth: '1100px' }}>
            <Reveal direction="left">
              <div style={{
                backgroundColor: '#ffffff',
                padding: '35px',
                borderRadius: '8px',
                border: '1px solid var(--border-gray)',
                borderLeft: '5px solid var(--primary-teal)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <i className="fas fa-users" style={{ fontSize: '1.8rem', color: 'var(--primary-teal)', marginTop: '5px' }}></i>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--contrast-navy)', marginBottom: '10px' }}>Multidisciplinary Synergy</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>
                      Unlike standard clinic setups where therapists practice in isolation, our pediatric panel (occupational, speech, and behavior therapists) conducts structured, joint file reviews. This collaborative synergy ensures that every child's physical, speech, and sensory milestones are aligned and mutually reinforced.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div style={{
                backgroundColor: '#ffffff',
                padding: '35px',
                borderRadius: '8px',
                border: '1px solid var(--border-gray)',
                borderLeft: '5px solid var(--primary-purple)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <i className="fas fa-house-chimney-user" style={{ fontSize: '1.8rem', color: 'var(--primary-purple)', marginTop: '5px' }}></i>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--contrast-navy)', marginBottom: '10px' }}>Home-Transition Support</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>
                      We recognize that 1–2 clinical sessions a week are only the foundation. Lasting developmental progress happens in the child's daily environment. We run a dedicated parent coaching program, providing families with practical home action plans, milestone tracking sheets, and structured exercises.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="left">
              <div style={{
                backgroundColor: '#ffffff',
                padding: '35px',
                borderRadius: '8px',
                border: '1px solid var(--border-gray)',
                borderLeft: '5px solid var(--accent-orange)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <i className="fas fa-cubes-stacked" style={{ fontSize: '1.8rem', color: 'var(--accent-orange)', marginTop: '5px' }}></i>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--contrast-navy)', marginBottom: '10px' }}>Distraction-Free Spaces</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>
                      Our clinical environment is custom-designed to optimize focus. Speech-language rooms are acoustically isolated to eliminate sensory overload. The sensory integration gyms are structured to feel like safe play areas while systematically challenging and building balance, motor planning, and coordination.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right">
              <div style={{
                backgroundColor: '#ffffff',
                padding: '35px',
                borderRadius: '8px',
                border: '1px solid var(--border-gray)',
                borderLeft: '5px solid var(--primary-teal)',
                height: '100%'
              }}>
                <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                  <i className="fas fa-chart-line" style={{ fontSize: '1.8rem', color: 'var(--primary-teal)', marginTop: '5px' }}></i>
                  <div>
                    <h3 style={{ fontSize: '1.25rem', color: 'var(--contrast-navy)', marginBottom: '10px' }}>Measurable Progression</h3>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: 0 }}>
                      Therapy at JSK is entirely objective. We implement standardized assessment metrics (such as range-of-motion angles, coordination scores, and speech clarity scales). Every milestone is documented clearly, giving parents and adult patients transparent visibility into actual functional improvements.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Motto & Vision Statement */}
      <section className="section section-teal text-center" style={{ padding: '80px 0', borderTop: '5px solid var(--accent-orange)' }}>
        <div className="container">
          <Reveal direction="fade">
            <h3 style={{ textTransform: 'uppercase', letterSpacing: '2px', fontSize: '1.1rem', color: 'var(--accent-orange)', marginBottom: '15px' }}>Our Core Motto</h3>
            <h2 style={{ fontSize: '3rem', fontWeight: '800', color: '#ffffff', fontStyle: 'italic', margin: '0 0 20px 0', fontFamily: 'var(--font-headings)' }}>
              "small steps big progress"
            </h2>
            <p style={{ maxWidth: '750px', margin: '0 auto', color: 'rgba(250, 250, 248, 0.85)', fontSize: '1.15rem', lineHeight: '1.6' }}>
              We believe that physical recovery and developmental milestones are not won in giant leaps, but through consistent, focused effort. By valuing every single success in movement, speech, and coordination, we build the momentum for life-changing long-term progress.
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
