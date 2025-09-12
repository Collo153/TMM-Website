// script.js
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-text");
  
  elements.forEach((el, i) => {
    let text = el.textContent;
    el.textContent = "";
    [...text].forEach((letter, j) => {
      setTimeout(() => {
        el.textContent += letter;
      }, j * 100 + i * 500); // delay letters + stagger lines
    });
  });
});

// MENU TOGGLE
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("active");
}

// Optional: remove 'active' when resizing to desktop
window.addEventListener("resize", () => {
  const navLinks = document.getElementById("navLinks");
  if (window.innerWidth > 768) {
    navLinks.classList.remove("active");
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate-text");
  const overlay = document.querySelector(".hero-overlay");

  // Fade in overlay
  setTimeout(() => {
    overlay.style.opacity = 1;
  }, 300); // start blur shortly after page loads

  elements.forEach((el, i) => {
    let text = el.textContent;
    el.textContent = "";
    [...text].forEach((letter, j) => {
      setTimeout(() => {
        el.textContent += letter;
      }, j * 100 + i * 500); // delay letters + stagger lines
    });
  });
});

//gallery
let slideIndex = 0;
const images = [
  "Photos/1.jpg",
  "Photos/2.jpg",
  "Photos/IMG_0277.jpg",
  "Photos/4.jpg",
  "Photos/8.jpg"
];


function showSlides() {
  const slideshow = document.getElementById("slideshow");
  slideIndex = (slideIndex + 1) % images.length;
  slideshow.src = images[slideIndex];
  setTimeout(showSlides, 3000); // change every 3s
}

// Open full gallery
function openGallery() {
  document.getElementById("fullGallery").style.display = "block";
}

// Close full gallery
function closeGallery() {
  document.getElementById("fullGallery").style.display = "none";
}

// Start slideshow when page loads
document.addEventListener("DOMContentLoaded", showSlides);
