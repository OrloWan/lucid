var menuBtn = document.querySelector('#nav-btn');
var menu = document.querySelector('.top-nav');
var link = document.querySelectorAll('.top-nav__item');
var body = document.querySelector('body');

menuBtn.onclick = function() {
	
	menu.classList.toggle('active');
	menuBtn.classList.toggle('active');

	body.classList.toggle('fixed');

}

for (i = 0; i < link.length; i++) {
	link[i].onclick = function() {
		menu.classList.toggle('active');
		menuBtn.classList.toggle('active');

		if(body.classList.contains('fixed')){
			body.classList.remove('fixed')
		}
	}
}



// Progress bar

var progress = document.querySelector('.progress')

window.addEventListener('scroll', progressBar);

function progressBar(e) {
	var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
	var windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
	var per = windowScroll / windowHeight * 100

	progress.style.width = per + '%'
}