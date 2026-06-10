import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';

interface DetailedChildService {
  id: string;
  titleEn: string;
  titleTa: string;
  badge: string;
  image: string;
  subtitleEn: string;
  subtitleTa: string;
  timings: string;
  introText: string;
  challenges: {
    title: string;
    description: string;
  }[];
  methodology: {
    step: string;
    title: string;
    description: string;
  }[];
  benefits: string[];
  features: string[];
  metaTitle: string;
  metaDesc: string;
}

const SERVICE_DETAILS: Record<string, DetailedChildService> = {
  'special-ed': {
    id: 'special-ed',
    titleEn: 'Special Education & Early Intervention',
    titleTa: 'சிறப்பு கல்வி மற்றும் ஆரம்பக்கால தலையீடு',
    badge: 'Cognitive Milestones',
    image: '/assets/special_education.png',
    subtitleEn: 'Systematic Cognitive Training & Academic Readiness',
    subtitleTa: 'முறையான அறிவாற்றல் பயிற்சி மற்றும் பள்ளி ஆயத்தநிலை',
    timings: 'Mon - Sat: 9:00 AM - 5:00 PM',
    introText:
      'Special Education at JSK is an evidence-based intervention designed for children who learn differently. We bridge the gap between a child\'s current cognitive age and their chronological age, preparing them for mainstream academic environments through specialized multisensory learning techniques.',
    challenges: [
      {
        title: 'Attention Deficits & Poor Sitting Tolerance',
        description: 'Many children struggle to remain seated or focus on a single cognitive task for more than a few minutes, leading to school avoidance or learning gaps.',
      },
      {
        title: 'Learning Differences (Dyslexia, Dysgraphia, Dyscalculia)',
        description: 'Difficulties in identifying letters, phonics, writing letters in the correct orientation, or comprehending basic mathematical values.',
      },
      {
        title: 'Global Developmental Delay (GDD)',
        description: 'Slower rates of intellectual, memory, and spatial reasoning progression compared to age-appropriate peers.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Individualized Education Program (IEP)',
        description: 'We conduct a thorough academic baseline assessment to map out specific weekly and monthly cognitive targets customized to the child\'s learning speed.',
      },
      {
        step: '02',
        title: 'Multisensory Teaching Aids',
        description: 'Using tactile letter boards, auditory phonics games, and highly visual conceptual sheets to make abstract academic concepts concrete.',
      },
      {
        step: '03',
        title: 'Sitting Tolerance Training',
        description: 'Gradually increasing the duration of seated learning sessions using structured active-breaks and reward systems to build classroom discipline.',
      },
      {
        step: '04',
        title: 'Structured Home Assignments',
        description: 'Supplying parents with clear, simplified daily worksheets to reinforce the concepts taught in the clinic, accelerating learning curves.',
      },
    ],
    benefits: [
      'Significant improvement in attention span and concentration',
      'Enhanced letter recognition, reading speed, and writing precision',
      'Stronger basic arithmetic and logical thinking abilities',
      'Smooth transition into mainstream school classrooms',
    ],
    features: [
      'One-on-one sessions with licensed special educators',
      'Monthly IEP milestone progress reviews with parents',
      'Dynamic curriculum adjustments based on learning rate',
      'Structured behavioral coordination during study tasks',
    ],
    metaTitle: 'Special Education & Early Intervention | JSK Karaikudi',
    metaDesc: 'Specialized learning support for children with ADHD, learning differences, and GDD in Karaikudi. Learn about JSK\'s individualized IEP methods.',
  },
  'occupational-therapy': {
    id: 'occupational-therapy',
    titleEn: 'Occupational Therapy & Sensory Integration',
    titleTa: 'செயல்பாட்டு சிகிச்சை மற்றும் உணர்ச்சி ஒருங்கிணைப்பு',
    badge: 'Functional Independence',
    image: '/assets/occupational_therapy.png',
    subtitleEn: 'Sensory Processing, Fine Motor Skills, and ADL Rehabilitation',
    subtitleTa: 'உணர்ச்சி செயலாக்கம், நுண் இயக்கத் திறன்கள் மற்றும் அன்றாட செயல்பாட்டு மறுவாழ்வு',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    introText:
      'Occupational Therapy (OT) at JSK Center focuses on enabling children to perform daily tasks with independence. By combining systematic fine motor training with sensory integration therapies in our custom gym, we resolve sensory sensitivities, physical coordination gaps, and self-care limitations.',
    challenges: [
      {
        title: 'Sensory Processing Issues (SPD)',
        description: 'Hypersensitivity (extreme reactions to loud noises, clothing textures, crowds) or hyposensitivity (constant spinning, jumping, or touching objects).',
      },
      {
        title: 'Fine Motor Coordination Gaps',
        description: 'Weak finger strength, leading to poor pencil grip, difficulty using scissors, feeding, buttoning clothes, or tying shoelaces.',
      },
      {
        title: 'Bilateral & Gross Motor Coordination Deficits',
        description: 'Difficulty coordinating both sides of the body, leading to frequent tripping, poor balance, posture issues, or struggle with catching a ball.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Sensory Profile Mapping',
        description: 'We evaluate the child\'s responses to vestibular, proprioceptive, tactile, visual, and auditory inputs to pinpoint specific sensory integration triggers.',
      },
      {
        step: '02',
        title: 'Sensory Integration Gym Gymnast',
        description: 'Utilizing custom suspended swings, climbing nets, balance beams, and tactile paths to help the child\'s nervous system organize and process sensory inputs.',
      },
      {
        step: '03',
        title: 'Fine Motor & Hand Rehab',
        description: 'Engaging in targeted exercises with therapeutic clay, pinboards, peg exercises, and cutting tasks to build hand strength and grip precision.',
      },
      {
        step: '04',
        title: 'Self-Care Task Breakdown',
        description: 'Applying task analysis to break daily living activities (feeding, dressing, hygiene) into simple, easily learnable physical movements.',
      },
    ],
    benefits: [
      'Lower sensory anxiety and improved emotional self-regulation',
      'Vastly improved handwriting grasp and pencil control',
      'Greater independence in daily dressing, eating, and hygiene routines',
      'Better physical balance, motor planning, and body awareness',
    ],
    features: [
      'Fully equipped sensory integration therapy gym',
      'Vestibular and proprioceptive training platforms',
      'Customized home sensory diets designed for daily use',
      'Direct progress charting for school-readiness motor tasks',
    ],
    metaTitle: 'Occupational Therapy & Sensory Gym | JSK Karaikudi',
    metaDesc: 'Professional pediatric Occupational Therapy in Karaikudi. Treat sensory processing issues, motor delays, and handwriting gaps in our modern sensory gym.',
  },
  'child-psychology': {
    id: 'child-psychology',
    titleEn: 'Child Psychology & Counseling',
    titleTa: 'குழந்தை உளவியல் மற்றும் ஆலோசனை',
    badge: 'Emotional Well-being',
    image: '/assets/child_psychology.png',
    subtitleEn: 'Pediatric Behavioral Evaluations, Emotional Regulation, and Counseling',
    subtitleTa: 'குழந்தை நடத்தை மதிப்பீடுகள், உணர்ச்சி ஒழுங்குமுறை மற்றும் ஆலோசனை',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    introText:
      'Our Child Psychology & Counseling wing supports children\'s mental health, emotional resilience, and social integration. Through play-based therapy and pediatric Cognitive Behavioral Therapy (CBT), we help children process fears, manage anxiety, and learn constructive emotional expression.',
    challenges: [
      {
        title: 'Separation & Social Anxiety',
        description: 'Severe distress when separating from parents, intense shyness, selective mutism, or fear of school environments.',
      },
      {
        title: 'Emotional Regulation Gaps',
        description: 'Extreme tantrums, mood swings, difficulty expressing anger or sadness constructively, or withdrawal from family interactions.',
      },
      {
        title: 'Peer Socialization Barriers',
        description: 'Struggle to interpret social cues, share toys, take turns, communicate during play, or make friends at school.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Diagnostic Play Assessment',
        description: 'Using structured play therapies to understand the child\'s internal conflicts, emotional triggers, and expressing thoughts they cannot verbalize.',
      },
      {
        step: '02',
        title: 'Child CBT & Reframing',
        description: 'Coaching older children to identify anxious or negative thought loops and replace them with confident, constructive actions.',
      },
      {
        step: '03',
        title: 'Social Skills Coaching Groups',
        description: 'Organizing micro-peer groups where children practice sharing, reading facial expressions, and conversational turn-taking in a safe space.',
      },
      {
        step: '04',
        title: 'Parent-Child Alignment Sessions',
        description: 'Equipping parents with stress-management strategies and communication protocols to foster a calm, supportive home environment.',
      },
    ],
    benefits: [
      'Reduced school phobia, anxiety patterns, and separation distress',
      'More constructive emotional expression and self-soothing strategies',
      'Enhanced confidence in initiating and maintaining peer friendships',
      'Stronger family bonding and clear, non-adversarial parent communication',
    ],
    features: [
      'Dedicated play therapy and child counseling rooms',
      'Detailed pediatric developmental & behavioral evaluations',
      'Cognitive Behavioral Therapy (CBT) adaptions for children',
      'Mandatory parent-guidance and progress review sessions',
    ],
    metaTitle: 'Child Psychology & Counseling | JSK Karaikudi',
    metaDesc: 'Pediatric counseling and child psychology services in Karaikudi. Resolve social anxiety, tantrums, and school fear using play-based counseling.',
  },
  'behaviour-therapy': {
    id: 'behaviour-therapy',
    titleEn: 'Behaviour Therapy',
    titleTa: 'நடத்தை சிகிச்சை',
    badge: 'ABA Protocols',
    image: '/assets/behaviour_therapy.png',
    subtitleEn: 'Behavior Modification and Structured Reinforcement Systems',
    subtitleTa: 'நடத்தை மாற்றம் மற்றும் முறையான வலுவூட்டல் அமைப்புகள்',
    timings: 'Mon - Sat: 9:00 AM - 7:00 PM',
    introText:
      'Behaviour Therapy at JSK Center uses scientifically validated principles to reduce challenging behaviors and build positive daily habits. Implementing structured Applied Behavior Analysis (ABA) protocols, we help children develop compliance, focus, self-regulation, and positive social communication.',
    challenges: [
      {
        title: 'Challenging Tantrums & Meltdowns',
        description: 'Frequent screaming, hitting, biting, or head-banging when faced with transitions, requests, or routine adjustments.',
      },
      {
        title: 'Repetitive or Self-Stimulatory Behaviors',
        description: 'Persistent hand-flapping, rocking, or auditory stimming that limits the child\'s focus on learning and social tasks.',
      },
      {
        title: 'Refusal & Task Non-Compliance',
        description: 'Active avoidance or refusal to follow simple instructions, safety commands, hygiene guidelines, or academic tasks.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Functional Behavior Assessment (FBA)',
        description: 'We perform a detailed FBA to determine the exact triggers (Antecedents) and rewards (Consequences) driving the behavior.',
      },
      {
        step: '02',
        title: 'Structured ABA Protocols',
        description: 'Designing a custom behavior plan based on Applied Behavior Analysis to teach alternate, constructive ways for the child to express their needs.',
      },
      {
        step: '03',
        title: 'Positive Reinforcement Loops',
        description: 'Rewarding compliant, positive behaviors immediately with token systems and sensory rewards, while ignoring or redirecting negative behaviors.',
      },
      {
        step: '04',
        title: 'Visual Schedules & Transitions',
        description: 'Providing visual boards and countdown timers to help the child foresee changes in their day, reducing anxiety and associated meltdowns.',
      },
    ],
    benefits: [
      'Significant reduction in aggressive behaviors and tantrums',
      'Increased compliance with parental and academic instructions',
      'Improved self-regulation and ability to cope with routine changes',
      'Better focus during learning and home activities',
    ],
    features: [
      'One-on-one therapy sessions following international ABA frameworks',
      'Functional behavior logs to track frequency and duration',
      'Interactive visual sequence boards custom-built for each child',
      'Comprehensive parent coaching to ensure behavioral consistency at home',
    ],
    metaTitle: 'Behaviour Therapy & ABA Protocols | JSK Karaikudi',
    metaDesc: 'Evidence-based Behaviour Therapy for children in Karaikudi. Reduce tantrums and self-stimulatory actions using structured ABA and reinforcement.',
  },
  'speech-therapy': {
    id: 'speech-therapy',
    titleEn: 'Speech & Language Therapy',
    titleTa: 'பேச்சு மற்றும் மொழி சிகிச்சை',
    badge: 'Speech & Communication',
    image: '/assets/speech_therapy.png',
    subtitleEn: 'Bilingual Speech Correction, Articulation, and Language Milestones',
    subtitleTa: 'இருமொழி பேச்சு திருத்தம், உச்சரிப்பு மற்றும் மொழி மைல்கற்கள்',
    timings: 'Mon - Sat: 9:00 AM - 6:00 PM',
    introText:
      'Our Speech & Language Therapy program is designed to resolve delays in speech development, articulation errors, and fluency issues. We build communication confidence in children using specialized oral motor exercises, vocabulary stimulations, and bilingual language training.',
    challenges: [
      {
        title: 'Expressive & Receptive Language Delay',
        description: 'Toddlers or children who are not yet talking, have limited vocabulary, or struggle to understand and follow spoken commands.',
      },
      {
        title: 'Articulation & Pronunciation Errors',
        description: 'Unclear speech caused by difficulty pronouncing specific letter sounds (like "r", "s", "t"), making it hard for outsiders to comprehend.',
      },
      {
        title: 'Speech Fluency Issues (Stuttering/Stammering)',
        description: 'Disruptions in the rhythm of speech, such as repeating sounds or getting stuck on words, leading to social withdrawal.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Comprehensive Communication Assessment',
        description: 'We evaluate oral structures, sound articulation, receptive vocabulary, and expressive grammar to customize the speech targets.',
      },
      {
        step: '02',
        title: 'Oral Placement Therapy (OPT)',
        description: 'Utilizing specialized straws, bubbles, and jaw-muscle exercises to build jaw, tongue, and lip coordination required for clear speech.',
      },
      {
        step: '03',
        title: 'Interactive Vocabulary Stimulation',
        description: 'Using structured play, flashcards, storytelling, and language games to build sentence formation and vocabulary organically.',
      },
      {
        step: '04',
        title: 'Bilingual Training (English & Tamil)',
        description: 'Coaching children in their primary home language to ensure immediate, practical communication improvements with family members.',
      },
    ],
    benefits: [
      'Clearer articulation of sounds and overall speech intelligibility',
      'Faster language development, closing the age milestone gap',
      'Increased confidence during conversations and public speaking',
      'Functional communication tools for non-verbal children (AAC/PECS)',
    ],
    features: [
      'Acoustically isolated, distraction-free speech rooms',
      'Oral Placement Therapy (OPT) certified techniques',
      'AAC (Augmentative & Alternative Communication) implementation',
      'Bilingual speech exercises customized in English and Tamil',
    ],
    metaTitle: 'Speech & Language Therapy | JSK Karaikudi',
    metaDesc: 'Bilingual pediatric Speech Therapy in Karaikudi. Articulation correction, stammering treatments, and language delay solutions in Tamil and English.',
  },
  'pediatric-physio': {
    id: 'pediatric-physio',
    titleEn: 'Pediatric Physiotherapy & Motor Milestones',
    titleTa: 'குழந்தைகளுக்கான உடற்பயிற்சி சிகிச்சை',
    badge: 'Gross Motor Milestones',
    image: '/assets/pediatric_physiotherapy.png',
    subtitleEn: 'Motor Milestones, Postural Alignment, and Neuromuscular Rehabilitation',
    subtitleTa: 'இயக்க மைல்கற்கள், தோரணை சீரமைப்பு மற்றும் நரம்புத்தசை மறுவாழ்வு',
    timings: 'Mon - Sat: 10:00 AM - 6:00 PM',
    introText:
      'Pediatric Physiotherapy at JSK Clinic focuses on restoring physical mobility, building core muscle strength, and correcting gait and balance. We treat children with global developmental delays, cerebral palsy, and congenital orthopedic conditions using advanced movement rehabilitation protocols.',
    challenges: [
      {
        title: 'Gross Motor Milestone Delays',
        description: 'Infants or toddlers who are late to lift their heads, roll over, sit independently, crawl, stand, or walk.',
      },
      {
        title: 'Neuromuscular Conditions (Cerebral Palsy, Spasticity)',
        description: 'Muscle stiffness, tight joints, abnormal reflexes, and balance issues that interfere with walking or maintaining posture.',
      },
      {
        title: 'Weak Muscle Tone (Floppy Infant Syndrome)',
        description: 'Low muscle tone leading to floppy joints, weak back muscles, poor head control, and rapid physical fatigue.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Neurodevelopmental Assessment',
        description: 'Analyzing range of motion, muscle reflexes, gait patterns, and milestone delays to build a physical rehabilitation blueprint.',
      },
      {
        step: '02',
        title: 'Milestone Facilitation Exercises',
        description: 'Systematic physical therapy to stimulate developmental reflexes and build trunk and core control for sitting and standing.',
      },
      {
        step: '03',
        title: 'Canadian Spasticity Protocols',
        description: 'Implementing evidence-based stretching, joint mobilization, and weight-bearing exercises to manage muscle stiffness and improve flexibility.',
      },
      {
        step: '04',
        title: 'Gait & Coordination Training',
        description: 'Utilizing walking aids, balance beams, stepping paths, and posture boards in a safe, child-friendly gym setup.',
      },
    ],
    benefits: [
      'Successful attainment of delayed motor milestones (sitting, walking)',
      'Reduced muscle stiffness (spasticity) and increased flexibility',
      'Enhanced balance, physical stamina, and walking pattern safety',
      'Prevention of joint contractures and developmental deformities',
    ],
    features: [
      'Specialized pediatric gait and balance equipment',
      'Protocols customized for Cerebral Palsy and developmental delays',
      'Safety-optimized pediatric physical therapy gym',
      'Bracing, splints, and orthotic coordination support',
    ],
    metaTitle: 'Pediatric Physiotherapy & Motor Milestones | JSK Karaikudi',
    metaDesc: 'Specialized pediatric physiotherapy in Karaikudi. Resolve motor delays, Cerebral Palsy, and floppy infant muscle weakness in our safe child gym.',
  },
};

