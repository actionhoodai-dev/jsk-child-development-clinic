import React from 'react';
import Reveal from '@/components/Reveal';

export const metadata = {
  title: 'Conditions We Treat',
  description:
    'JSK Child Development wing in Karaikudi provides expert assessments and therapy programs for Autism, ADHD, Cerebral Palsy, GDD, Speech Delay, and Sensory Issues.',
};

interface ConditionItem {
  id: string;
  titleEn: string;
  titleTa: string;
  symptoms: string[];
  assessments: string[];
  goals: string[];
}

const CONDITIONS_LIST: ConditionItem[] = [
  {
    id: 'asd',
    titleEn: 'Autism Spectrum Disorder (ASD)',
    titleTa: 'ஆட்டிசம் ஸ்பெக்ட்ரம் கோளாறு',
    symptoms: [
      'Difficulty with eye contact, social interactions, and reciprocal conversations.',
      'Repetitive behaviors, hand flapping, or spinning objects.',
      'Delayed speech milestones or difficulty expressing feelings.',
      'Sensory hyper-reactivity (getting upset by loud noises or clothing textures).',
    ],
    assessments: [
      'Social communication observation checklists.',
      'Sensory integration screening Gym audits.',
      'Functional behavior diagnostics.',
    ],
    goals: [
      'Develop functional communication skills (verbal or non-verbal).',
      'Reduce repetitive behaviors and teach self-regulation.',
      'Foster basic social play and peer interaction patterns.',
    ],
  },
  {
    id: 'adhd',
    titleEn: 'Attention Deficit Hyperactivity Disorder (ADHD)',
    titleTa: 'கவனம் குறைபாடு மற்றும் அதிவேக செயல்பாடு',
    symptoms: [
      'Inability to sit still, constant fidgeting, or running around.',
      'Easily distracted, forgetting daily tasks, or struggling to follow instructions.',
      'Impulsive decisions, interrupting conversations, or difficulty waiting for turns.',
      'Struggles with concentration in school or home settings.',
    ],
    assessments: [
      'Sitting tolerance and focal duration measurements.',
      'Executive function and task planning screenings.',
      'Sensory seeking behavior observation.',
    ],
    goals: [
      'Increase focus duration and classroom sitting tolerance.',
      'Strengthen task planning and execution skills.',
      'Manage impulsiveness through sensory regulation and cognitive training.',
    ],
  },
  {
    id: 'cp',
    titleEn: 'Cerebral Palsy (CP)',
    titleTa: 'மூளை முடக்குவாதம்',
    symptoms: [
      'Stiff muscles (spasticity) or floppy muscle tone.',
      'Delayed motor milestones (crawling, rolling, walking).',
      'Difficulty with balance, walking coordination, or hand grasps.',
      'Speech and feeding coordination challenges.',
    ],
    assessments: [
      'Gait analysis, muscle tone (spasticity) scoring.',
      'Reflex, balance, and motor milestones checks.',
      'Range of motion joint metrics.',
    ],
    goals: [
      'Improve joint mobility and muscle strength.',
      'Help the child achieve independent walking or crawling.',
      'Correct posture and optimize manual coordination.',
    ],
  },
  {
    id: 'down-syndrome',
    titleEn: 'Down Syndrome',
    titleTa: 'டவுன் சிண்ட்ரோம்',
    symptoms: [
      'Delayed developmental milestones (sitting, speech, coordination).',
      'Weak muscle tone (hypotonia) and joint laxity.',
      'Speech articulation delays and language learning challenges.',
      'Difficulties with cognitive tasks and social transitions.',
    ],
    assessments: [
      'Global development milestone mapping.',
      'Oral motor and articulation checks.',
      'Muscle tone and joint safety audits.',
    ],
    goals: [
      'Strengthen core muscles and joint stability.',
      'Foster speech clarity, word vocabulary, and communication.',
      'Maximize functional self-care independence.',
    ],
  },
  {
    id: 'gdd',
    titleEn: 'Global Developmental Delay (GDD)',
    titleTa: 'உலகளாவிய வளர்ச்சி தாமதம்',
    symptoms: [
      'Significant delays in two or more developmental areas (speech, motor, cognition, social).',
      'Slower learning rates compared to same-age peers.',
      'Delayed self-care milestones (feeding, toilet training).',
      'Coordination and movement difficulties.',
    ],
    assessments: [
      'Multi-disciplinary motor and speech diagnostic matrices.',
      'Adaptive behavior and self-care assessment.',
      'Cognitive play screening.',
    ],
    goals: [
      'Accelerate milestones through structured physical and OT play.',
      'Build basic daily activity independence.',
      'Support cognitive and social skills for integration.',
    ],
  },
  {
    id: 'speech-delay',
    titleEn: 'Speech & Language Delay',
    titleTa: 'பேச்சு மற்றும் மொழி தாமதம்',
    symptoms: [
      'Not babbling or speaking simple words by appropriate age milestones.',
      'Difficulty understanding commands or directions.',
      'Struggles with articulating words clearly (speech clarity).',
      'Frustration due to inability to express wants and needs.',
    ],
    assessments: [
      'Speech articulation and receptive language audits.',
      'Oral motor structure and jaw stability evaluations.',
      'Acoustic vocal tracking.',
    ],
    goals: [
      'Expand receptive and expressive vocabulary.',
      'Improve jaw stability and word articulation.',
      'Build confidence in daily communication and social play.',
    ],
  },
  {
    id: 'sensory-processing',
    titleEn: 'Sensory Processing Issues',
    titleTa: 'உணர்வு செயலாக்க குறைபாடு',
    symptoms: [
      'Hypersensitivity: screaming at loud sounds, bright lights, or touch.',
      'Hyposensitivity: constant spinning, running, jumping, or crashing into things.',
      'Struggles with food textures, leading to extreme picky eating.',
      'Poor balance, coordination, or body awareness.',
    ],
    assessments: [
      'Sensory Profile-2 and sensory grid auditing.',
      'Vestibular, proprioceptive, and tactile reactivity screening.',
      'Sensory integration gym reactions observation.',
    ],
    goals: [
      'Normalize sensory reactions through sensory diet programs.',
      'Equip children with self-regulation tools when overwhelmed.',
      'Enhance balance, spatial awareness, and motor planning.',
    ],
  },
  {
    id: 'learning-disabilities',
    titleEn: 'Learning Disabilities (Dyslexia, Dysgraphia)',
    titleTa: 'கற்றல் குறைபாடுகள்',
    symptoms: [
      'Difficulty reading letters, reversing words (e.g., b/d, p/q).',
      'Extremely poor spelling and sloppy handwriting (dysgraphia).',
      'Difficulty keeping up with grade-level school work.',
      'Struggles with numerical reasoning and math concepts.',
    ],
    assessments: [
      'Visual perception and visual-motor integration testing.',
      'Phonological processing and reading speed tracking.',
      'Fine-motor writing checks.',
    ],
    goals: [
      'Strengthen reading comprehension and writing mechanics.',
      'Enhance visual-spatial reasoning and coordination.',
      'Boost academic self-confidence and learning comfort.',
    ],
  },
];

