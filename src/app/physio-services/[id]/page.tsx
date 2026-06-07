import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';

interface DetailedPhysioService {
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

const PHYSIO_DETAILS: Record<string, DetailedPhysioService> = {
  'neck-pain': {
    id: 'neck-pain',
    titleEn: 'Neck Pain & Cervical Spondylosis',
    titleTa: 'கழுத்து வலி & சர்விகல் ஸ்பான்டிலோசிஸ்',
    badge: 'Cervical Health',
    image: '/assets/neck_traction.png',
    subtitleEn: 'Advanced Traction, Postural Corrections & Manual Therapy',
    subtitleTa: 'கழுத்து தசை சிகிச்சை மற்றும் தண்டுவடம் சீரமைப்பு',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'Advanced cervical rehabilitation at JSK Wing focuses on relieving nerve root compression, recovering joint range of motion, and correcting posture. We resolve chronic neck pain, stiffness, and radiating numbness (cervical radiculopathy) using evidence-based clinical decompression and specialized manual therapies.',
    challenges: [
      {
        title: 'Radiating Pain & Numbness',
        description: 'Compression of cervical nerves causing pain, tingling, or weakness shooting down the shoulder, arm, and to the fingertips.',
      },
      {
        title: 'Trapezius Spasms & Joint Stiffness',
        description: 'Severe tightening of the upper back muscles, making basic neck rotation painful and restricting head movement.',
      },
      {
        title: 'Cervical Spondylotic Headache',
        description: 'Chronic headache originating from wear and tear of the cervical joints, aggravated by prolonged desk work.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Precision Mechanical Traction',
        description: 'Applying controlled traction forces to increase the vertical space between vertebrae, alleviating pressure on pinched nerve roots.',
      },
      {
        step: '02',
        title: 'Manual Mobilization (Maitland/Mulligan)',
        description: 'Performing gentle, hands-on joint glides to restore normal facet joint movements and relieve localized muscle guarding.',
      },
      {
        step: '03',
        title: 'Deep Neck Flexor Strengthening',
        description: 'Targeting deep stabilizer muscles (longus colli) to restore natural neck alignment and support the head without strain.',
      },
      {
        step: '04',
        title: 'Ergonomic Workspace Correction',
        description: 'Providing detailed screen height, chair lumbar support, and rest interval adjustments to eliminate postural fatigue.',
      },
    ],
    benefits: [
      'Immediate relief from radiating arm pain and finger numbness',
      'Full restoration of neck rotation, bending, and flexion ranges',
      'Correction of forward-head posture and rounding shoulders',
      'Reduced reliance on analgesics and supportive cervical collars',
    ],
    features: [
      'Individualized clinical mobility and nerve mapping check',
      'High-precision mechanical decompression instrumentation',
      'Targeted trigger point therapy and myofascial release',
      'Custom home maintenance exercise schedules',
    ],
    metaTitle: 'Neck Pain & Cervical Spondylosis Therapy | JSK Karaikudi',
    metaDesc: 'Treat neck pain, cervical spondylosis, and radiating arm numbness in Karaikudi. JSK offers advanced traction, manual joint glides, and posture care.',
  },
  'back-pain': {
    id: 'back-pain',
    titleEn: 'Back Pain & Sciatica',
    titleTa: 'முதுகு வலி & சியாட்டிகா',
    badge: 'Spinal Health',
    image: '/assets/spine_decompression.png',
    subtitleEn: 'Core Stabilization, Lumbar Decompression & Sciatic Nerve Gliding',
    subtitleTa: 'இடுப்பு தசை மற்றும் தண்டுவட தளர்வு சிகிச்சை',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'Lower back pain and sciatica treatments at JSK Center follow advanced spinal decompression and core activation protocols. We target the root cause of disc bulges, facet joint arthritis, and radiating sciatic nerve inflammation to restore functional lifting and bending capabilities.',
    challenges: [
      {
        title: 'Radiating Sciatic Nerve Pain',
        description: 'A sharp, shooting pain traveling from the lower back through the buttock and down the leg, restricting standing and walking.',
      },
      {
        title: 'Disc Protrusion & Herniation',
        description: 'Disc displacements compressing the spinal cord or exiting nerves, causing acute muscle spasms and bending limitations.',
      },
      {
        title: 'Lower Core Instability',
        description: 'Weakness in the deep abdominal wall putting excessive structural load on the lumbar vertebrae, causing recurring back strain.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Spinal Decompression Therapy',
        description: 'Using safe mechanical traction to open lumbar spaces, helping herniated disc material return inward away from nerve pathways.',
      },
      {
        step: '02',
        title: 'Sciatic Nerve Flossing',
        description: 'Specialized movement sequences to release restrictions along the sciatic nerve sheath, resolving radiating leg pain.',
      },
      {
        step: '03',
        title: 'Deep Core Activation (Transversus Abdominis)',
        description: 'Coaching deep stomach and lower back muscles to contract together, forming a natural brace for the lower spine.',
      },
      {
        step: '04',
        title: 'McKenzie Method Protocols',
        description: 'Applying directional preference exercises to centralize radiating pain, moving it from the leg back into the lower back to resolve it.',
      },
    ],
    benefits: [
      'Substantial reduction in lower back aching and radiating leg pain',
      'Restored ability to bend, sit, stand, and lift objects safely',
      'Reinforced core muscular girdle for long-term spinal protection',
      'Avoidance of chronic disc herniation relapses and surgical options',
    ],
    features: [
      'Detailed spinal mobility and neural tension testing',
      'Controlled mechanical traction decompression setup',
      'Progressive core stabilization and lifting mechanics',
      'Professional posture and ergonomic sleeping analysis',
    ],
    metaTitle: 'Back Pain & Sciatica Rehabilitation | JSK Karaikudi',
    metaDesc: 'Relieve lower back pain, disc bulges, and sciatica in Karaikudi. Advanced mechanical decompression, sciatic nerve flossing, and core training.',
  },
  'joint-stiffness': {
    id: 'joint-stiffness',
    titleEn: 'Joint Stiffness & Arthritis',
    titleTa: 'மூட்டு வலி & வாத நோய்',
    badge: 'Joint Mobility',
    image: '/assets/joint_mobilization.png',
    subtitleEn: 'Osteoarthritis Management, Joint Glides & Cartilage Protection',
    subtitleTa: 'மூட்டு வலி மற்றும் வாத நோய் அசைவு பயிற்சிகள்',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'Our arthritis and joint stiffness rehabilitation uses specialized manual mobilization techniques and muscle strengthening to manage joint degeneration. We reduce inflammation, rebuild supportive muscles, and recover knee and hip flexibility to postpone or avoid surgical joint replacements.',
    challenges: [
      {
        title: 'Chronic Knee & Hip Joint Pain',
        description: 'A constant aching and stiffness during walking, climbing stairs, or standing up from low chairs.',
      },
      {
        title: 'Restricted Range of Motion',
        description: 'Inability to fully bend or straighten the knee or hip, leading to shortened steps and a limping gait.',
      },
      {
        title: 'Muscle Wasting & Instability',
        description: 'Thinning of the quadriceps and gluteal muscles, which destabilizes the joints and increases fall risk.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Passive Joint Mobilization',
        description: 'Applying gentle manual oscillations to the joint capsule to stimulate synovial fluid, reducing joint friction and pain.',
      },
      {
        step: '02',
        title: 'Quadriceps & Gluteal Strengthening',
        description: 'Using targeted resistance training to build strong shock-absorbing muscles, relieving direct load on the joint cartilage.',
      },
      {
        step: '03',
        title: 'Low-Impact Mobility Training',
        description: 'Engaging in non-weight-bearing exercises to expand joint flexion angles without aggravating existing wear and tear.',
      },
      {
        step: '04',
        title: 'Balance & Proprioceptive Drills',
        description: 'Training joint receptors on uneven surfaces to improve walking coordination and prevent sudden joint buckling.',
      },
    ],
    benefits: [
      'Reduced swelling, joint stiffness, and clicking sounds (crepitus)',
      'Vastly increased walking distances and stair-climbing capabilities',
      'Enhanced muscle strength around knees and hips for joint safety',
      'Extended longevity of natural joints, avoiding early replacement surgeries',
    ],
    features: [
      'Manual joint capsule stretch (Maitland approach)',
      'Low-impact muscle building and load management',
      'Proprioception training on balance discs',
      'Gait analysis and orthotic footwear guidance',
    ],
    metaTitle: 'Arthritis & Knee Joint Stiffness Therapy | JSK Karaikudi',
    metaDesc: 'Manage knee osteoarthritis and joint stiffness in Karaikudi. Manual joint mobilization, muscle strengthening, and gait training for active aging.',
  },
  'stroke-rehab': {
    id: 'stroke-rehab',
    titleEn: 'Stroke Rehabilitation',
    titleTa: 'பக்கவாத மறுவாழ்வு',
    badge: 'Neuro Recovery',
    image: '/assets/stroke_neuro_rehab.png',
    subtitleEn: 'Motor Re-learning, Spasticity Management & Gait Training',
    subtitleTa: 'பக்கவாதத்திற்கு பிந்தைய தசை மற்றும் நரம்பியல் மறுவாழ்வு',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'Stroke Rehabilitation at JSK implements Proprioceptive Neuromuscular Facilitation (PNF) and motor re-learning programs. We help stroke survivors manage spasticity, regain control over paralyzed muscles, recover sitting and standing balance, and rebuild walking independence.',
    challenges: [
      {
        title: 'Hemiplegia & Severe Arm/Leg Weakness',
        description: 'Paralysis affecting one side of the body, making standing, sitting balance, and grasping objects very difficult.',
      },
      {
        title: 'Muscle Spasticity & Joint Contractures',
        description: 'Abnormal muscle tightness causing clawed fingers, bent elbows, or foot drop (inability to lift the foot when stepping).',
      },
      {
        title: 'Asymmetrical Walking & High Fall Risk',
        description: 'Limping and dragging the affected leg, leading to rapid physical fatigue and high safety hazards.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Neuro-Facilitation (PNF Technique)',
        description: 'Stimulating muscle receptors through diagonal movement patterns to help the brain build new pathways (neuroplasticity).',
      },
      {
        step: '02',
        title: 'Spasticity & Foot-Drop Management',
        description: 'Applying prolonged stretching, orthotic splints, and active dorsiflexion exercises to relax tight calf and arm muscles.',
      },
      {
        step: '03',
        title: 'Weight-Shifting & Balance Training',
        description: 'Re-training standing balance by teaching the patient to shift their body weight safely onto the weaker side.',
      },
      {
        step: '04',
        title: 'Functional Gait Retraining',
        description: 'Breaking down walking into safe developmental steps: standing up, weight-bearing, leg swinging, and stepping.',
      },
    ],
    benefits: [
      'Regained motor control in paralyzed hands, arms, and legs',
      'Vastly improved standing stability and reduction in gait limping',
      'Prevention of painful joint contractures and muscle shortening',
      'Increased independence in feeding, dressing, and walking around home',
    ],
    features: [
      'Directed by certified neurological rehabilitation therapists',
      'Individualized high-frequency neuroplasticity exercises',
      'Safe weight-bearing harness and parallel bar training',
      'Interactive ADL (Activities of Daily Living) retraining setups',
    ],
    metaTitle: 'Neurological Stroke Rehabilitation | JSK Karaikudi',
    metaDesc: 'Expert Stroke recovery and hemiplegia physiotherapy in Karaikudi. Regain mobility using PNF, spasticity stretches, and gait retraining.',
  },
  'sports-injury': {
    id: 'sports-injury',
    titleEn: 'Sports Injury & Muscle Strain',
    titleTa: 'விளையாட்டு காயங்கள் & தசை பிடிப்பு',
    badge: 'Athletic Rehab',
    image: '/assets/sports_injury_rehab.png',
    subtitleEn: 'Sprain/Strain Recovery, Ligament Healing & Agility Training',
    subtitleTa: 'விளையாட்டு காயங்கள் மற்றும் தசை பிடிப்பு சிகிச்சை',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'JSK Sports Rehab provides return-to-sport protocols for athletes recovering from ankle sprains, ACL/MCL tears, tennis elbow, and rotator cuff strains. We combine targeted soft-tissue mobilization, progressive loading, and agility training to ensure optimal recovery and prevent re-injury.',
    challenges: [
      {
        title: 'Acute Swelling & Tissue Tear',
        description: 'Painful soft-tissue inflammation, ligament sprains, or muscle strains limiting athletic movements.',
      },
      {
        title: 'Joint Instability & Buckling',
        description: 'Weakness in ligament support leading to joint instability, especially during running, pivoting, or jumping.',
      },
      {
        title: 'Loss of Strength & Conditioning',
        description: 'Rapid loss of muscle power and coordination in the injured limb during forced rest periods.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Controlled Tissue Loading',
        description: 'Applying progressive stress to healing tendons and ligaments to build strong, aligned collagen fibers instead of weak scar tissue.',
      },
      {
        step: '02',
        title: 'Myofascial Release & Dry Needling',
        description: 'Performing hands-on release and manual therapy to relieve muscle trigger points and restore micro-circulation.',
      },
      {
        step: '03',
        title: 'Proprioceptive Agility Training',
        description: 'Re-training balance and rapid joint reflexes using agility ladders and balance boards to prepare for fast sport movements.',
      },
      {
        step: '04',
        title: 'Return-to-Play Testing',
        description: 'Conducting objective strength, hop, and stability tests to ensure the athlete is fully ready to return to sport safety.',
      },
    ],
    benefits: [
      'Complete, scar-free healing of torn ligaments and muscles',
      'Restored athletic speed, power, flexibility, and agility',
      'Maximum joint stability and control under high athletic loads',
      'Elimination of re-injury risks through objective performance checks',
    ],
    features: [
      'Athletic injury evaluation and biomechanics analysis',
      'Controlled progressive exercise scaling setups',
      'Sport-specific balance, pivoting, and landing training',
      'Objective strength benchmarks for return-to-play clearance',
    ],
    metaTitle: 'Sports Injury & Ligament Rehabilitation | JSK Karaikudi',
    metaDesc: 'Recover from ACL tears, ankle sprains, and tennis elbow in Karaikudi. Advanced sports physical therapy and return-to-play agility coaching.',
  },
  'frozen-shoulder': {
    id: 'frozen-shoulder',
    titleEn: 'Shoulder Pain & Frozen Shoulder',
    titleTa: 'தோள்பட்டை வலி & உறைந்த தோள்பட்டை',
    badge: 'Shoulder Mobility',
    image: '/assets/shoulder_rehab.jpg',
    subtitleEn: 'Adhesive Capsulitis Release, Rotator Cuff Strengthening & Glides',
    subtitleTa: 'தோள்பட்டை வலி மற்றும் உறைந்த தோள்பட்டை சிகிச்சை',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'Shoulder rehabilitation at JSK targets adhesive capsulitis (frozen shoulder) and rotator cuff tendinopathy. We restore joint capsule flexibility, resolve painful overhead reach restrictions, and relieve throbbing night pain using manual joint distraction and targeted loading.',
    challenges: [
      {
        title: 'Capsular Adhesions & Lockout',
        description: 'Thickening and tightening of the shoulder capsule, blocking overhead lifting, reaching behind the back, or dressing.',
      },
      {
        title: 'Throbbing Shoulder Night Pain',
        description: 'Severe, aching pain when lying on the affected shoulder, leading to sleep disruption and daily fatigue.',
      },
      {
        title: 'Rotator Cuff Impingement',
        description: 'Pinching of tendons under the shoulder bone, causing sharp pain when raising the arm sideways.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Glenohumeral Joint Distraction',
        description: 'Performing gentle manual glides to stretch the tight capsule, immediately expanding passive arm rotation angles.',
      },
      {
        step: '02',
        title: 'Rotator Cuff Tendon Loading',
        description: 'Using progressive resistance bands to strengthen rotator cuff muscles, restoring active overhead reach strength.',
      },
      {
        step: '03',
        title: 'Scapular Stability Training',
        description: 'Re-training the shoulder blade muscles (serratus anterior) to move in harmony with the arm bone, avoiding impingement.',
      },
      {
        step: '04',
        title: 'Pulley & Mobility Assist Exercises',
        description: 'Utilizing overhead pulleys and shoulder wheels to guide active-assisted stretches within a pain-free range.',
      },
    ],
    benefits: [
      'Successful release of joint capsule adhesions and tightness',
      'Full, pain-free range of motion restored for overhead tasks',
      'Relief from throbbing night pains, restoring healthy sleep',
      'Restored arm strength for lifting, reaching, and carrying objects',
    ],
    features: [
      'Advanced manual capsular stretch protocols',
      'Active-assisted pulley and shoulder wheel equipment',
      'Targeted rotator cuff muscle-activation schedules',
      'Personalized home stretching guidance',
    ],
    metaTitle: 'Shoulder Pain & Frozen Shoulder Rehab | JSK Karaikudi',
    metaDesc: 'Resolve frozen shoulder and rotator cuff impingement in Karaikudi. Maitland capsular glides, pulley stretches, and shoulder strengthening.',
  },
  'post-surgery': {
    id: 'post-surgery',
    titleEn: 'Post-Surgery Rehabilitation',
    titleTa: 'அறுவை சிகிச்சைக்கு பிந்தைய மறுவாழ்வு',
    badge: 'Surgical Recovery',
    image: '/assets/post_surgery.jpg',
    subtitleEn: 'Stiffness Prevention, Knee/Hip Replacement & Fracture Recovery',
    subtitleTa: 'அறுவை சிகிச்சைக்கு பிந்தைய மறுவாழ்வு உடற்பயிற்சிகள்',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'JSK Post-Surgery Wing provides structured orthopedic rehabilitation following joint replacements, fracture fixations, and ligament reconstructions. We prevent joint stiffness, rebuild wasted muscles, and retrain walking gait to help patients return to independent living.',
    challenges: [
      {
        title: 'Post-Surgical Joint Stiffness',
        description: 'Development of thick scar tissue and joint capsule tightness due to post-operative immobilization, restricting bending.',
      },
      {
        title: 'Rapid Muscle Wasting (Atrophy)',
        description: 'Severe thinning and weakness in the muscles of the operated leg or arm, causing extreme instability.',
      },
      {
        title: 'Gait Compensations & Limping',
        description: 'Limping and placing unequal weight on the legs, leading to secondary back pain and strain on the healthy leg.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Scar Tissue Mobilization',
        description: 'Performing manual scar massage to prevent adhesions and ensure skin and underlying fascia slide smoothly during movement.',
      },
      {
        step: '02',
        title: 'Guided Range of Motion Expansion',
        description: 'Utilizing gentle passive and active-assisted bending to safely recover joint flexion and extension angles step-by-step.',
      },
      {
        step: '03',
        title: 'Early Isometric Activation',
        description: 'Activating thigh or shoulder muscles using static contractions to build strength without stress on healing bones or stitches.',
      },
      {
        step: '04',
        title: 'Progressive Weight-Bearing & Gait',
        description: 'Retraining gait phases using parallel bars to safely move from walker, to crutches, and finally independent walking.',
      },
    ],
    benefits: [
      'Successful recovery of full joint bending and straightening angles',
      'Reversal of post-operative muscle wasting and strength loss',
      'Restoration of a normal, limp-free walking pattern',
      'Safe, faster return to daily home activities and work routines',
    ],
    features: [
      'Close alignment with surgeon post-operative guidelines',
      'Gentle scar management and swelling control techniques',
      'Parallel bar gait retraining setup',
      'Gradual weight-bearing progress audits',
    ],
    metaTitle: 'Post-Surgery Orthopedic Rehabilitation | JSK Karaikudi',
    metaDesc: 'Rehab after knee/hip replacement and fracture surgeries in Karaikudi. Rebuild muscle, resolve stiffness, and restore limp-free walking.',
  },
  'neuro-rehab': {
    id: 'neuro-rehab',
    titleEn: 'Cerebral Palsy & Neuro Rehab',
    titleTa: 'செரிப்ரல் பால்சி & நரம்பியல் மறுவாழ்வு',
    badge: 'Neurodevelopment',
    image: '/assets/neuro_rehab.jpg',
    subtitleEn: 'Neurodevelopmental Therapy (NDT), Posture & Gait Training',
    subtitleTa: 'செரிப்ரல் பால்சி மற்றும் நரம்பியல் வளர்ச்சி சிகிச்சை',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'JSK Pediatric Neuro Rehab provides Neurodevelopmental Therapy (NDT) for children with Cerebral Palsy, traumatic brain injuries, and congenital motor disorders. We manage spasticity, stimulate balance reflexes, and train motor coordination to build functional physical independence.',
    challenges: [
      {
        title: 'High Muscle Tone & Scissors Gait',
        description: 'Severe spasticity in legs or arms, leading to toe-walking, scissors walking, or difficulties using hands.',
      },
      {
        title: 'Poor Trunk & Head Control',
        description: 'Struggle to sit upright, crawl, roll over, or maintain balance when standing without support.',
      },
      {
        title: 'Joint Stiffness & Deformities',
        description: 'Persistent spasticity leading to muscle shortening, joint contractures, and skeletal alignment issues.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'NDT Handling & Facilitation',
        description: 'Using hands-on facilitation techniques at key control points to guide the child into active, coordinated movement patterns.',
      },
      {
        step: '02',
        title: 'Prolonged Muscle Stretching',
        description: 'Applying gentle, sustained stretches to tight spastic muscles to maintain muscle length and joint flexibility.',
      },
      {
        step: '03',
        title: 'Balance & Weight-Shifting Drills',
        description: 'Training balance responses on wobble boards, bolsters, and wedges to build trunk control for sitting and standing.',
      },
      {
        step: '04',
        title: 'Play-Integrated Physical Tasks',
        description: 'Designing movement tasks (reaching, crawling, stepping) as play activities to keep the child motivated and engaged.',
      },
    ],
    benefits: [
      'Significant reduction in muscle spasticity and leg stiffness',
      'Successful attainment of delayed motor milestones (sitting, standing)',
      'Correction of abnormal walking patterns (toe-walking, scissors gait)',
      'Prevention of joint deformities, contractures, and future surgeries',
    ],
    features: [
      'Certified Neurodevelopmental Therapy (NDT) handling techniques',
      'Sensory-motor integration gym and parallel bars',
      'Posture correction wedges, bolsters, and standing frames',
      'Detailed monthly milestone tracking logs',
    ],
    metaTitle: 'Cerebral Palsy & Neuro Physiotherapy | JSK Karaikudi',
    metaDesc: 'Pediatric Neuro rehabilitation and NDT for Cerebral Palsy in Karaikudi. Build trunk control, manage spasticity, and correct gait patterns.',
  },
  'geriatric-mobility': {
    id: 'geriatric-mobility',
    titleEn: 'Geriatric Mobility & Fall Prevention',
    titleTa: 'முதியோர் இயக்கம் & தடிப்பு தடுப்பு',
    badge: 'Active Aging',
    image: '/assets/geriatric_mobility.jpg',
    subtitleEn: 'Balance Training, Leg Strength Maintenance & Fall Prevention',
    subtitleTa: 'முதியோர் இயக்கம் மற்றும் தடுமாற்ற தடுப்பு பயிற்சிகள்',
    timings: 'Mon - Sat: 9:00 AM - 8:00 PM',
    introText:
      'JSK Geriatric Rehabilitation program is designed to restore walking confidence, build lower-limb strength, and prevent falls for senior citizens. We retrain balance reflexes, correct gait deviations, and supply home-safety tips to ensure independent active aging.',
    challenges: [
      {
        title: 'High Risk of Falls & Instability',
        description: 'Unsteadiness when turning, climbing stairs, or walking on uneven floors, leading to severe fall concerns.',
      },
      {
        title: 'Sarcopenia & Leg Weakness',
        description: 'Age-related loss of muscle mass, making standing up from chairs, climbing stairs, and walking long distances difficult.',
      },
      {
        title: 'Fear of Falling & Sedentary Habit',
        description: 'Restricting activities due to fear of falling, which leads to joint stiffness, muscle weakness, and dependency.',
      },
    ],
    methodology: [
      {
        step: '01',
        title: 'Proprioception & Balance Training',
        description: 'Practicing standing and walking on foam pads, balance boards, and step-over paths to retrain balance reflexes.',
      },
      {
        step: '02',
        title: 'Leg Strength Maintenance',
        description: 'Performing gentle, senior-friendly exercises like sits-to-stands and calf raises to build walking endurance.',
      },
      {
        step: '03',
        title: 'Gait Phase Correction',
        description: 'Correcting posture, stride length, and heel-strike landing patterns during walking to ensure maximum stability.',
      },
      {
        step: '04',
        title: 'Home Safety Education',
        description: 'Providing tips to eliminate indoor hazards (dim lighting, loose rugs, bathroom safety) to prevent slips.',
      },
    ],
    benefits: [
      'Substantial reduction in fall risks and near-miss slips',
      'Increased leg strength and stamina for independent outings',
      'Restored confidence in walking and climbing stairs without assistance',
      'Long-term maintenance of active independence, reducing family burden',
    ],
    features: [
      'Gentle, low-impact, senior-friendly exercise plans',
      'Standardized fall-risk assessment scoring systems',
      'Walking posture and balance diagnostics',
      'Direct home safety optimization advice',
    ],
    metaTitle: 'Geriatric Mobility & Fall Prevention | JSK Karaikudi',
    metaDesc: 'Restore walking stability and prevent falls for senior citizens in Karaikudi. Safe balance training, leg strengthening, and gait correction.',
  },
};

export async function generateStaticParams() {
  return Object.keys(PHYSIO_DETAILS).map((id) => ({ id }));
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const details = PHYSIO_DETAILS[params.id];
  if (!details) {
    return {
      title: 'Service Not Found',
    };
  }
  return {
    title: details.metaTitle,
    description: details.metaDesc,
  };
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function PhysioDetailsPage(props: PageProps) {
  const params = await props.params;
  const service = PHYSIO_DETAILS[params.id];

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Back Header Banner */}
      <section className="section section-navy" style={{ padding: '35px 0', borderBottom: '4px solid var(--accent-orange)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <Link
              href="/physio-services"
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
              Back to Physiotherapy
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
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
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
                            color: 'var(--primary-purple)',
                            backgroundColor: 'rgba(107, 47, 160, 0.1)',
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
                      <div style={{ fontSize: '0.8rem', color: 'rgba(250,250,248,0.6)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Therapy Standard</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: '600' }}>Canadian Spinal & Neuro Protocols</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <a
                      href={`https://wa.me/919363437008?text=Hello%20JSK%2C%20I%20want%20to%20book%20a%20physiotherapy%20consultation%20for%20${encodeURIComponent(service.titleEn)}`}
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
                        <i className="fas fa-check-circle" style={{ color: 'var(--primary-purple)', marginTop: '3px' }}></i>
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
