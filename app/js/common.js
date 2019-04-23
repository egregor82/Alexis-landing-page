$(function () {
// Easing and active link block start
	$('.scroll').on('click', function () {
		let el = $(this).attr("href");

		if (el !== undefined && el !== '') {
			$('html, body').animate({
				scrollTop: $(el).offset().top
			}, 1500, 'easeInOutQuint');
		}
		return false;
	});
// Easing and active link block end
// Modal-video block start
	$(".js-modal-btn").modalVideo({
		youtube: {
			nocookie: true,
			autoplay: 1,
			start: 15,
		}
	});
// Modal-video block end
// Light block start
	lightbox.option({
		'resizeDuration': 500,
		'wrapAround': true,
		'showImageNumberLabel': false
	})
// Light block end
//Portfolio img hover block start
	$('.img-block').on('mouseover', function(){
		$(this).addClass('shadow-block');
		let $info = $(this).children().attr('data-title');
		$('.appear-block-info-p').text($info);
	})
	$('.img-block').on('mouseleave', function(){
		$(this).removeClass('shadow-block');
	})
//Portfolio img hover block end
//Team tabs block start
$('div.our-team-wrapper').on('click', 'div:not(.active)', function() {
	$(this)
	.addClass('active').siblings().removeClass('active')
	.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active')
	.find('div.triangle').removeClass('active').eq($(this).index()).addClass('active');
	});
$('.team-member-wrapper').on('click', function(){
	
})
//Team tabs block start
//Parallax start
$('.our-progress').parallax({imageSrc: 'img/our-progress/bg.png'});
//Parallax end
//Slick slider start
$('.slick-slider').slick({
	arrows: false,
	dots: true,
	slidesToShow: 1,
  	slidesToScroll: 1,
});
//Slick slider end
//Burger start
$('#menu-btn').on('click', function(e) {
	e.preventDefault();
	$(this).toggleClass('active');
	$('.header-links-block').toggleClass('display-menu');
	$('.burger').toggleClass('slim');
})

$('.menu-link').on('click', function(){
	$(this).addClass('active').siblings().removeClass('active');
	$('.header-links-block').toggleClass('display-menu');
	$('#menu-btn').toggleClass('active');
	$('.burger').toggleClass('slim');
})
//Burger end
});

//Handlebars template start
var context = {portfolio:[
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project One',
		srcpath: 'http://lokeshdhakar.com/projects/lightbox2/images/thumb-4.jpg'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Two',
		srcpath: 'img/Portfolio/item 2.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Three',
		srcpath: 'img/Portfolio/item 3.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Four',
		srcpath: 'img/Portfolio/item 4.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Five',
		srcpath: 'img/Portfolio/item 5.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Six',
		srcpath: 'img/Portfolio/item 6.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Seven',
		srcpath: 'img/Portfolio/item 7.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Eight',
		srcpath: 'img/Portfolio/item 8.png'
	},
	{
		path: 'http://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg',
		'data-title': 'Project Nine',
		srcpath: 'img/Portfolio/item 9.png'
	},
]
};

var sourcePortfolio   = document.getElementById("Handle-template-portfolio").innerHTML;
var templatePortfolio = Handlebars.compile(sourcePortfolio);
var html_1   = templatePortfolio(context);
const displayPortfolio = document.getElementById('portfolio-img-wrapper');
displayPortfolio.innerHTML = html_1;
//Handlebars template end