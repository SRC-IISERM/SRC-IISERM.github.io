// Sticky navbar after hero scroll
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.getElementById("siteNav");
  const hero = document.getElementById("hero");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        nav.classList.remove("fixed");
      } else {
        nav.classList.add("fixed");
      }
    });
  }, { threshold: 0.1 });

  observer.observe(hero);
});

// Hamburger toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
  });
});
