function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


const slides = document.querySelectorAll('#certificate-slider .certificate-slide');
let currentSlide = 0;

function showSlide(idx) {
  slides.forEach((slide, i) => {
    slide.style.display = i === idx ? 'block' : 'none';
    slide.classList.toggle('active', i === idx);
  });
}

document.getElementById('prev-certificate').onclick = function () {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
};

document.getElementById('next-certificate').onclick = function () {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
};

// Initialize on load
showSlide(currentSlide);


document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.contact-form');
  const emailInput = form.querySelector('input[name="email"]');

  form.addEventListener('submit', function (e) {
    const email = emailInput.value.trim();
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      e.preventDefault(); // Stop form submission
    }
  });
});