export default function Conditions() {
  return (
    <div>
      {/* Title */}
      <section className="section section-teal text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal direction="fade">
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>Conditions We Treat</h1>
            <p style={{ color: 'rgba(250, 250, 248, 0.85)', margin: 0, fontSize: '1.25rem' }}>
              Specialized Therapies for Developmental Challenges
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid List */}
      <section className="section section-white">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '50px' }}>
            <Reveal direction="up">
              <h2>Developmental & Neurological Conditions</h2>
            </Reveal>
            <Reveal direction="up" delay={150}>
              <p style={{ maxWidth: '700px', margin: '0 auto' }}>
                We provide holistic clinical therapy for children displaying early indicators of developmental delay, communication disorders, and sensory complications.
              </p>
            </Reveal>
          </div>

          <div className="grid-2">
            {CONDITIONS_LIST.map((c, index) => (
              <Reveal key={c.id} direction="up" delay={index * 50}>
                <div
                  className="card"
                  style={{
                    padding: '30px',
                    height: '100%',
                    borderTop: '4px solid var(--primary-teal)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '15px' }}>
                      <span className="lang-en">{c.titleEn}</span>
                      <span className="lang-ta" style={{ fontSize: '0.95rem', color: 'var(--primary-purple)', marginTop: '2px' }}>{c.titleTa}</span>
                    </h3>

                    {/* Symptoms */}
                    <div style={{ marginBottom: '15px' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--contrast-navy)' }}>
                        Common Indicators:
                      </span>
                      <ul style={{ paddingLeft: '20px', marginTop: '5px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                        {c.symptoms.map((s, idx) => (
                          <li key={idx} style={{ marginBottom: '4px' }}>{s}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Assessment */}
                    <div style={{ marginBottom: '15px' }}>
                      <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--contrast-navy)' }}>
                        JSK Assessment Protocol:
                      </span>
                      <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '3px', marginBottom: 0 }}>
                        {c.assessments.join(', ')}.
                      </p>
                    </div>

                    {/* Therapy Goals */}
                    <div>
                      <span style={{ fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--contrast-navy)' }}>
                        Clinical Therapy Goals:
                      </span>
                      <ul style={{ paddingLeft: '20px', marginTop: '5px', fontSize: '0.9rem', color: 'var(--primary-teal)', fontWeight: '600' }}>
                        {c.goals.map((g, idx) => (
                          <li key={idx} style={{ marginBottom: '4px' }}>{g}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
