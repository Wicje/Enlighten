// script.js
document.addEventListener('DOMContentLoaded', () => {
  const revealSections = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  revealSections.forEach(section => observer.observe(section));

  // FAQ toggle
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  // For pricing, initial hide price animation spans
  const prices = document.querySelectorAll('.price span');
  prices.forEach(span => {
    span.style.opacity = 0;
    span.style.transform = 'translateY(20px)';
  });
});
