// src/pages/Contact.tsx
import React, { useState } from 'react';
import Button from '../components/Button';
import '../styles/Contact.css';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Placeholder for form submission (e.g., integrate with CMS API later)
      console.log('Form submitted:', formData);
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <section className="contact container" role="main">
        <h1 className="page-title">Contact Us</h1>
        <p>Thank you for your message! We'll get back to you soon.</p>
      </section>
    );
  }

  return (
    <section className="contact container" role="main">
      <h1 className="page-title">Contact Us</h1>
      <p className="contact-intro">
        Get in touch with us for your design needs.
      </p>
      <form onSubmit={handleSubmit} className="contact-form" noValidate aria-label="Contact form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
            required
          />
          {errors.name && <span id="name-error" className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
            required
          />
          {errors.email && <span id="email-error" className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            aria-describedby={errors.message ? 'message-error' : undefined}
            required
          />
          {errors.message && <span id="message-error" className="error">{errors.message}</span>}
        </div>
        <Button type="submit" variant="primary" ariaLabel="Submit contact form">
          Send Message
        </Button>
      </form>
    </section>
  );
};

export default Contact;
