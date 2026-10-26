const toggle = document.getElementById("toggle");
  const menu = document.getElementById("menu");
  function setMenu(open){
    menu.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
  }
  toggle.addEventListener("click", () => setMenu(!menu.classList.contains("open")));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => setMenu(false)));
  window.addEventListener("resize", () => { if (window.innerWidth > 760) setMenu(false); });
