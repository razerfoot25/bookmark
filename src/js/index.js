const menuIcon = document.querySelector(".navigation__menu-icon");
const logo = document.querySelector(".navigation__logo");
const nav = document.querySelector(".navigation__menu-container");
const menuCheck = document.querySelector("#hamburger");
const featuresTabMenu = document.querySelector(".features__tab--menu");

const radioButtons = document.querySelectorAll(".FeatureTabradio");

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

document.querySelector("[data-id='0']").style.display = "grid";
const enableTab = (radioBtn, i) => {
  if (radioBtn.checked) {
    document.querySelector("[data-id='" + i + "']").style.display = "grid";
  } else {
    document.querySelector("[data-id='" + i + "']").style.display = "none";
  }
};

featuresTabMenu.addEventListener("click", (e) => {
  radioButtons.forEach(enableTab);
});
