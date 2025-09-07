// src/components/Card.tsx
import React from 'react';
import '../styles/Card.css';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  ariaLabel?: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title, description, link, ariaLabel }) => {
  return (
    <div className="card" role="article" aria-label={ariaLabel}>
      <img src={imageSrc} alt={title} loading="lazy" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {link && <a href={link} className="card-link">Learn More</a>}
      </div>
    </div>
  );
};

export default Card;
