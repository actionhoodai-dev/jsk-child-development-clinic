import React from 'react';
import PhysioServicesClient from '@/components/PhysioServicesClient';

export const metadata = {
  title: 'Physiotherapy Services',
  description:
    'JSK Physiotherapy Wing in Karaikudi offers international-standard treatments for neck pain, back pain, stroke rehabilitation, joint stiffness, and sports injuries under advanced Canadian protocols.',
};

export default function PhysioServices() {
  return <PhysioServicesClient />;
}
