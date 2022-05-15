"use strict";
// menun burger
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".navigation-nav");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
  });
}
