document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("menuOverlay");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menu.classList.toggle("open");
    overlay.classList.toggle("show");
  });

  overlay.addEventListener("click", () => {
    hamburger.classList.remove("active");
    menu.classList.remove("open");
    overlay.classList.remove("show");
  });
});
