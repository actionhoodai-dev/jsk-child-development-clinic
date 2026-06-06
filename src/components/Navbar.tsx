'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/child-services', label: 'Child Services' },
  { href: '/physio-services', label: 'Physiotherapy' },
  { href: '/conditions', label: 'Conditions' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll positioning to update nav height and shadow elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="nav-container">
          <Link href="/" className="logo-link">
            <Image
              src="/assets/logo.png"
              alt="JSK Clinic Logo"
              width={200}
              height={50}
              className="logo-img"
              priority
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="nav-menu desktop-only">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle button */}
          <button
            className="mobile-menu-btn"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>

          {/* Mobile Menu List (overlays body below header) */}
          <nav className={`nav-menu mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </header>
    </>
  );
}
