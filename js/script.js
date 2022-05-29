"use strict";
//*******menun burger***********
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

//**********Swiper*************
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

//*********Popup menu************

const popupMenu = document.querySelectorAll(".popup-link");
//oppening popup menu

if (popupMenu) {
  popupMenu.forEach((el) => {
    el.addEventListener("click", function (e) {
      const popupName = el.getAttribute("href").replace("#", "");
      const curentPopup = document.getElementById(popupName);
      popupOpen(curentPopup);
      e.preventDefault();
    });
  });
}
// function oppening popup menu
function popupOpen(curentPopup) {
  if (curentPopup) {
    curentPopup.classList.toggle("_active");
    document.body.classList.toggle("_lock");
  }
}
//  function closening popup menu
function popupClose(curentPopup) {
  if (curentPopup) {
    curentPopup.classList.remove("_active");
    document.body.classList.remove("_lock");
  }
}
// closening popup menu on click button on menu
const popupCloseActive = document.querySelectorAll(".popup_close");
if (popupCloseActive) {
  popupCloseActive.forEach((el) => {
    el.addEventListener("click", function (e) {
      const popupLinkActive = document.querySelector(".popup._active");
      popupClose(popupLinkActive);
      e.preventDefault();
    });
  });
}
// closening popup menu on click button "esc"
if (popupCloseActive.length > 0) {
  document.addEventListener("keydown", function (el) {
    if (el.which === 27) {
      const popupActive = document.querySelector(".popup._active");
      popupClose(popupActive);
      console.log(popupCloseActive);
    }
  });
}
