// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add loading animation for images
document.querySelectorAll('.app-card img').forEach(img => {
    img.style.opacity = '0';
    img.onload = function() {
        img.style.transition = 'opacity 0.5s ease-in';
        img.style.opacity = '1';
    };
}); 