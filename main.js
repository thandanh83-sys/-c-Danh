const header = document.getElementById("header");
const cta = document.getElementById("cta");
const visionScreen = document.getElementById("visionScreen");
const rotateBtn = document.getElementById("rotateBtn");
const themeBtn = document.getElementById("themeBtn");
const toggles = document.querySelectorAll(".toggle-button");
const galleryItems = document.querySelectorAll(".gallery-item");
const overlay = document.getElementById("overlay");
const overlayTitle = document.getElementById("overlayTitle");
const overlayText = document.getElementById("overlayText");
const sections = document.querySelectorAll(".section");

const galleryDescriptions = {
  1: "Khoảnh khắc yên bình, ánh sáng tràn qua từng lớp gỗ.",
  2: "Bố cục tối giản, nhịp thở chậm rãi.",
  3: "Cây xanh ôm lấy không gian sống.",
  4: "Ánh sáng dịu nhẹ, lan tỏa sự thư thái.",
  5: "Chất gỗ mộc mạc, gần gũi thiên nhiên.",
  6: "Tương lai Zen, tinh tế và cân bằng."
};

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

rotateBtn.addEventListener("click", () => {
  visionScreen.classList.toggle("rotate");
});

themeBtn.addEventListener("click", () => {
  visionScreen.classList.toggle("night");
});

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const card = toggle.closest(".toggle-card");
    const status = card.querySelector(".toggle-status");
    const isOn = toggle.classList.toggle("on");
    toggle.setAttribute("aria-pressed", isOn.toString());
    status.textContent = isOn ? "ON" : "OFF";
    status.style.color = isOn ? "#4f6f5a" : "#6b6b6b";
  });
});

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    const key = item.dataset.image;
    overlayTitle.textContent = item.textContent;
    overlayText.textContent = galleryDescriptions[key];
    overlay.classList.add("active");
    overlay.setAttribute("aria-hidden", "false");
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  overlay.setAttribute("aria-hidden", "true");
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    overlay.classList.remove("active");
    overlay.setAttribute("aria-hidden", "true");
  }
});
