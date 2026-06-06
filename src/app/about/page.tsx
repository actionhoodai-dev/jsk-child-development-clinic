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
              The Story, Philosophy, and Milestones of JSK Rehab Center
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

      {/* Clinic Timeline */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <Reveal direction="up">
              <h2>Our Timeline & Milestones</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '600px', margin: '0 auto' }}>
                How JSK grew from a localized physiotherapy practice to Karaikudi's foremost pediatric rehabilitation landmark.
              </p>
            </Reveal>
          </div>

          {/* Timeline Node Chain */}
          <div className="timeline">
            {/* Year 1 */}
            <div className="timeline-item timeline-left">
              <Reveal direction="left">
                <div className="timeline-content">
                  <div className="timeline-year">2016</div>
                  <h4>Clinic Foundation</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                    JSK started as a specialized orthopaedic physiotherapy center in Karaikudi, focusing on back pain, neck pain, and post-surgery recovery.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Year 2 */}
            <div className="timeline-item timeline-right">
              <Reveal direction="right">
                <div className="timeline-content">
                  <div className="timeline-year">2018</div>
                  <h4>Early Intervention Launch</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                    Identified a strong regional demand for expert developmental support. Launched occupational and speech therapies for children with Autism and ADHD.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Year 3 */}
            <div className="timeline-item timeline-left">
              <Reveal direction="left">
                <div className="timeline-content">
                  <div className="timeline-year">2021</div>
                  <h4>Advanced Canadian Protocols</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                    Our founder completed specialized pediatric and spinal training in Canada, introducing state-of-the-art neurological exercises to the clinic.
                  </p>
                </div>
              </Reveal>
            </div>

            {/* Year 4 */}
            <div className="timeline-item timeline-right">
              <Reveal direction="right">
                <div className="timeline-content">
                  <div className="timeline-year">2024</div>
                  <h4>Integrated Rehabilitation Center</h4>
                  <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>
                    Relocated to our current flagship facility at Chekkalai, featuring dedicated speech therapy rooms, a sensory integration gym, and a pediatric physical therapy center.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
