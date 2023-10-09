// Open and close mobile navigation
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".main-nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("close-nav");
});

// TODO: Toggle between hamburger and close icon