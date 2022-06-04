$(document).ready(function(){


	// meanmenu active

	$("#mobile-menu").meanmenu({
		meanMenuContainer:'.mobile-menu',
		meanScreenWidth:'767'
	});

	// slider-active
	$('.slider-active').slick({
		dots: false,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 950,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	// blog-active
	
	$('.blog-active').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 778,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

	// testimonial-active

	$('.testimonial-active').slick({
		dots: true,
		infinite: false,
		arrows: false,
		speed: 300,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 3,
				infinite: true,
				dots: true
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}
		]
	});

// testimonial-active 2

 $('.testimonial-item-active').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.testimonial-nav'
});
$('.testimonial-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.testimonial-item-active',
  dots: false,
  prevArrow:'<button type="button" class="slick-prev"><i class="fa fa-chevron-left"></i></button>',
  nextArrow:'<button type="button" class="slick-next"><i class="fa fa-chevron-right"></i></button>',
  centerMode: true,
  focusOnSelect: true,
  centerPadding:0,
});

// brand active

$('.brand-active').slick({
	dots: false,
	infinite: false,
	arrows: false,
	speed: 300,
	slidesToShow: 5,
	slidesToScroll: 2,
	responsive: [
	{
		breakpoint: 1024,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 3,
			infinite: true,
			dots: true
		}
	},
	{
		breakpoint: 991,
		settings: {
			slidesToShow: 5,
			slidesToScroll: 2
		}
	},
	{
		breakpoint: 480,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1
		}
	}
	]
});

// counterUp active

$('.count').counterUp({
	delay: 20,
	time: 3000
});

// masonry

var grid =$('.grid').isotope({
	itemSelector: '.grid-item',
	percentPosition: true,
	masonry:{
		columnWidth:'.grid-item'
	}
});

// isotop
$('.portfolio-filter').on('click','li',function(){
	var filterValue = $ (this).attr('data-filter');
	grid.isotope({filter : filterValue});
})

// magnific- active

$('.image-popup').magnificPopup({
	type: 'image',
	gallery:{
		enabled:true
	}
});



// niceSelect

$('select').niceSelect();






});
