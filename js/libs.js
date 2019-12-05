// SLIDER

$('.testimonials-slider').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dots: true,
	responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
  ]
});