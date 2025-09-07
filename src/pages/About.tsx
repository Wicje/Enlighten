// src/pages/About.tsx
import React from 'react';
import Card from '../components/Card';
import '../styles/About.css';

const About: React.FC = () => {
  return (
    <section className="about container" role="main">
      <h1 className="page-title">About Us</h1>
      <p className="about-text">
        At Enterprise Graphics, we specialize in creating premium, enterprise-grade design solutions.
        Our team brings years of expertise to deliver minimalist, Apple-inspired visuals that elevate your brand.
      </p>
      <h2 className="section-title">Our Values</h2>
      <div className="grid">
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Innovation"
          description="Pushing the boundaries of design creativity."
          ariaLabel="Innovation value"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Expertise"
          description="Deep knowledge in enterprise-scale graphics."
          ariaLabel="Expertise value"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Credibility"
          description="Trusted by leading global enterprises."
          ariaLabel="Credibility value"
        />
      </div>
    </section>
  );
};

export default About;
