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

});
