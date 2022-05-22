"use strict";
// menun burger
const iconMenu = document.querySelector(".menu-icon");
const menuBody = document.querySelector(".navigation-nav");
if (iconMenu) {
  iconMenu.addEventListener("click", function () {
    document.body.classList.toggle("_lock");
    iconMenu.classList.toggle("_active");
    menuBody.classList.toggle("_active");
    console.log(iconMenu, menuBody);
  });
  console.log(iconMenu, menuBody);
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

  /* And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },*/

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 90,
    },
  },
});

//Popup menu

const popupMenu = document.querySelector(".popup-link");

if (popupMenu) {
  popupMenu.addEventListener("onclick", function () {
    popupMenu.classList.toggle("hi");
    console.log(popupMenu);
  });
  console.log(popupMenu);
}
