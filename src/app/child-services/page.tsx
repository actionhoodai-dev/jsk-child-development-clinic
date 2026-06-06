'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Reveal from '@/components/Reveal';

interface ChildService {
  id: string;
  title: string;
  image: string;
  badge: string;
  description: string;
  subtitle: string;
  timings: string;
  benefits: string[];
  features: string[];
}

const SERVICES_DATA: ChildService[] = [
  {
    id: 'special-ed',
    title: 'Special Education',
    image: '/assets/special_education.png',
    badge: 'Early Intervention',
    description:
      'Custom academic and developmental programs for children with learning differences, helping them build literacy, numeracy, and cognitive skills.',
    subtitle: 'Tailored Learning Strategies for Cognitive Success',
    timings: 'Mon - Sat: 9:00 AM - 5:00 PM',
    benefits: [
      'Improves attention span and sitting tolerance',
      'Strengthens reading, writing, and arithmetic skills',
      'Enhances problem-solving capabilities',
      'Prepares children for integration into mainstream schooling',
    ],
    features: [
      'Individualized Education Program (IEP) for each child',
      'One-on-one specialist educator attention',
      'Multisensory teaching methods (visual, auditory, tactile)',
      'Regular progress checks and parent feedback sessions',
    ],
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    image: '/assets/occupational_therapy.png',
    badge: 'Sensory Integration',
    description:
      'Focuses on sensory integration, fine motor skills, hand-eye coordination, and self-care routines to promote independence.',
    subtitle: 'Enabling Functional Independence in Daily Life',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    benefits: [
      'Improves sensory processing and regulation',
      'Enhances pencil grip, cutting, and fine motor skills',
      'Promotes independence in dressing, eating, and hygiene',
      'Builds bilateral coordination and overall balance',
    ],
    features: [
      'Fully equipped sensory integration gym setup',
      'Vestibular and proprioceptive therapy tools',
      'Customized home programs for daily maintenance',
      'Therapist-supervised hand rehabilitation activities',
    ],
  },
  {
    id: 'child-psychology',
    title: 'Child Psychology & Counseling',
    image: '/assets/child_psychology.png',
    badge: 'Emotional Care',
    description:
      'Pediatric counseling and psychological evaluations to support emotional regulation, social skills, and family dynamics.',
    subtitle: 'Fostering Emotional Stability and Social Skills',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    benefits: [
      'Reduces anxiety, tantrums, and school-related stress',
      'Enhances emotional expression and regulation',
      'Improves peer-to-peer social interactions',
      'Equips parents with constructive behavior plans',
    ],
    features: [
      'Play therapy and Cognitive Behavioral Therapy (CBT) modules',
      'Detailed child developmental and behavioral assessments',
      'Social skills workshops and group peer interactions',
      'Compassionate parent-coaching sessions',
    ],
  },
  {
    id: 'behaviour-therapy',
    title: 'Behaviour Therapy',
    image: '/assets/behaviour_therapy.png',
    badge: 'ABA Protocols',
    description:
      'Evidence-based behavioral modification plans to reduce challenging behaviors and encourage positive social interactions.',
    subtitle: 'Structuring Positive Behavioral Patterns',
    timings: 'Mon - Sat: 9:00 AM - 7:00 PM',
    benefits: [
      'Reduces self-stimulatory or aggressive behaviors',
      'Increases task compliance and rule compliance',
      'Promotes self-regulation and emotional control',
      'Accelerates learning of new tasks',
    ],
    features: [
      'Applied Behavior Analysis (ABA) based learning protocols',
      'Functional Behavior Assessment (FBA) at check-in',
      'Consistent positive reinforcement frameworks',
      'Strict tracking of target behavior reduction charts',
    ],
  },
  {
    id: 'speech-therapy',
    title: 'Speech & Language Therapy',
    image: '/assets/speech_therapy.png',
    badge: 'Communication',
    description:
      'Specialized articulation, language delay, and fluency therapies designed to build strong communication confidence.',
    subtitle: 'Empowering Communicative Confidence',
    timings: 'Mon - Sat: 9:00 AM - 6:00 PM',
    benefits: [
      'Improves word articulation and speech clarity',
      'Overcomes language delay and speech milestones gap',
      'Reduces stuttering / stammering patterns',
      'Enables non-verbal children to express needs',
    ],
    features: [
      'Oral placement therapy (OPT) exercises',
      'Vocabulary-building games and language stimulations',
      'AAC (Augmentative and Alternative Communication) setups',
      'Bilingual speech building (English & Tamil)',
    ],
  },
  {
    id: 'pediatric-physio',
    title: 'Pediatric Physiotherapy',
    image: '/assets/pediatric_physiotherapy.png',
    badge: 'Motor Milestones',
    description:
      'Motor milestone coaching and pediatric physical therapy helping infants and children build muscle tone, balance, and gait.',
    subtitle: 'Optimizing Mobility and Physical Development',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    benefits: [
      'Achieves delayed milestones (sitting, crawling, walking)',
      'Improves muscle strength and range of motion',
      'Enhances balance, gait, and coordination',
      'Manages high/low muscle tone related to neurological issues',
    ],
    features: [
      'Cerebral Palsy and global delay specialty care',
      'Customized pediatric gait training exercises',
      'Postural alignment and bracing coordination',
      'Fun physical challenges in a kid-safe gym',
    ],
  },
];

