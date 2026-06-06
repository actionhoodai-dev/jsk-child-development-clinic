import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Child Development Services | JSK Center Karaikudi',
  description:
    'Explore JSK Child Development Center\'s 6 reconstructive pediatric therapies in Karaikudi: Speech Therapy, Occupational Therapy, Special Education, Behavior Therapy, Child Psychology, and Pediatric Physiotherapy.',
};

interface ChildService {
  id: string;
  title: string;
  image: string;
  badge: string;
  description: string;
}

const SERVICES_DATA: ChildService[] = [
  {
    id: 'special-ed',
    title: 'Special Education',
    image: '/assets/special_education.png',
    badge: 'Early Intervention',
    description:
      'Custom academic and developmental programs for children with learning differences, helping them build literacy, numeracy, and cognitive skills.',
  },
  {
    id: 'occupational-therapy',
    title: 'Occupational Therapy',
    image: '/assets/occupational_therapy.png',
    badge: 'Sensory Integration',
    description:
      'Focuses on sensory integration, fine motor skills, hand-eye coordination, and self-care routines to promote independence.',
  },
  {
    id: 'child-psychology',
    title: 'Child Psychology & Counseling',
    image: '/assets/child_psychology.png',
    badge: 'Emotional Care',
    description:
      'Pediatric counseling and psychological evaluations to support emotional regulation, social skills, and family dynamics.',
  },
  {
    id: 'behaviour-therapy',
    title: 'Behaviour Therapy',
    image: '/assets/behaviour_therapy.png',
    badge: 'ABA Protocols',
    description:
      'Evidence-based behavioral modification plans to reduce challenging behaviors and encourage positive social interactions.',
  },
  {
    id: 'speech-therapy',
    title: 'Speech & Language Therapy',
    image: '/assets/speech_therapy.png',
    badge: 'Communication',
    description:
      'Specialized articulation, language delay, and fluency therapies designed to build strong communication confidence.',
  },
  {
    id: 'pediatric-physio',
    title: 'Pediatric Physiotherapy',
    image: '/assets/pediatric_physiotherapy.png',
    badge: 'Motor Milestones',
    description:
      'Motor milestone coaching and pediatric physical therapy helping infants and children build muscle tone, balance, and gait.',
  },
];

export default function ChildServices() {
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
                    <Link
                      href={`/child-services/${service.id}`}
                      className="btn btn-outline-teal"
                      style={{ width: '100%', marginTop: '15px', display: 'inline-block', textAlign: 'center' }}
                    >
                      View Therapy Plan
                    </Link>
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
            <Link href="/contact" className="btn btn-accent">
              Schedule A Clinical Intake
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
