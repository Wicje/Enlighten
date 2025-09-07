// src/components/Hero.tsx
import React from 'react';
import Button from './Button';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero" role="banner">
      <div className="hero-content fade-in">
        <h1 className="hero-title">Enterprise Graphics</h1>
        <p className="hero-subtitle">Premium Design Solutions for Modern Enterprises</p>
        <Button variant="primary" ariaLabel="View our portfolio">
          View Portfolio
        </Button>
      </div>
    </section>
  );
};

export default Hero;
