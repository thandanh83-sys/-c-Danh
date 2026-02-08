const header = document.getElementById("header");
const cta = document.getElementById("cta");
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => {
  section.classList.add("reveal");
  observer.observe(section);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("shrink", window.scrollY > 40);
});

cta.addEventListener("click", () => {
  document.getElementById("concept").scrollIntoView({ behavior: "smooth" });
});
