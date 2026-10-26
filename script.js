// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

function setMenu(open) {
    if (!menuToggle || !navMenu) return;
    navMenu.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", String(open));
}

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        setMenu(!navMenu.classList.contains("active"));
    });

    // Close after clicking a link
    navMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => setMenu(false));
    });

    // Close with Escape key
    document.addEventListener("keydown", e => {
        if (e.key === "Escape") setMenu(false);
    });

    // Close when tapping outside the menu
    document.addEventListener("click", e => {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
            setMenu(false);
        }
    });

    // Reset when resizing back to desktop
    window.addEventListener("resize", () => {
        if (window.innerWidth > 950) setMenu(false);
    });
}

console.log("Mahadevan S Portfolio Loaded");
