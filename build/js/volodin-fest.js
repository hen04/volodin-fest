$(function(){

	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		dots: true
	});

	$('.partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.news-slider__item').each(function(){
		var $width = $(this).data('width');
		var $top = $(this).data('top');
		$(this)
			.css('width', $width)
			.css('margin-top', $top);
	});

	$('.programm__item').each(function() {
		var $minus = $(this).data('minus');
		$(this).css('margin-top', -$minus);
	});

	var showmenu = $('.menu-volodin-second');
	$('.menu-volodin').on('click', function() {
		if (showmenu.hasClass('show')) {
			$(this).removeClass('active')
			$(showmenu).removeClass('show');
		} else {
			$(this).addClass('active');
			$(showmenu).addClass('show');
		}
	});


	var secondmenu = $('.menu-item-has-children');
	$(secondmenu).on('click', function(e) {
		e.preventDefault();
		if ($(this).hasClass('active')) {
			$('.menu-item-has-children').removeClass('active');
			$('.menu-top-second').removeClass('show');
		} else {
			$('.menu-item-has-children').removeClass('active');
			$('.menu-top-second').removeClass('show');
			$(this).addClass('active');
			$(this).children('.menu-top-second').addClass('show');
		}
	});

});