// Generate static routes for all 6 child services at build time
export async function generateStaticParams() {
  return Object.keys(SERVICE_DETAILS).map((id) => ({ id }));
}

// Generate dynamic SEO metadata
export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const service = SERVICE_DETAILS[params.id];
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: service.metaTitle,
    description: service.metaDesc,
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ServiceDetailsPage(props: PageProps) {
  const params = await props.params;
  const service = SERVICE_DETAILS[params.id];

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Back Header Banner */}
      <section className="section section-teal" style={{ padding: '35px 0', borderBottom: '4px solid var(--accent-orange)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link
              href="/child-services"
              style={{
                color: 'var(--accent-orange)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontWeight: '700',
                textDecoration: 'none',
                textTransform: 'uppercase',
                fontSize: '0.9rem',
                letterSpacing: '1px',
                width: 'fit-content',
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              Back to Child Services
            </Link>

            <Reveal direction="fade">
              <span
                style={{
                  backgroundColor: 'var(--accent-orange)',
                  color: 'var(--contrast-navy)',
                  fontWeight: '700',
                  fontSize: '0.8rem',
                  textTransform: 'uppercase',
                  padding: '4px 12px',
                  borderRadius: '4px',
                  width: 'fit-content',
                  letterSpacing: '0.5px',
                }}
              >
                {service.badge}
              </span>
              <h1 style={{ color: '#ffffff', margin: '10px 0 5px 0', fontSize: '2.5rem' }}>{service.titleEn}</h1>
              <div style={{ color: 'rgba(250,250,248,0.9)', fontSize: '1.4rem', fontWeight: '500' }}>{service.titleTa}</div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main Core Content Grid */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-3" style={{ gap: '40px', alignItems: 'start' }}>
            {/* Left Content Column (Spans 2 columns) */}
            <div style={{ gridColumn: 'span 2' }}>
              {/* Image Section */}
              <Reveal direction="up">
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '380px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    marginBottom: '35px',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.titleEn}
                    fill
                    sizes="60vw"
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'top' }}
                  />
                </div>
              </Reveal>

              {/* Overview */}
              <Reveal direction="up" delay={100}>
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--contrast-navy)', marginBottom: '15px' }}>Clinical Overview</h2>
                  <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: '1.7', marginBottom: 0 }}>
                    {service.introText}
                  </p>
                </div>
              </Reveal>

              {/* Challenges we resolve */}
              <Reveal direction="up" delay={150}>
                <div style={{ marginBottom: '40px' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--contrast-navy)', marginBottom: '20px' }}>Challenges We Resolve</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {service.challenges.map((challenge, idx) => (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: 'var(--light-gray)',
                          padding: '20px',
                          borderRadius: '6px',
                          borderLeft: '4px solid var(--accent-orange)',
                        }}
                      >
                        <h4 style={{ color: 'var(--contrast-navy)', fontSize: '1.1rem', marginBottom: '8px', fontWeight: '700' }}>
                          {challenge.title}
                        </h4>
                        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                          {challenge.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* JSK Treatment Methodology */}
              <Reveal direction="up" delay={200}>
                <div style={{ marginBottom: '20px' }}>
                  <h2 style={{ fontSize: '1.8rem', color: 'var(--contrast-navy)', marginBottom: '25px' }}>JSK's Treatment Methodology</h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {service.methodology.map((step, idx) => (
                      <div key={idx} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                        <span
                          style={{
                            fontSize: '1.5rem',
                            fontWeight: '800',
                            color: 'var(--primary-teal)',
                            backgroundColor: 'rgba(13, 115, 119, 0.1)',
                            width: '45px',
                            height: '45px',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {step.step}
                        </span>
                        <div>
                          <h4 style={{ color: 'var(--contrast-navy)', fontSize: '1.15rem', marginBottom: '6px', fontWeight: '700' }}>
                            {step.title}
                          </h4>
                          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.5', margin: 0 }}>
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Right Information Column (Spans 1 column) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {/* Core Information Card */}
              <Reveal direction="right">
                <div
                  style={{
                    backgroundColor: 'var(--contrast-navy)',
                    color: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    borderTop: '5px solid var(--accent-orange)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <h3 style={{ color: '#ffffff', marginBottom: '20px', fontSize: '1.35rem', fontWeight: '700' }}>Program Schedule</h3>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                    <i className="fas fa-clock" style={{ color: 'var(--accent-orange)', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Timings</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>{service.timings}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '30px' }}>
                    <i className="fas fa-file-medical" style={{ color: 'var(--accent-orange)', fontSize: '1.25rem' }}></i>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Admission Process</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Client Intake Assessment Required</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <a
                      href={`https://wa.me/919363437008?text=Hello%20JSK%2C%20I%20want%20to%20book%20a%20clinical%20intake%20session%20for%20${encodeURIComponent(service.titleEn)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-accent"
                      style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                    >
                      <i className="fab fa-whatsapp" style={{ fontSize: '1.2rem' }}></i>
                      Book via WhatsApp
                    </a>
                    <Link
                      href="/contact"
                      className="btn btn-outline-white"
                      style={{ width: '100%', textAlign: 'center', display: 'block' }}
                    >
                      Contact Our Clinic
                    </Link>
                  </div>
                </div>
              </Reveal>

              {/* Key Benefits Card */}
              <Reveal direction="right" delay={150}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-gray)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <h3 style={{ color: 'var(--contrast-navy)', marginBottom: '20px', fontSize: '1.35rem', fontWeight: '700' }}>Key Benefits</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <i className="fas fa-check-circle" style={{ color: 'var(--primary-teal)', marginTop: '3px' }}></i>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>

              {/* Program Specifications Card */}
              <Reveal direction="right" delay={250}>
                <div
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '30px',
                    borderRadius: '8px',
                    border: '1px solid var(--border-gray)',
                    boxShadow: 'var(--shadow-md)',
                  }}
                >
                  <h3 style={{ color: 'var(--contrast-navy)', marginBottom: '20px', fontSize: '1.35rem', fontWeight: '700' }}>Program Highlights</h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {service.features.map((feature, idx) => (
                      <li key={idx} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                        <i className="fas fa-star" style={{ color: 'var(--accent-orange)', marginTop: '3px' }}></i>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
