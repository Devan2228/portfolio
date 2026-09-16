// ==============================
// MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// Close mobile menu after clicking a link

const navLinks = document.querySelectorAll("#nav-menu a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// ==============================
// CURRENT YEAR
// ==============================

console.log("Mahadevan S Portfolio Loaded");