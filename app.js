/* ==================
  Mobile navigation
=====================*/
var menuBtn = document.querySelector(".menu-btn");
var menuIcon = document.querySelector(".menu-icon");
var nav = document.querySelector(".main-nav");
// Open and close mobile navigation
menuBtn === null || menuBtn === void 0 ? void 0 : menuBtn.addEventListener("click", function () {
    (nav === null || nav === void 0 ? void 0 : nav.classList.contains("close-nav")) ? displayNav(true) : displayNav(false);
});
// Close mobile navigation when a navigation link or button is clicked
nav === null || nav === void 0 ? void 0 : nav.addEventListener("click", function (event) {
    var target = event === null || event === void 0 ? void 0 : event.target;
    // If the event bubbled up from a navigation link or nav button
    if ((target === null || target === void 0 ? void 0 : target.closest(".nav-link")) || (target === null || target === void 0 ? void 0 : target.closest(".btn"))) {
        displayNav(false);
    }
});
// Open and close mobile navigation depending on the argument
function displayNav(show) {
    if (!nav)
        return;
    nav.style.clipPath = "";
    nav.style.transitionDuration = "0.5s";
    if (show) {
        nav.classList.remove("close-nav");
        menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.setAttribute("src", "./assets/mobile/icon-cross.svg");
    }
    else {
        nav.classList.add("close-nav");
        menuIcon === null || menuIcon === void 0 ? void 0 : menuIcon.setAttribute("src", "./assets/mobile/icon-hamburger.svg");
    }
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
var arrowBtnContainer = document.querySelector(".grid__arrow-container");
var slidesOfImages = document.querySelector(".grid__slides");
var slidesOfText = document.querySelector(".grid__slide-titles");
var slideText = document.querySelector(".grid__slide-title");
var slideImage = document.querySelector(".grid__slider-image");
// Clamp the current slide number
function clamp(input, min, max) {
    if (input < min) {
        input = min;
    }
    else if (input > max) {
        input = max;
    }
    return input;
}
// Get the element width
function getElementWidth(element) {
    var _a;
    return (_a = element === null || element === void 0 ? void 0 : element.offsetWidth) !== null && _a !== void 0 ? _a : 0;
}
// Listen for next/prev slide btn clicks, update the current slide index and display the slide
arrowBtnContainer === null || arrowBtnContainer === void 0 ? void 0 : arrowBtnContainer.addEventListener("click", function (event) {
    updateCurrentSlideNumber(event);
    showCurrentSlide();
});
// Detect viewport size change and update the sliding image/text sizes
window.addEventListener("resize", function () {
    showCurrentSlide();
});
// Increment/decrement the slide index if the click event bubbled up from the next/prev button
function updateCurrentSlideNumber(event) {
    var target = event === null || event === void 0 ? void 0 : event.target;
    if (target === null || target === void 0 ? void 0 : target.closest(".grid__btn-next")) {
        currentSlide++;
        currentSlide = clamp(currentSlide, 0, 2);
    }
    else if (target === null || target === void 0 ? void 0 : target.closest(".grid__btn-prev")) {
        currentSlide--;
        currentSlide = clamp(currentSlide, 0, 2);
    }
}
// Translate the slider elements to the next/prev slide
function showCurrentSlide() {
    if (!slidesOfImages || !slidesOfText)
        return;
    slidesOfImages.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideImage), "px)");
    slidesOfText.style.transform = "translateX(".concat(currentSlide * -getElementWidth(slideText), "px)");
}
