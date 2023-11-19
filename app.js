/* ==================
  Mobile navigation
=====================*/
var menuBtn = document.querySelector(".menu-btn");
var menuIcon = document.querySelector(".menu-icon");
var nav = document.querySelector(".main-nav");
// Open and close mobile navigation
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", function () {
    (nav === null || nav === void 0 ? void 0 : nav.classList.contains("close-nav")) ? openNav() : closeNav();
});
// Close mobile navigation when a navigation link or button is clicked
nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", function (event) {
    var target = event === null || event === void 0 ? void 0 : event.target;
    // If the event bubbled up from a navigation link or nav button
    if ((target === null || target === void 0 ? void 0 : target.closest(".nav-link")) || (target === null || target === void 0 ? void 0 : target.closest(".btn"))) {
        closeNav();
    }
});
// Open and close navigation functions
function closeNav() {
    if (!nav)
        return;
    nav.style.clipPath = "";
    nav.style.transitionDuration = "0.5s";
    nav.classList.add("close-nav");
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
}
function openNav() {
    if (!nav)
        return;
    nav.style.clipPath = "";
    nav.style.transitionDuration = "0.5s";
    nav.classList.remove("close-nav");
    menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg");
}
// Close mobile navigation when the viewport width increases to desktop size
var mql = window.matchMedia("(max-width: 767px)");
mql.addEventListener("change", function (event) {
    if (!nav)
        return;
    if (!(event === null || event === void 0 ? void 0 : event.matches)) {
        // The viewport is 768 or more pixels wide. Open navigation
        nav.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    }
    else {
        // Change from desktop to a smaller screen with mobile navigation. Close navigation
        nav.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)";
        nav.style.transitionDuration = "0s";
        nav.classList.add("close-nav");
        menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
    }
});
/* ==================
  Slider
=====================*/
var currentSlide = 0;
var btnPrev = document.querySelector(".grid__btn-prev");
var btnNext = document.querySelector(".grid__btn-next");
var slidesOfImages = document.querySelector(".grid__slides");
var slidesOfText = document.querySelector(".grid__slide-titles");
var slideText = document.querySelector(".grid__slide-title");
var slideImage = document.querySelector(".grid__slider-image");
// Clamp current slide
function clamp(num, min, max) {
    if (num < min) {
        num = min;
    }
    else if (num > max) {
        num = max;
    }
    return num;
}
// Get element width
function getElementWidth(element) {
    return element.offsetWidth;
}
// Arrow button listeners
btnPrev === null || btnPrev === void 0 ? void 0 : btnPrev.addEventListener("click", function () {
    if (!slidesOfImages || !slidesOfText)
        return;
    currentSlide--;
    currentSlide = clamp(currentSlide, 0, 2);
    slidesOfImages.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideImage), "px)");
    slidesOfText.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideText), "px)");
});
btnNext === null || btnNext === void 0 ? void 0 : btnNext.addEventListener("click", function () {
    if (!slidesOfImages || !slidesOfText)
        return;
    currentSlide++;
    currentSlide = clamp(currentSlide, 0, 2);
    slidesOfImages.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideImage), "px)");
    slidesOfText.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideText), "px)");
});
// Detect viewport size change and update the sliding image/text sizes
window.addEventListener("resize", function () {
    if (!slidesOfImages || !slidesOfText)
        return;
    slidesOfImages.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideImage), "px)");
    slidesOfText.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideText), "px)");
});
