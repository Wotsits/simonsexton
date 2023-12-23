function openCloseNav() {
  const nav = document.getElementById("mobile-nav-menu");
  nav.classList.toggle("open");
  const body = document.querySelector("body");
  if (nav.classList.contains("open")) {
    body.style.overflow = "hidden";
  }
  else {
    body.style.overflow = "auto";
  }
}

function scrollToContent() {
    const content = document.querySelector(".first-piece-of-content");
    const isDesktop = window.matchMedia("(min-width: 768px)");
    const offsetY = isDesktop.matches ? -95 : -60;
    const offset = content.getBoundingClientRect().top + window.pageYOffset + offsetY;
    window.scrollTo({
        top: offset,
        behavior: "smooth",
    });
}

function selectLightMode() {
  localStorage.setItem("theme", "light");
  const root = document.querySelector(":root");
  root.style.setProperty("--background-color", lightColors.background);
  root.style.setProperty("--first-color", lightColors.first);
  root.style.setProperty("--second-color", lightColors.second);
  root.style.setProperty("--third-color", lightColors.third);
  root.style.setProperty("--fourth-color", lightColors.fourth);
  root.style.setProperty("--text-color", lightColors.text);
  root.style.setProperty("--menu-background-color", lightColors.menu);
  root.style.setProperty("--box-shadow", lightColors.boxShadow);
  root.style.setProperty("--border", lightColors.border);
}

function selectDarkMode() {
  localStorage.setItem("theme", "dark");
  const root = document.querySelector(":root");
  root.style.setProperty("--background-color", darkColors.background);
  root.style.setProperty("--first-color", darkColors.first);
  root.style.setProperty("--second-color", darkColors.second);
  root.style.setProperty("--third-color", darkColors.third);
  root.style.setProperty("--fourth-color", darkColors.fourth);
  root.style.setProperty("--text-color", darkColors.text);
  root.style.setProperty("--menu-background-color", darkColors.menu);
  root.style.removeProperty("--box-shadow");
  root.style.setProperty("--border", darkColors.border);
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

const darkColors = {
  background: "#111",
  first: "#DE29BE",
  second: "#333",
  third: "#aaa",
  fourth: "#6c63ff",
  text: "#fff",
  menu: "rgba(1, 1, 1, 0.9)",
  boxShadow: undefined,
  border: "solid 1px #white",
};

const lightColors = {
  background: "#fff",
  first: "#6c63ff",
  second: "#eee",
  third: "#333",
  fourth: "#DE29BE",
  text: "#111",
  menu: "rgba(255, 255, 255, 0.9)",
  boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
  border: "solid 1px #333",
};

document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector("#hero-text");
  const highlight = hero.querySelector(".highlight");

  const theme = localStorage.getItem("theme");
  if (theme) {
    if (theme === "dark") {
      selectDarkMode();
    } else if (theme === "light") {
      selectLightMode();
    }
  } else {
    const osDayOrNight = window.matchMedia("(prefers-color-scheme: light)");

    if (osDayOrNight.matches) {
      selectLightMode();
    } else {
      selectDarkMode();
    }
  }

  setInterval(() => {
    highlight.classList.add("opacity-0");
    setTimeout(() => {
      const randomWord = Math.floor(Math.random() * words.length);
      highlight.textContent = words[randomWord];
      highlight.classList.remove("opacity-0");
    }, 2000);
  }, 8000);
});
