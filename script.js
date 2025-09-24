// Smooth scroll ketika klik link navbar
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// Animasi hover di hero button
const heroBtn = document.querySelector(".btn");
heroBtn.addEventListener("mouseover", () => {
  heroBtn.style.transform = "scale(1.1)";
});
heroBtn.addEventListener("mouseout", () => {
  heroBtn.style.transform = "scale(1)";
});
