// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Terminal typing effect
const typedLine = document.getElementById('typedLine');
const message = "Full-stack developer in progress. Learning HTML, CSS, JS & Python.";
let i = 0;

function typeWriter() {
  if (i < message.length) {
    typedLine.textContent += message.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

// Respect reduced motion preference
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (prefersReducedMotion) {
  typedLine.textContent = message;
} else {
  window.addEventListener('load', typeWriter);
}

// Fade-in sections on scroll
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.15 });

sections.forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(24px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
