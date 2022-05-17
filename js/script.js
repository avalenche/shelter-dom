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

//scroll by click

const menuLinks = document.querySelectorAll(".menu_link[data-goto]");
if (menuLinks.length > 0) {
  menuLinks.forEach((menuLink) => {
    menuLink.addEventListener("click", onMenuLinkClick);
  });
  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (
      menuLink.dataset.goto &&
      document.querySelector(menuLink.dataset.goto)
    ) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        pageYOffset -
        document.querySelector(".navigation").offsetHeight;

      if (iconMenu.classList.contains("_active")) {
        iconMenu.classList.remove("_active");
        document.body.classList.remove("_lock");
        menuBody.classList.remove("_active");
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
      e.preventDefault();
    }
  }
}

//Swiper
const swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  spaceBetween: 90,

  // Optional parameters
  /*direction: "horizontal",
  loop: true,
*/
  /*// If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },*/

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
});
