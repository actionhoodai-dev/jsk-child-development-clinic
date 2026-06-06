import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import SmoothScroll from '@/components/SmoothScroll';

// Configure Google Fonts for native layout shift-free loading
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-headings',
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'JSK Child Development & Physiotherapy Center | Karaikudi',
    template: '%s | JSK Child Development & Physiotherapy Center',
  },
  description:
    'JSK Child Development & Physiotherapy Center in Karaikudi, Tamil Nadu, provides world-class pediatric therapies (Autism, ADHD, Speech Therapy) and adult physiotherapy led by a Canada-trained expert.',
  keywords: [
    'physiotherapy',
    'child development',
    'occupational therapy',
    'speech therapy',
    'autism therapy',
    'ADHD therapy',
    'cerebral palsy rehab',
    'sports physiotherapy',
    'stroke rehabilitation',
    'Karaikudi clinic',
    'Tamil Nadu healthcare',
    'Canada trained doctor',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Load Font Awesome icons for buttons, list items, and contacts */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        {/* Enable smooth inertial scrolling */}
        <SmoothScroll />

        {/* Sticky Header */}
        <Navbar />

        {/* Dynamic Route Pages */}
        <main>{children}</main>

        {/* Global Footer */}
        <Footer />

        {/* Floating Pulsing Contact Shortcut */}
        <WhatsAppButton />
      </body>
    </html>
  );
}
