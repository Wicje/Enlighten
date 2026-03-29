// src/pages/Portfolio.tsx
import React from 'react';
import Card from '../components/Card';
import '../styles/Portfolio.css';

const Portfolio: React.FC = () => {
  return (
    <section className="portfolio container" role="main">
      <h1 className="page-title">Portfolio</h1>
      <p className="portfolio-intro">
        Explore our collection of enterprise-grade design projects.
      </p>
      <div className="grid portfolio-grid">
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Case Study 1"
          description="Revolutionary branding for a tech giant."
          link="#"
          ariaLabel="Case Study 1"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Case Study 2"
          description="Scalable UI kit for enterprise apps."
          link="#"
          ariaLabel="Case Study 2"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Case Study 3"
          description="Premium marketing materials."
          link="#"
          ariaLabel="Case Study 3"
        />
        <Card
          imageSrc="https://via.placeholder.com/400x300"
          title="Case Study 4"
          description="Global campaign visuals."
          link="#"
          ariaLabel="Case Study 4"
        />
      </div>
    </section>
  );
};

export default Portfolio;
