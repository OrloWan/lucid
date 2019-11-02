// MENU

var menuBtn = document.querySelector('#nav-btn');
var menu = document.querySelector('.top-nav');
var link = document.querySelectorAll('.top-nav__item')

menuBtn.onclick = function() {

	menu.classList.toggle('active');
	menuBtn.classList.toggle('active')

}

menu.onclick = function() {

	menu.classList.toggle('active');
	menuBtn.classList.toggle('active')

}

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

// Progress bar

var progress = document.querySelector('.progress')

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
	var per = windowScroll / windowHeight * 100

	progress.style.width = per + '%'
}