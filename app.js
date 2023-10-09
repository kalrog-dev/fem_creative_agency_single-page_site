/* ==================
  Mobile navigation
=====================*/
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".main-nav");

// Open and close mobile navigation
menuBtn.addEventListener("click", () => {
  // Navigation is closed
  if (nav.classList.contains("close-nav")) {
    // Open navigation
    nav.classList.remove("close-nav");
    menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg");
  } else {
    // Close navigation
    nav.classList.add("close-nav");
    menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  }
});

// Close menu when a navigation link or button is clicked
const navLinks = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".main-nav .btn");

navLinks.forEach(e => {
  e.addEventListener("click", () => {
    nav.classList.add("close-nav");
    menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  });
})

navBtn.addEventListener("click", () => {
  nav.classList.add("close-nav");
  menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
});

/* ==================
  Slider
=====================*/
let currentSlide = 0;
const btnPrev = document.querySelector(".grid__btn-prev");
const btnNext = document.querySelector(".grid__btn-next");
const slideImageContainer = document.querySelector(".grid__slider-image-container");
const slideTextContainer = document.querySelector(".grid__slide-titles");

// Clamp current slide
function clamp(num, min, max) {
  if (num < min) {
    num = min;
  } else if (num > max) {
    num = max;
  }
  return num;
}

// Arrow button listeners
btnPrev.addEventListener("click", () => {
  currentSlide--;
  currentSlide = clamp(currentSlide, 0, 2);
  slideImageContainer.style.transform = `translateX(${currentSlide * -100}vw)`;
  slideTextContainer.style.transform = `translateX(${currentSlide * -100}vw)`;
});

btnNext.addEventListener("click", () => {
  currentSlide++;
  currentSlide = clamp(currentSlide, 0, 2);
  slideImageContainer.style.transform = `translateX(${currentSlide * -100}vw)`;
  slideTextContainer.style.transform = `translateX(${currentSlide * -100}vw)`;
});