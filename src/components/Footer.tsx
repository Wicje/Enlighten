// src/components/Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p>&copy; 2025 Enterprise Graphics. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="#" aria-label="Twitter">Twitter</a></li>
          <li><a href="#" aria-label="LinkedIn">LinkedIn</a></li>
          <li><a href="#" aria-label="Instagram">Instagram</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
