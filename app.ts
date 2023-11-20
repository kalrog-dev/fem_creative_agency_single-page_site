/* ==================
  Mobile navigation
=====================*/
const menuBtn = document.querySelector(".menu-btn") as HTMLButtonElement | null;
const menuIcon = document.querySelector(".menu-icon") as HTMLImageElement | null;
const nav = document.querySelector(".main-nav") as HTMLElement | null;

// Open and close mobile navigation
menuBtn?.addEventListener("click", () => {
  nav?.classList.contains("close-nav") ? displayNav(true) : displayNav(false);
});

// Close mobile navigation when a navigation link or button is clicked
nav?.addEventListener("click", (event) => {
  const target = event?.target as HTMLElement | null;
  // If the event bubbled up from a navigation link or nav button
  if (target?.closest(".nav-link") || target?.closest(".btn")) {
    displayNav(false);
  }
});

// Open and close mobile navigation depending on the argument
function displayNav(show: boolean): void {
  if (!nav) return;
  nav.style.clipPath = "";
  nav.style.transitionDuration = "0.5s";

  if (show) {
    nav.classList.remove("close-nav");
    menuIcon?.setAttribute("src", "./assets/mobile/icon-cross.svg");
  } else {
    nav.classList.add("close-nav");
    menuIcon?.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  }
}

// Close mobile navigation when the viewport width increases to desktop size
const mql: MediaQueryList = window.matchMedia("(max-width: 767px)");
mql.addEventListener("change", (event) => {
  if (!nav) return;
  if (!event?.matches) {
    // The viewport is 768 or more pixels wide. Open navigation
    nav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
  } else {
    // Change from desktop to a smaller screen with mobile navigation. Close navigation
    nav.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
    nav.style.transitionDuration = "0s"
    nav.classList.add("close-nav");
    menuIcon?.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
  }
});

/* ==================
  Slider
=====================*/
let currentSlide: number = 0;
const btnPrev = document.querySelector(".grid__btn-prev") as HTMLButtonElement | null;
const btnNext = document.querySelector(".grid__btn-next") as HTMLButtonElement | null;
const slidesOfImages = document.querySelector(".grid__slides") as HTMLDivElement | null;
const slidesOfText = document.querySelector(".grid__slide-titles") as HTMLDivElement | null;
const slideText = document.querySelector(".grid__slide-title") as HTMLDivElement | null;
const slideImage = document.querySelector(".grid__slider-image") as HTMLImageElement | null;

// Clamp the current slide number
function clamp(num: number, min: number, max: number): number {
  if (num < min) {
    num = min;
  } else if (num > max) {
    num = max;
  }
  return num;
}

// Get the element width
function getElementWidth(element: HTMLElement | null): number {
  return element?.offsetWidth ?? 0;
}

// Arrow button listeners
btnPrev?.addEventListener("click", () => {
  if (!slidesOfImages || !slidesOfText) return;
  currentSlide--;
  currentSlide = clamp(currentSlide, 0, 2);
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
});

btnNext?.addEventListener("click", () => {
  if (!slidesOfImages || !slidesOfText) return;
  currentSlide++;
  currentSlide = clamp(currentSlide, 0, 2);
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
});

// Detect viewport size change and update the sliding image/text sizes
window.addEventListener("resize", () => {
  if (!slidesOfImages || !slidesOfText) return;
  slidesOfImages.style.transform = `translateX(${currentSlide * -getElementWidth(slideImage)}px)`;
  slidesOfText.style.transform = `translateX(${currentSlide * -getElementWidth(slideText)}px)`;
})