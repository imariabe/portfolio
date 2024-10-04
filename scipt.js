
// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.getElementById('navbar');
  
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });
  

