/* ==================
  Mobile navigation
=====================*/
const menuBtn = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".main-nav");

// Open and close mobile navigation
menuBtn.addEventListener("click", () => {
  nav.classList.contains("close-nav") ? openNav() : closeNav();
});

// Close mobile navigation when a navigation link or button is clicked
const navLinks = document.querySelectorAll(".nav-link");
const navBtn = document.querySelector(".main-nav .btn");

navLinks.forEach(navLink => {
  navLink.addEventListener("click", () => {
    closeNav();
  });
})

navBtn.addEventListener("click", () => {
  closeNav();
});

// Open and close navigation functions
function closeNav() {
  nav.style.clipPath = "";
  nav.style.transitionDuration = "0.5s";
  nav.classList.add("close-nav");
  menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
}

function openNav() {
  nav.style.clipPath = "";
  nav.style.transitionDuration = "0.5s";
  nav.classList.remove("close-nav");
  menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg");
}

// Close mobile navigation when the viewport width increases to desktop size
const mql = window.matchMedia("(max-width: 767px)");
mql.addEventListener("change", (event) => {
  if (!event.matches) {
    // The viewport is 768 or more pixels wide. Open navigation
    nav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
  } else {
    // Change from desktop to a smaller screen with mobile navigation. Close navigation
    nav.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    nav.style.transitionDuration = "0s"
    nav.classList.add("close-nav");
    menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  }
});

/* ==================
  Slider
=====================*/
let currentSlide = 0;
const btnPrev = document.querySelector(".grid__btn-prev");
const btnNext = document.querySelector(".grid__btn-next");
const slidesOfImages = document.querySelector(".grid__slides");
const slidesOfText = document.querySelector(".grid__slide-titles");
const slideImage = document.querySelector(".grid__slider-image");
const slideText = document.querySelector(".grid__slide-title");

// Clamp current slide
function clamp(num, min, max) {
  if (num < min) {
    num = min;
  } else if (num > max) {
    num = max;
  }
  return num;
}

// Get element width
function getElementWidth(element) {
  return element.offsetWidth;
}

// Arrow button listeners
btnPrev.addEventListener("click", () => {
  currentSlide--;
  currentSlide = clamp(currentSlide, 0, 2);
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
});

btnNext.addEventListener("click", () => {
  currentSlide++;
  currentSlide = clamp(currentSlide, 0, 2);
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
});

// Detect viewport size change and update the sliding image/text sizes
window.addEventListener("resize", () => {
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
})