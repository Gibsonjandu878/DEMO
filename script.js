// script.js

const cards = document.querySelectorAll('.service-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Optional: stop observing after fade in
    }
  });
}, {
  threshold: 0.2
});

cards.forEach(card => {
  observer.observe(card);
});
