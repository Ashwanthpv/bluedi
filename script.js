function enterSite() {
  // Add fade-out animation
  document.querySelector(".landing-container").style.opacity = "0";
  setTimeout(() => {
    window.location.href = "home.html";
  }, 800); // delay for fade effect
}
// Landing page "Enter" button
function enterSite() {
  const landing = document.querySelector(".landing-container");
  if (landing) {
    landing.style.opacity = "0";
    setTimeout(() => {
      window.location.href = "home.html";
    }, 800);
  }
}

// ===== IMAGE SLIDER FUNCTION =====
function startSlider(sliderId, interval = 3000) {
  const slider = document.getElementById(sliderId);
  if (!slider) return;
  const slides = slider.querySelectorAll("img");
  let index = 0;

  slides[index].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, interval);
}

// Run sliders on Home Page
window.addEventListener("DOMContentLoaded", () => {
  startSlider("slider1", 3000);
  startSlider("slider2", 4000);
  startSlider("slider3", 5000);
});