export default function ChildServices() {
  const [selectedService, setSelectedService] = useState<ChildService | null>(null);

  const openServiceDetails = (service: ChildService) => {
    setSelectedService(service);
  };

  const closeDetails = () => {
    setSelectedService(null);
  };

  return (
    <div>
      {/* Title */}
      <section className="section section-teal text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal direction="fade">
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>Child Development Wing</h1>
            <p style={{ color: 'rgba(250, 250, 248, 0.85)', margin: 0, fontSize: '1.25rem' }}>
              Specialized, Integrated Therapies for Pediatric Rehabilitation
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <Reveal direction="up">
              <h2>Our Reconstructive Pediatric Programs</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                We believe in early intervention. Our center offers 6 specialized therapies with child-friendly environments, modern sensory gyms, and dedicated therapists.
              </p>
            </Reveal>
          </div>

          <div className="grid-3">
            {SERVICES_DATA.map((service, index) => (
              <Reveal key={service.id} direction="up" delay={index * 100}>
                <div className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                  <div className="card-img-wrapper">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="card-img"
                      priority={index < 3}
                    />
                  </div>
                  <div className="card-content" style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span className="modal-badge" style={{ marginBottom: '10px' }}>{service.badge}</span>
                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-desc" style={{ fontSize: '0.9rem' }}>{service.description}</p>
                    </div>
                    <button
                      onClick={() => openServiceDetails(service)}
                      className="btn btn-outline-teal"
                      style={{ width: '100%', marginTop: '15px' }}
                    >
                      View Therapy Plan
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Canada training connection widget */}
      <section className="section section-navy" style={{ padding: '60px 0' }}>
        <div className="container text-center">
          <Reveal direction="up">
            <h2 style={{ color: '#ffffff', marginBottom: '20px' }}>International Pediatric Rehabilitation Standards</h2>
            <p style={{ maxWidth: '800px', margin: '0 auto 30px', color: 'rgba(250,250,248,0.8)', fontSize: '1.1rem' }}>
              Every pediatric program at JSK follows clinical guidelines modeled on leading Canadian child rehab centers. We integrate speech therapy, sensory integration, and behavioral therapy to give children a unified, comprehensive care program.
            </p>
            <a href="/contact" className="btn btn-accent">
              Schedule A Clinical Intake
            </a>
          </Reveal>
        </div>
      </section>

      {/* Interactive Detail Overlay Modal */}
      <div className={`detail-overlay ${selectedService ? 'active' : ''}`} onClick={closeDetails}>
        <div className="detail-modal" onClick={(e) => e.stopPropagation()}>
          <button className="modal-close-btn" onClick={closeDetails} aria-label="Close details">
            <i className="fas fa-times"></i>
          </button>
          
          {selectedService && (
            <>
              <div className="modal-header-img">
                <Image
                  src={selectedService.image}
                  alt={selectedService.title}
                  fill
                  className="card-img"
                  style={{ objectFit: 'cover', objectPosition: 'top' }}
                />
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'rgba(10, 22, 40, 0.4)',
                }}></div>
              </div>
              <div className="modal-body">
                <span className="modal-badge">{selectedService.badge}</span>
                <h2>{selectedService.title}</h2>
                <div className="modal-subtitle">{selectedService.subtitle}</div>
                
                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                  {selectedService.description}
                </p>

                <div style={{
                  backgroundColor: 'var(--light-gray)',
                  padding: '15px',
                  borderRadius: '4px',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: '600',
                  color: 'var(--contrast-navy)'
                }}>
                  <i className="fas fa-clock" style={{ color: 'var(--primary-teal)' }}></i>
                  <span>Available Timings: {selectedService.timings}</span>
                </div>

                <h4 className="modal-section-title">Key Therapy Benefits</h4>
                <ul className="modal-list">
                  {selectedService.benefits.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>

                <h4 className="modal-section-title">Program Specifications</h4>
                <ul className="modal-list">
                  {selectedService.features.map((f, i) => (
                    <li key={i}>{f}</li>
                  ))}
                </ul>

                <div style={{ marginTop: '30px', display: 'flex', gap: '15px' }}>
                  <a
                    href={`https://wa.me/919363437008?text=Hello%20JSK%2C%20I%20want%20to%20book%20a%20session%20for%20${encodeURIComponent(selectedService.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ flex: 1 }}
                  >
                    <i className="fab fa-whatsapp" style={{ marginRight: '8px' }}></i> Book on WhatsApp
                  </a>
                  <button onClick={closeDetails} className="btn btn-outline-white" style={{ borderColor: 'var(--border-gray)', color: 'var(--contrast-navy)' }}>
                    Close
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
