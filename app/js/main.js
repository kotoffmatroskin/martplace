$(function () {

  $(".rate-star").rateYo({
    rating: 4.5,
    starWidth: "15px",
    spacing: "3px",
    ratedFill: "#ffc000",
    normalFill: "#ffffff",
    readOnly: true
  });

  $('.weekly-product__inner').slick({
    arrows: true,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/products/prev.png" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/products/next.png" alt=""></button>'

  });

  $('.digital-product__select').on('click', function () {
    $('.digital-product__select').toggleClass('active');
  });


  var mixer = mixitup('.release-products__inner-box');

})