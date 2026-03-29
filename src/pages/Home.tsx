// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';
import Card from '../components/Card';
import '../styles/Home.css';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <section className="showcase" role="region" aria-label="Featured showcase">
        <div className="container">
          <h2 className="section-title">Our Showcase</h2>
          <div className="grid">
            <Card
              imageSrc="https://via.placeholder.com/400x300"
              title="Project One"
              description="Innovative design solutions for enterprise needs."
              ariaLabel="Project One details"
            />
            <Card
              imageSrc="https://via.placeholder.com/400x300"
              title="Project Two"
              description="Scalable graphics for global brands."
              ariaLabel="Project Two details"
            />
            <Card
              imageSrc="https://via.placeholder.com/400x300"
              title="Project Three"
              description="Premium visuals that drive results."
              ariaLabel="Project Three details"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
