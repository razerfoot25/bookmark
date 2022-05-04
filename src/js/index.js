const menuIcon = document.querySelector(".navigation__menu-icon");
const logo = document.querySelector(".navigation__logo");
const nav = document.querySelector(".navigation__menu-container");
const menuCheck = document.querySelector("#hamburger");

menuCheck.addEventListener("change", (e) => {
  if (e.target.checked) {
    menuIcon.classList.add("icon-open");
    logo.classList.add("logo-open");
    nav.style.display = "flex";
  } else {
    menuIcon.classList.remove("icon-open");
    logo.classList.remove("logo-open");
    nav.classList.remove("nav-open");
    nav.style.display = "none";
  }
});
