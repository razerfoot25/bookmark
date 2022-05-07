const menuIcon = document.querySelector(".navigation__menu-icon");
const logo = document.querySelector(".navigation__logo");
const nav = document.querySelector(".navigation__menu-container");
const featuresTabMenu = document.querySelector(".features__tab--menu");
const radioButtons = document.querySelectorAll(".FeatureTabradio");
const accordion = document.querySelectorAll(".faq__accordion-items--btn");

document.body.style.overflowX = "hidden";

const navOpen = () => {
  menuIcon.classList.toggle("icon-open");
  logo.classList.toggle("logo-open");
  nav.classList.toggle("nav-open");
  if (nav.classList.contains("nav-open")) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "scroll";
  }
};

menuIcon.addEventListener("click", (e) => {
  navOpen();
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

const openAccordion = (acc, i) => {
  acc.addEventListener("click", (e) => {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
};

accordion.forEach(openAccordion);
