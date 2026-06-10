'use client';

import React, { useState } from 'react';
import Reveal from '@/components/Reveal';

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters.';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    } else {
      const phoneRegex = /^[0-9]{10}$/;
      const digitsOnly = formData.phone.replace(/[^0-9]/g, '');
      if (!phoneRegex.test(digitsOnly)) {
        newErrors.phone = 'Please enter a valid 10-digit phone number.';
      }
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address.';
      }
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service wing/therapy program.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Please provide details about the patient (at least 10 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
    // Clear server error on any input change
    if (serverError) setServerError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.error || 'Something went wrong. Please try again.');
        return;
      }

      // Success
      setSubmitted(true);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: '',
      });
      setErrors({});
    } catch {
      setServerError('Network error. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Title */}
      <section className="section section-teal text-center" style={{ padding: '60px 0' }}>
        <div className="container">
          <Reveal direction="fade">
            <h1 style={{ color: '#ffffff', marginBottom: '10px' }}>Contact & Booking</h1>
            <p style={{ color: 'rgba(250, 250, 248, 0.85)', margin: 0, fontSize: '1.25rem' }}>
              Schedule A Session or Visit JSK Rehabilitation Center
            </p>
          </Reveal>
        </div>
      </section>

      {/* Main Section */}
      <section className="section section-white">
        <div className="container">
          <div className="contact-wrapper">
            {/* Form side */}
            <Reveal direction="left">
              <div className="contact-form-container">
                <h3 style={{ marginBottom: '20px' }}>Client Intake & Appointment Request</h3>
                
                {submitted ? (
                  <div
                    style={{
                      backgroundColor: 'rgba(13, 115, 119, 0.1)',
                      color: 'var(--primary-teal)',
                      padding: '30px',
                      borderRadius: '4px',
                      border: '2px solid var(--primary-teal)',
                      textAlign: 'center',
                    }}
                  >
                    <i className="fas fa-check-circle" style={{ fontSize: '3rem', marginBottom: '15px' }}></i>
                    <h4>Request Sent Successfully!</h4>
                    <p style={{ fontSize: '0.95rem', color: 'var(--text-dark)', marginTop: '10px', marginBottom: 0 }}>
                      Your enquiry has been emailed directly to our JSK clinical team. Our intake coordinator will review the details and contact you at your phone number within <strong>2 hours</strong> to confirm your therapist booking.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn btn-primary"
                      style={{ marginTop: '20px' }}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate>
                    {/* Row 1: Name & Phone */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="Patient or Parent Name"
                        />
                        {errors.name && <span className="form-error">{errors.name}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="10-digit mobile number"
                        />
                        {errors.phone && <span className="form-error">{errors.phone}</span>}
                      </div>
                    </div>

                    {/* Row 2: Email & Service */}
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address (Optional)</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="form-input"
                          placeholder="email@example.com"
                        />
                        {errors.email && <span className="form-error">{errors.email}</span>}
                      </div>

                      <div className="form-group">
                        <label htmlFor="service" className="form-label">Specialty Program *</label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="form-select"
                        >
                          <option value="">-- Select Therapy Program --</option>
                          <option value="Special Education">Child: Special Education</option>
                          <option value="Occupational Therapy">Child: Occupational Therapy</option>
                          <option value="Speech Therapy">Child: Speech & Language Therapy</option>
                          <option value="Behaviour Therapy">Child: Behaviour Therapy</option>
                          <option value="Pediatric Physio">Child: Pediatric Physiotherapy</option>
                          <option value="Spine Neck Rehab">Physio: Spine & Neck Pain Care</option>
                          <option value="Stroke Rehab">Physio: Stroke Rehabilitation</option>
                          <option value="Joint stiffness Rehab">Physio: Joint Pain & Arthritis</option>
                          <option value="Sports Injury Rehab">Physio: Sports Injury Rehab</option>
                          <option value="Geriatric Mobility">Physio: Geriatric Mobility</option>
                        </select>
                        {errors.service && <span className="form-error">{errors.service}</span>}
                      </div>
                    </div>

                    {/* Message */}
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">Intake Notes / Symptoms *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        className="form-textarea"
                        rows={4}
                        placeholder="Please describe the patient's symptoms, age, and previous treatments..."
                      ></textarea>
                      {errors.message && <span className="form-error">{errors.message}</span>}
                    </div>

                    {serverError && (
                      <div style={{
                        backgroundColor: 'rgba(211, 47, 47, 0.08)',
                        color: '#D32F2F',
                        padding: '14px 18px',
                        borderRadius: '4px',
                        border: '1px solid #D32F2F',
                        fontSize: '0.9rem',
                        fontWeight: '600',
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                      }}>
                        <i className="fas fa-exclamation-circle"></i>
                        {serverError}
                      </div>
                    )}

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ width: '100%' }}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <i className="fas fa-spinner fa-spin" style={{ marginRight: '10px' }}></i>
                          Sending Your Request...
                        </>
                      ) : (
                        'Submit Booking Intake'
                      )}
                    </button>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Info side */}
            <Reveal direction="right">
              <div className="contact-info-container">
                {/* Contact Card 1 */}
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="info-details">
                    <h4>Clinic Address</h4>
                    <p>
                      47, Annamalai Chettiyar Street,
                      <br />
                      Chekkalai, Karaikudi,
                      <br />
                      Tamil Nadu - 630001
                    </p>
                  </div>
                </div>

                {/* Contact Card 2 */}
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-phone-alt"></i>
                  </div>
                  <div className="info-details">
                    <h4>Phone & WhatsApp</h4>
                    <p>
                      Primary: <a href="tel:+919363437008">+91 93634 37008</a>
                    </p>
                    <p>
                      WhatsApp Support Available Mon-Sat
                    </p>
                  </div>
                </div>

                {/* Contact Card 3 */}
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="info-details">
                    <h4>Email Inquiries</h4>
                    <p>
                      <a href="mailto:jskrehabcenter@gmail.com">jskrehabcenter@gmail.com</a>
                    </p>
                  </div>
                </div>

                {/* Contact Card 4 */}
                <div className="info-card">
                  <div className="info-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="info-details">
                    <h4>Clinic Timings</h4>
                    <p>
                      Monday - Saturday: 9:00 AM - 8:00 PM
                      <br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Map Section */}
          <Reveal direction="up">
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.2122435101414!2d78.77572479999999!3d10.0816881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0067f06a417c21%3A0x4a1c1c4937ca3d9a!2sJSK%20CHILD%20DEVELOPMENT%20AND%20PHYSIOTHERAPY%20CENTER!5e0!3m2!1sen!2sin!4v1780756891564!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of JSK Child Development & Physiotherapy Center"
              ></iframe>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
