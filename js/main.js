var swiper = new Swiper(".slide-characters", {
  slidesPerView: 3.2,
  spaceBetween: 19,
  freeMode: true,
  breakpoints: {
    320: {
      slidesPerView: 1.1,
    },
    768: {
      slidesPerView: 2.2,
    },
    991: {
      slidesPerView: 2.8,
    },
  },
});

AOS.init({
  duration: 1000,
  once: true,
});
