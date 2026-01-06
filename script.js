const header = document.getElementById("header");
const topBtn = document.getElementById("topBtn");
const darkBtn = document.getElementById("darkModeBtn");
const scrollBar = document.getElementById("scrollBar");
const fades = document.querySelectorAll(".fade");

/* ----- 1. Header transparent + bouton haut ----- */
window.addEventListener("DOMContentLoaded", () => {
    fades.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            elem.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        header.style.opacity = "0.85";
        topBtn.style.display = "block";
    } else {
        header.style.opacity = "1";
        topBtn.style.display = "none";
    }

    // Barre de progression
    let height = document.documentElement.scrollHeight - window.innerHeight;
    let progress = (window.scrollY / height) * 100;
    scrollBar.style.width = progress + "%";

    // Apparition des sections
    fades.forEach(elem => {
        const rect = elem.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            elem.classList.add("visible");
        }
    });
});

/* ----- 2. Bouton retour haut ----- */
topBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

/* ----- 3. Mode sombre ----- */
darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});