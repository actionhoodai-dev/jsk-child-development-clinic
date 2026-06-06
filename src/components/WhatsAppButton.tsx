import React from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = '919363437008';
  const message = encodeURIComponent(
    'Hello JSK Child Development & Physiotherapy Center, I would like to inquire about booking an appointment.'
  );

  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      className="whatsapp-widget"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
