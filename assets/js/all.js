"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

$(function () {
  var _Swiper;

  console.log('Hello Bootstrap5');
  var swiper = new Swiper(".mySwiper", (_Swiper = {
    slidesPerView: 4
  }, _defineProperty(_Swiper, "slidesPerView", 'auto'), _defineProperty(_Swiper, "spaceBetween", 30), _defineProperty(_Swiper, "pagination", {
    el: ".swiper-pagination",
    clickable: true
  }), _defineProperty(_Swiper, "breakpoints", {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }), _Swiper));
});
//# sourceMappingURL=all.js.map
