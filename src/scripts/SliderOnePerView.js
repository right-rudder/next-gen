import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".one-per-slide", {
    effect: "fade",
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 2700,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
