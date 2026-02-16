// ================================
// Portfolio Interactions JS
// ================================

// Fade-in sections on scroll
const sections = document.querySelectorAll("section");

function fadeInOnScroll() {
  const trigger = window.innerHeight / 1.2;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < trigger) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    } else {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
    }
  });
}

// Initial call
fadeInOnScroll();

// Listen to scroll event
window.addEventListener("scroll", fadeInOnScroll);

console.log("Portfolio script loaded successfully!");
