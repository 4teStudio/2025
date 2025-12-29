// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#artikel-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const artikel = document.querySelector("#artikel-menu");

document.addEventListener("click", function (e) {
  if (!artikel.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
