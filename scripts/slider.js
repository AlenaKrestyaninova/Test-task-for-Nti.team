let leadSlider;
function initSlider () {
  leadSlider = new Swiper(".lead__swiper", {
      slidesPerView: "auto",
      // mousewheel: true,
      // keyboard: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
}

initSlider();
