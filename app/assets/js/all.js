$(function() {
  console.log('Hello Bootstrap5');

  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4,
    slidesPerView: 'auto',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768:{
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
  });
});


