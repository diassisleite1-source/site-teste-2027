
// MENU MOBILE

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    menuToggle.textContent =
        navLinks.classList.contains("open") ? "✕" : "☰";
});


// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        menuToggle.textContent = "☰";
    });
});


// MODO ESCURO E CLARO

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
}

function updateThemeIcon() {
    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    themeToggle.textContent =
        currentTheme === "light" ? "☀" : "☾";
}

updateThemeIcon();

themeToggle.addEventListener("click", () => {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    const newTheme =
        currentTheme === "light" ? "dark" : "light";

    if (newTheme === "dark") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", "light");
    }

    localStorage.setItem("portfolio-theme", newTheme);

    updateThemeIcon();
});


// ANIMAÇÕES AO ROLAR A PÁGINA

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});

document.querySelectorAll(".reveal").forEach(element => {
    observer.observe(element);
});


// ANO AUTOMÁTICO

document.getElementById("year").textContent =
    new Date().getFullYear();
