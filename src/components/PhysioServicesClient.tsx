'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

interface PhysioCondition {
  id: string;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  image: string;
  svgIcon: React.ReactNode;
}

const CONDITIONS_DATA: PhysioCondition[] = [
  {
    id: 'neck-pain',
    titleEn: 'Neck Pain & Cervical Spondylosis',
    titleTa: 'கழுத்து வலி & சர்விகல் ஸ்பான்டிலோசிஸ்',
    descriptionEn: 'Traction, posture corrections, and manual therapy to relieve cervical nerve compression.',
    descriptionTa: 'கழுத்து நரம்பு அழுத்தத்தை போக்க தசை நீட்சி, சீரமைப்பு மற்றும் உடற்பயிற்சி சிகிச்சை.',
    image: '/assets/neck_traction.png',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C8.13 2 5 5.13 5 9C5 12.38 7.39 15.2 10.58 15.82C9.5 17.5 8 18.5 8 20V22H16V20C16 18.5 14.5 17.5 13.42 15.82C16.61 15.2 19 12.38 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="9" r="3" stroke="var(--accent-orange)" strokeWidth="2" />
        <path d="M12 15V19" stroke="var(--accent-orange)" strokeWidth="2" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    id: 'back-pain',
    titleEn: 'Back Pain & Sciatica',
    titleTa: 'முதுகு வலி & சியாட்டிகா',
    descriptionEn: 'Core stabilization and spinal decompression exercise protocols to ease lumbar nerve pain.',
    descriptionTa: 'இடுப்பு நரம்பு அழுத்தத்தை போக்க உடற்பயிற்சி மற்றும் தண்டுவட தளர்வு சிகிச்சை.',
    image: '/assets/spine_decompression.png',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V21M7 5H17M7 9H17M7 13H17M7 17H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 9L15 11M12 13L9 15" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="13" r="2" fill="var(--accent-orange)" />
      </svg>
    ),
  },
  {
    id: 'joint-stiffness',
    titleEn: 'Joint Stiffness & Arthritis',
    titleTa: 'மூட்டு வலி & வாத நோய்',
    descriptionEn: 'Gentle mobilization drills to reduce swelling and recover your knee and hip flexibility.',
    descriptionTa: 'மூட்டு வீக்கம் மற்றும் வலியைக் குறைக்க எளிய அசைவு பயிற்சிகள் மற்றும் சிகிச்சை.',
    image: '/assets/joint_mobilization.png',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 5C5 5 8 2 12 2C16 2 19 5 19 5M5 19C5 19 8 22 12 22C16 22 19 19 19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="4" stroke="var(--accent-orange)" strokeWidth="2" />
        <line x1="8" y1="12" x2="16" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'stroke-rehab',
    titleEn: 'Stroke Rehabilitation',
    titleTa: 'பக்கவாத மறுவாழ்வு',
    descriptionEn: 'Neuro-facilitation and motor relearning protocols to restore control over affected limbs.',
    descriptionTa: 'பக்கவாதத்தால் பாதிக்கப்பட்ட கை, கால் இயக்கங்களை மீண்டும் பெற நரம்பியல் உடற்பயிற்சி சிகிச்சை.',
    image: '/assets/stroke_neuro_rehab.png',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 2C9.5 2 12 4.5 12 7C12 9.5 9.5 12 9.5 12M14.5 2C14.5 2 12 4.5 12 7C12 9.5 14.5 12 14.5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 12V22" stroke="currentColor" strokeWidth="2" />
        <path d="M6 16C6 16 9 17 12 17C15 17 18 16 18 16" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'sports-injury',
    titleEn: 'Sports Injury & Muscle Strain',
    titleTa: 'விளையாட்டு காயங்கள் & தசை பிடிப்பு',
    descriptionEn: 'Rapid recovery plans for ankle sprains, tennis elbow, and soft tissue ligament injuries.',
    descriptionTa: 'விளையாடும் போது ஏற்படும் தசை பிடிப்புகள், சுளுக்குகள் மற்றும் ஜவ்வு கிழிதல்களுக்கான விரைவான தீர்வு.',
    image: '/assets/sports_injury_rehab.png',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 5L19 11M5 13L11 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 20L20 4" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" />
        <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'frozen-shoulder',
    titleEn: 'Shoulder Pain & Frozen Shoulder',
    titleTa: 'தோள்பட்டை வலி & உறைந்த தோள்பட்டை',
    descriptionEn: 'Gradual passive movement schedules to restore full shoulder range of motion.',
    descriptionTa: 'தோள்பட்டை இயக்கத்தை முழுமையாக மீட்டெடுக்க படிப்படியான உடற்பயிற்சி சிகிச்சை.',
    image: '/assets/shoulder_rehab.jpg',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 3C12 3 9 7 9 12C9 17 12 21 12 21" stroke="var(--accent-orange)" strokeWidth="2" />
        <line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
  {
    id: 'post-surgery',
    titleEn: 'Post-Surgery Rehabilitation',
    titleTa: 'அறுவை சிகிச்சைக்கு பிந்தைய மறுவாழ்வு',
    descriptionEn: 'Guided therapies following fracture settings, knee replacements, and tendon repairs.',
    descriptionTa: 'எலும்பு முறிவு, மூட்டு மாற்று மற்றும் தசைநார் அறுவை சிகிச்சைக்கு பிந்தைய உடற்பயிற்சிகள்.',
    image: '/assets/post_surgery.jpg',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3V21M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M7 7L17 17M17 7L7 17" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'neuro-rehab',
    titleEn: 'Cerebral Palsy & Neuro Rehab',
    titleTa: 'செரிப்ரல் பால்சி & நரம்பியல் மறுவாழ்வு',
    descriptionEn: 'Neurodevelopmental Therapy (NDT) to optimize muscle coordination and motor actions.',
    descriptionTa: 'தசை இயக்கம் மற்றும் கட்டுப்பாட்டை மேம்படுத்த நரம்பியல் வளர்ச்சி சிகிச்சை.',
    image: '/assets/neuro_rehab.jpg',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M12 6V18M8 10H16M9 14H15" stroke="var(--accent-orange)" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'geriatric-mobility',
    titleEn: 'Geriatric Mobility & Fall Prevention',
    titleTa: 'முதியோர் இயக்கம் & தடுமாற்ற தடுப்பு',
    descriptionEn: 'Balance and strength training for senior citizens to restore safety and walking confidence.',
    descriptionTa: 'முதியவர்கள் பாதுகாப்பாகவும் நம்பிக்கையுடனும் நடக்க சமநிலை மற்றும் பலப்படுத்தும் பயிற்சிகள்.',
    image: '/assets/geriatric_mobility.jpg',
    svgIcon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3C7.03 3 3 7.03 3 12C3 16.97 7.03 21 12 21C16.97 21 21 16.97 21 12" stroke="currentColor" strokeWidth="2" />
        <circle cx="12" cy="12" r="3" fill="var(--accent-orange)" />
        <path d="M12 15L15 18M12 15L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
];

export default function PhysioServicesClient() {
  const [isMobile, setIsMobile] = useState(false);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Split conditions into chunks of 3
  const chunkedData: PhysioCondition[][] = [];
  for (let i = 0; i < CONDITIONS_DATA.length; i += 3) {
    chunkedData.push(CONDITIONS_DATA.slice(i, i + 3));
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const [activeIndices, setActiveIndices] = useState<Record<number, number>>({
    0: 0,
    1: 0,
    2: 0,
  });

  const scrollRow = (rowIndex: number, direction: 'left' | 'right') => {
    const container = rowRefs.current[rowIndex];
    if (!container) return;

    const card = container.querySelector('.physio-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;

    const newScroll = direction === 'right'
      ? container.scrollLeft + step
      : container.scrollLeft - step;

    container.scrollTo({
      left: newScroll,
      behavior: 'smooth',
    });
  };

  const scrollToCard = (rowIndex: number, cardIndex: number) => {
    const container = rowRefs.current[rowIndex];
    if (!container) return;

    const card = container.querySelector('.physio-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;

    container.scrollTo({
      left: cardIndex * step,
      behavior: 'smooth',
    });
  };

  const handleRowScroll = (rowIndex: number) => {
    const container = rowRefs.current[rowIndex];
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const card = container.querySelector('.physio-card') as HTMLElement;
    if (!card) return;

    const cardWidth = card.clientWidth;
    const gap = 16;
    const step = cardWidth + gap;

    const index = Math.round(scrollLeft / step);
    const clampedIndex = Math.max(0, Math.min(2, index));

    setActiveIndices((prev) => {
      if (prev[rowIndex] === clampedIndex) return prev;
      return { ...prev, [rowIndex]: clampedIndex };
    });
  };

  return (
    <div>
      {/* Title Banner */}
      <section className="section section-teal text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal direction="fade">
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>Physiotherapy Wing</h1>
            <p style={{ color: 'rgba(250, 250, 248, 0.85)', margin: 0, fontSize: '1.25rem' }}>
              Advanced Movement Restoration & Pain Management
            </p>
          </Reveal>
        </div>
      </section>

      {/* Conditions Matrix Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '55px' }}>
            <Reveal direction="up">
              <h2>Conditions We Treat</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '750px', margin: '0 auto' }}>
                We provide targeted physical rehabilitation for a wide range of neurological, musculoskeletal, and age-related physical limitations.
              </p>
            </Reveal>
          </div>

          {/* Desktop: full 3-column grid */}
          {!isMobile && (
            <div className="physio-grid">
              {CONDITIONS_DATA.map((cond, index) => (
                <Reveal key={cond.id} direction="up" delay={index * 50}>
                  <div className="physio-card card-has-image">
                    <div className="physio-card-image-wrapper">
                      <Image
                        src={cond.image}
                        alt={cond.titleEn}
                        fill
                        sizes="30vw"
                        className="physio-card-img"
                      />
                      <div className="physio-card-icon-overlay">
                        {cond.svgIcon}
                      </div>
                    </div>
                    <div className="physio-card-info" style={{ padding: '25px' }}>
                      <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'var(--contrast-navy)' }}>
                        <span className="lang-en" style={{ display: 'block', fontWeight: '700' }}>{cond.titleEn}</span>
                        <span className="lang-ta" style={{ display: 'block', fontSize: '0.95rem', marginTop: '4px', color: 'var(--primary-purple)' }}>{cond.titleTa}</span>
                      </h3>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.5' }}>
                        {cond.descriptionEn}
                      </p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--primary-teal)', fontWeight: '600', marginTop: '10px', marginBottom: 0, lineHeight: '1.5' }}>
                        {cond.descriptionTa}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}

          {/* Mobile: rows of 3 cards, each row with left/right arrow navigation */}
          {isMobile && (
            <div className="physio-rows-mobile">
              {chunkedData.map((row, rowIndex) => (
                <div key={rowIndex} className="physio-row-section">
                  <div className="physio-row-nav-wrapper">
                    {/* Left Arrow */}
                    <button
                      className="physio-nav-arrow physio-nav-arrow-left"
                      onClick={() => scrollRow(rowIndex, 'left')}
                      aria-label="Previous card"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>

                    {/* Scrollable row */}
                    <div
                      ref={(el) => { rowRefs.current[rowIndex] = el; }}
                      className="physio-grid carousel-mobile"
                      onScroll={() => handleRowScroll(rowIndex)}
                    >
                      {row.map((cond) => (
                        <div key={cond.id} className="carousel-slide-wrapper">
                          <div className="physio-card card-has-image">
                            <div className="physio-card-image-wrapper">
                              <Image
                                src={cond.image}
                                alt={cond.titleEn}
                                fill
                                sizes="85vw"
                                className="physio-card-img"
                              />
                              <div className="physio-card-icon-overlay">
                                {cond.svgIcon}
                              </div>
                            </div>
                            <div className="physio-card-info" style={{ padding: '20px' }}>
                              <h3 style={{ fontSize: '1.15rem', marginBottom: '10px', color: 'var(--contrast-navy)' }}>
                                <span className="lang-en" style={{ display: 'block', fontWeight: '700' }}>{cond.titleEn}</span>
                                <span className="lang-ta" style={{ display: 'block', fontSize: '0.9rem', marginTop: '4px', color: 'var(--primary-purple)' }}>{cond.titleTa}</span>
                              </h3>
                              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 0, lineHeight: '1.5' }}>
                                {cond.descriptionEn}
                              </p>
                              <p style={{ fontSize: '0.8rem', color: 'var(--primary-teal)', fontWeight: '600', marginTop: '8px', marginBottom: 0, lineHeight: '1.5' }}>
                                {cond.descriptionTa}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Right Arrow */}
                    <button
                      className="physio-nav-arrow physio-nav-arrow-right"
                      onClick={() => scrollRow(rowIndex, 'right')}
                      aria-label="Next card"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Dot indicators */}
                  <div className="physio-row-dots">
                    {row.map((_, i) => (
                      <span
                        key={i}
                        className={`physio-dot ${activeIndices[rowIndex] === i ? 'active' : ''}`}
                        onClick={() => scrollToCard(rowIndex, i)}
                        style={{ cursor: 'pointer' }}
                      ></span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Canada protocols banner */}
      <section className="section section-navy" style={{ padding: '70px 0', borderTop: '5px solid var(--accent-orange)' }}>
        <div className="container">
          <div className="grid-2" style={{ alignItems: 'center' }}>
            <Reveal direction="left">
              <div>
                <h2 style={{ fontSize: '2.4rem', marginBottom: '20px' }}>Canadian Spinal & Neurological Rehab Protocols</h2>
                <p style={{ color: 'rgba(250,250,248,0.75)', fontSize: '1.1rem' }}>
                  Our adult physiotherapy procedures are designed around advanced rehabilitation guidelines used in leading clinical facilities in Canada.
                </p>
                <p style={{ color: 'rgba(250,250,248,0.75)', fontSize: '1.1rem', marginBottom: '30px' }}>
                  We implement joint mobilization, mechanical traction therapies, motor control training, and customized ergonomic assessments to ensure quick recovery and long-lasting relief from chronic pain.
                </p>
                <a href="/contact" className="btn btn-accent">
                  Schedule A Consultation
                </a>
              </div>
            </Reveal>
            <Reveal direction="right">
              <div style={{
                backgroundColor: 'rgba(250,250,248,0.05)',
                padding: '40px',
                borderRadius: '8px',
                border: '2px solid rgba(250,250,248,0.1)'
              }}>
                <h3 style={{ color: '#ffffff', marginBottom: '20px' }}>Our Recovery Process</h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <i className="fas fa-search-plus" style={{ color: 'var(--accent-orange)', fontSize: '1.25rem', marginTop: '3px' }}></i>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '3px' }}>1. Diagnostic Assessment</h4>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                        We examine range of motion, muscle strength, and pain triggers to locate the root cause.
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '15px', marginBottom: '15px' }}>
                    <i className="fas fa-sliders" style={{ color: 'var(--accent-orange)', fontSize: '1.25rem', marginTop: '3px' }}></i>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '3px' }}>2. Customized Intensity</h4>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                        Therapy intensity and exercises are adjusted specifically to your age and healing capacity.
                      </p>
                    </div>
                  </li>
                  <li style={{ display: 'flex', gap: '15px' }}>
                    <i className="fas fa-heart-pulse" style={{ color: 'var(--accent-orange)', fontSize: '1.25rem', marginTop: '3px' }}></i>
                    <div>
                      <h4 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '3px' }}>3. Independent Maintenance</h4>
                      <p style={{ fontSize: '0.9rem', color: 'rgba(250,250,248,0.7)', marginBottom: 0 }}>
                        We supply easy-to-follow home exercises and workspace adjustments to avoid recurrence.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
