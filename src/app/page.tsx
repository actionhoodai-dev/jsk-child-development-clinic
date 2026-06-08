import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import StatCounter from '@/components/StatCounter';
import Reveal from '@/components/Reveal';

export default function Home() {
  return (
    <div>
      {/* 1. Hero Section */}
      <section className="hero-section text-light section-navy" style={{ position: 'relative', overflow: 'hidden' }}>
        {/* Abstract solid color grids in background to represent the premium aesthetic without blurry blurs */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '45%',
            height: '100%',
            backgroundColor: 'var(--primary-teal)',
            clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)',
            zIndex: 1,
            opacity: 0.85,
          }}
        ></div>
        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '100px 24px' }}>
          <div className="hero-grid">
            {/* Left Column: Text & CTAs */}
            <div>
              <Reveal direction="up">
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'var(--accent-orange)',
                    color: 'var(--contrast-navy)',
                    padding: '6px 16px',
                    fontWeight: '800',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    marginBottom: '20px',
                    letterSpacing: '1px',
                  }}
                >
                  World-Class Clinical Rehabilitation
                </span>
              </Reveal>
              <Reveal direction="up" delay={150}>
                <h1 style={{ fontSize: '3.5rem', marginBottom: '25px', lineHeight: '1.15', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  Small Steps, Big Progress
                </h1>
              </Reveal>
              <Reveal direction="up" delay={300}>
                <p style={{ fontSize: '1.25rem', color: 'rgba(250, 250, 248, 0.85)', marginBottom: '35px' }}>
                  JSK Center is Karaikudi's premier facility for Child Development therapies and advanced adult
                  Physiotherapy. Experience international treatment protocols formulated by Canada-trained experts.
                </p>
              </Reveal>
              <Reveal direction="up" delay={450}>
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  <Link href="/contact" className="btn btn-accent">
                    Book Appointment
                  </Link>
                  <Link href="/child-services" className="btn btn-outline-white">
                    Explore Services
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Column: Floating Logo Display */}
            <div className="hero-logo-col">
              <Reveal direction="fade" delay={300}>
                <div className="hero-logo-card">
                  <Image
                    src="/assets/logo.png"
                    alt="JSK Clinic Logo"
                    width={320}
                    height={80}
                    style={{ display: 'block', height: 'auto', width: '100%' }}
                    priority
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Clinic Stats Bar */}
      <section className="stats-section section-teal text-center" style={{ padding: '50px 0', borderBottom: '5px solid var(--accent-orange)' }}>
        <div className="container">
          <div className="grid-4">
            <Reveal direction="up" delay={0}>
              <div style={{ padding: '10px' }}>
                <StatCounter targetNumber={15} suffix="+ Years" />
                <div style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.5px', marginTop: '5px', color: '#ffffff' }}>
                  Clinical Experience
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={100}>
              <div style={{ padding: '10px' }}>
                <StatCounter targetNumber={500} suffix="+" />
                <div style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.5px', marginTop: '5px', color: '#ffffff' }}>
                  Happy Families Helped
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={200}>
              <div style={{ padding: '10px' }}>
                <StatCounter targetNumber={15} suffix="+" />
                <div style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.5px', marginTop: '5px', color: '#ffffff' }}>
                  Specialist Therapists
                </div>
              </div>
            </Reveal>
            <Reveal direction="up" delay={300}>
              <div style={{ padding: '10px' }}>
                <StatCounter targetNumber={100} suffix="%" />
                <div style={{ fontWeight: '700', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '0.5px', marginTop: '5px', color: '#ffffff' }}>
                  Personalised Care Plans
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 3. Core Specialties Overview */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '60px' }}>
            <Reveal direction="up">
              <h2>Our Clinical Specialisations</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                We bridge pediatric developmental support and adult physical rehabilitation in two dedicated wings, ensuring targeted, world-class treatment for every patient.
              </p>
            </Reveal>
          </div>

          <div className="grid-2">
            {/* Child Development Card */}
            <Reveal direction="left">
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'var(--primary-teal)', padding: '40px', color: '#ffffff' }}>
                  <i className="fas fa-child" style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--accent-orange)' }}></i>
                  <h3 style={{ color: '#ffffff', fontSize: '1.8rem' }}>Child Development Wing</h3>
                  <p style={{ color: 'rgba(250,250,248,0.8)', marginBottom: 0 }}>
                    Specialised early intervention and therapy programs supporting infants and children with neuro-developmental challenges.
                  </p>
                </div>
                <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-teal)' }}></i>
                      <span>Speech & Language Therapy</span>
                    </li>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-teal)' }}></i>
                      <span>Occupational Therapy (OT)</span>
                    </li>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-teal)' }}></i>
                      <span>Special Education & Behavior Coaching</span>
                    </li>
                  </ul>
                  <Link href="/child-services" className="btn btn-primary" style={{ width: '100%' }}>
                    View Child Services
                  </Link>
                </div>
              </div>
            </Reveal>

            {/* Physiotherapy Card */}
            <Reveal direction="right">
              <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ backgroundColor: 'var(--primary-purple)', padding: '40px', color: '#ffffff' }}>
                  <i className="fas fa-hand-holding-medical" style={{ fontSize: '3rem', marginBottom: '20px', color: 'var(--accent-orange)' }}></i>
                  <h3 style={{ color: '#ffffff', fontSize: '1.8rem' }}>Physiotherapy Wing</h3>
                  <p style={{ color: 'rgba(250,250,248,0.8)', marginBottom: 0 }}>
                    Advanced orthopaedic, neurological, and geriatric physiotherapy programs helping you recover mobility and live pain-free.
                  </p>
                </div>
                <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <ul style={{ listStyle: 'none', marginBottom: '30px' }}>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-purple)' }}></i>
                      <span>Stroke & Neurological Rehabilitation</span>
                    </li>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-purple)' }}></i>
                      <span>Orthopaedic Pain & Joint stiffness Care</span>
                    </li>
                    <li style={{ padding: '12px 0', borderBottom: '1px solid var(--border-gray)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <i className="fas fa-check-circle" style={{ color: 'var(--primary-purple)' }}></i>
                      <span>Sports Injury Rehab & Muscle Recovery</span>
                    </li>
                  </ul>
                  <Link href="/physio-services" className="btn btn-purple" style={{ width: '100%' }}>
                    View Physiotherapy Services
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Canada-Trained specialist focus banner */}
      <section className="section section-navy" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal direction="left">
              <div>
                <span
                  style={{
                    display: 'inline-block',
                    backgroundColor: 'rgba(245, 166, 35, 0.1)',
                    color: 'var(--accent-orange)',
                    padding: '4px 12px',
                    fontWeight: '700',
                    fontSize: '0.8rem',
                    textTransform: 'uppercase',
                    borderRadius: '20px',
                    marginBottom: '15px',
                    border: '1px solid var(--accent-orange)',
                  }}
                >
                  Clinical Excellence
                </span>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Advanced Canadian Therapy Protocols</h2>
                <p style={{ color: 'rgba(250,250,248,0.75)', fontSize: '1.1rem' }}>
                  Our treatment methodologies are led and formulated by a **Canada-trained specialist** with vast clinical experience. We implement evidence-based diagnostic tools and advanced exercises designed to restore function and accelerate recovery.
                </p>
                <p style={{ color: 'rgba(250,250,248,0.75)', fontSize: '1.1rem', marginBottom: '30px' }}>
                  This brings the highest standards of international healthcare—such as neurodevelopmental treatments and orthopedic protocols—straight to the patients in Karaikudi.
                </p>
                <Link href="/about" className="btn btn-accent">
                  Read Our Credentials
                </Link>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div
                style={{
                  backgroundColor: 'rgba(250, 250, 248, 0.05)',
                  padding: '40px',
                  borderRadius: '8px',
                  border: '2px solid rgba(250, 250, 248, 0.1)',
                }}
              >
                <h3 style={{ color: 'var(--accent-orange)', marginBottom: '20px' }}>Why JSK Center?</h3>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <i className="fas fa-shield-halved" style={{ fontSize: '1.5rem', color: 'var(--primary-teal)', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Evidence-Based Practices</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      No guess work. We apply scientific, clinically validated protocols to track progress.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px', marginBottom: '20px' }}>
                  <i className="fas fa-laptop-medical" style={{ fontSize: '1.5rem', color: 'var(--primary-teal)', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>State-Of-The-Art Equipment</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      Equipped with modern pediatric sensory gyms and premium physiotherapy modalities.
                    </p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <i className="fas fa-heart" style={{ fontSize: '1.5rem', color: 'var(--primary-teal)', marginTop: '3px' }}></i>
                  <div>
                    <h4 style={{ color: '#ffffff', marginBottom: '5px' }}>Compassionate Environment</h4>
                    <p style={{ fontSize: '0.95rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                      A supportive, family-centered space designed to build trust and comfort for children.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. Google Reviews Section */}
      <section className="section section-white">
        <div className="container">
          {/* Google Reviews CTA */}
          <Reveal direction="up" delay={200}>
            <div className="google-review-banner">
              <div className="google-review-inner">
                <div className="google-review-left">
                  <div className="google-review-logo">
                    <svg viewBox="0 0 24 24" width="48" height="48">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="google-review-title">Google Reviews</h3>
                    <div className="google-review-stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <span className="google-review-rating">5.0</span>
                    </div>
                    <p className="google-review-subtitle">Rated by families across Karaikudi</p>
                  </div>
                </div>
                <div className="google-review-right">
                  <p className="google-review-text">
                    Had a great experience at JSK Center? We&apos;d love to hear from you! Your review helps other families discover the right care for their child.
                  </p>
                  <a
                    href="https://g.page/r/CZo9yjdJHBxKEBM/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-google-review"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" style={{ marginRight: '8px' }}>
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#fff"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#fff"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" fill="#fff"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#fff"/>
                    </svg>
                    Write a Review on Google
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
