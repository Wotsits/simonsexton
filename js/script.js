function openCloseNav() {
  const nav = document.getElementById("mobile-nav-menu");
  nav.classList.toggle("open");
}

const words = [
    "refined",
    "sublime",
    "robust",
    "functional",
    "elegant",
    "sophisticated",
    "intuitive",
    "powerful",
    "beautiful",
    "responsive",
    "versatile",
    "dynamic",
    "flexible",
    "efficient",
    "secure",
    "reliable",
    "scalable",
    "customizable",
    "extensible",
    "accessible",
    "inclusive",
  ];

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-content");
  const highlight = hero.querySelector(".highlight");

  setInterval(() => {
    highlight.classList.add("opacity-0");
    setTimeout(() => {
      const randomWord = Math.floor(Math.random() * words.length);
      highlight.textContent = words[randomWord];
      highlight.classList.remove("opacity-0");
    }, 2000);
  }, 8000);
});
