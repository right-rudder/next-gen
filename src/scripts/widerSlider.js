import Swiper from "swiper";
import "swiper/css";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".creativeSwiper", {
    watchSlidesProgress: true,
    slidesPerView: 3,
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    modules: [Navigation, Pagination, Autoplay],
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    pagination: {
      el: ".slider-four-slide-pagination-1",
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    breakpoints: {
      1200: {
        slidesPerView: 3,
      },
      992: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      576: {
        slidesPerView: 1,
      },
    },
    effect: "slide",
  });
});
