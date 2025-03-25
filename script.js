
// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const sectionId = this.getAttribute('href');
    document.querySelector(sectionId).scrollIntoView({
    behavior: 'smooth'
    });
    });
    });
    
    // Add animation to project cards when they come into view
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
    entry.target.style.opacity = 1;
    entry.target.style.transform = 'translateY(0)';
    }
    });
    }, { threshold: 0.1 });
    
    projectCards.forEach(card => {
    card.style.opacity = 0;
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s, transform 0.5s';
    observer.observe(card);
    card.addEventListener('mouseover', function(event){
        event.target.style.backgroundColor = 'yellow';
    });
    card.addEventListener('mouseout', function(event){
        event.target.style.backgroundColor = 'white';
    });
    });
    });
    