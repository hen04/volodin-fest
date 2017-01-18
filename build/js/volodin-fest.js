$(function(){

	$('.partners-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3
	});

	$('.news-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 3,
		variableWidth: true,
		dots: true
	});

	$('.news-slider__item').each(function(){
		var $width = $(this).data('width');
		$(this).css('width', $width);
	});
});
