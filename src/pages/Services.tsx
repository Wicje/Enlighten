// src/pages/Services.tsx
import React from 'react';
import Card from '../components/Card';
import '../styles/Services.css';

const Services: React.FC = () => {
  return (
    <section className="services container" role="main">
      <h1 className="page-title">Our Services</h1>
      <p className="services-intro">
        We offer comprehensive design services tailored for enterprises, ensuring scalability and premium quality.
      </p>
      <div className="grid">
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Logo Design"
          description="Custom logos that represent your brand identity."
          ariaLabel="Logo Design service"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Branding"
          description="Full branding packages for consistent visuals."
          ariaLabel="Branding service"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Web Graphics"
          description="High-impact graphics for web and digital platforms."
          ariaLabel="Web Graphics service"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Print Design"
          description="Professional print materials for marketing."
          ariaLabel="Print Design service"
        />
      </div>
    </section>
  );
};

export default Services;
