
// ========================================
// ASSIS LEITE - JAVASCRIPT
// ========================================


// 1. MENU DE NAVEGAÇÃO

const headerContainer = document.getElementById("site-header");

const pages = [
    { name: "Início", url: "index.html" },
    { name: "Sobre", url: "sobre.html" },
    { name: "Habilidades", url: "habilidades.html" },
    { name: "Projetos", url: "projetos.html" },
    { name: "Serviços", url: "servicos.html" },
    { name: "Contato", url: "contato.html" }
];

const currentPage =
    location.pathname.split("/").pop() || "index.html";

if (headerContainer) {

    headerContainer.innerHTML = `
        <header class="header">
            <nav class="navbar container">

                <a href="index.html" class="logo">
                    <span class="logo-mark">AL</span>
                    <span>Assis Leite<span class="blue">.</span></span>
                </a>

                <ul class="nav-links" id="navLinks">

                    ${pages.map(page => `
                        <li>
                            <a href="${page.url}"
                               class="${currentPage === page.url ? "active" : ""}">
                                ${page.name}
                            </a>
                        </li>
                    `).join("")}

                </ul>

                <div class="nav-actions">

                    <button id="themeToggle"
                        class="theme-btn"
                        aria-label="Alternar tema">
                        ☾
                    </button>

                    <button id="menuToggle"
                        class="menu-btn"
                        aria-label="Abrir menu"
                        aria-expanded="false">
                        ☰
                    </button>

                </div>

            </nav>
        </header>
    `;

}


// 2. RODAPÉ AUTOMÁTICO

const footerContainer = document.getElementById("site-footer");

if (footerContainer) {

    footerContainer.innerHTML = `
        <footer class="footer">

            <div class="container footer-content">

                <p>
                    © ${new Date().getFullYear()}
                    Assis Leite. Todos os direitos reservados.
                </p>

                <a href="index.html">
                    Voltar ao início ↑
                </a>

            </div>

        </footer>
    `;

}


// 3. MENU PARA CELULAR

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("open");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

    });

    document.querySelectorAll(".nav-links a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("open");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// 4. MODO ESCURO E CLARO

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("assis-theme");

if (savedTheme === "light") {

    document.documentElement.setAttribute(
        "data-theme",
        "light"
    );

}


function updateThemeIcon() {

    const currentTheme =
        document.documentElement.getAttribute("data-theme");

    if (themeToggle) {

        themeToggle.textContent =
            currentTheme === "light" ? "☀" : "☾";

    }

}


updateThemeIcon();


if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        const currentTheme =
            document.documentElement.getAttribute("data-theme");

        const newTheme =
            currentTheme === "light" ? "dark" : "light";

        if (newTheme === "dark") {

            document.documentElement.removeAttribute("data-theme");

        } else {

            document.documentElement.setAttribute(
                "data-theme",
                "light"
            );

        }

        localStorage.setItem("assis-theme", newTheme);

        updateThemeIcon();

    });

}


// 5. ANIMAÇÕES AO ROLAR A PÁGINA

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(element => {

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add("active");

    });

}


// 6. ANO AUTOMÁTICO DO RODAPÉ

console.log("Portfólio Assis Leite carregado com sucesso!");
