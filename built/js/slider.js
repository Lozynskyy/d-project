$(document).ready(function(){
    $('.works__slider__next').click(function() {
        var currentImage = $('.works__slider__item.current');
        var currentIndicator = $('.works__slider__indicators__item.current');
        var currentImageIndex = $('.works__slider__item.current').index();
        var currentIndicatorIndex = $('.works__slider__indicators__item.current').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextIndicatorIndex = currentIndicatorIndex + 1;
        var nextImage = $('.works__slider__item').eq(nextImageIndex);
        var nextIndicator = $('.works__slider__indicators__item').eq(nextIndicatorIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        currentIndicator.removeClass('current');

        if(nextImageIndex == ($('.works__slider__item:last').index() + 1)){
            $('.works__slider__item').eq(0).fadeIn(1000);
            $('.works__slider__item').eq(0).addClass('current');
            $('.works__slider__indicators__item').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
            nextIndicator.addClass('current');
        }
    });

    $('.works__slider__prev').click(function() {
        var currentImage = $('.works__slider__item.current');
        var currentIndicator = $('.works__slider__indicators__item.current');
        var currentImageIndex = $('.works__slider__item.current').index();
        var currentIndicatorIndex = $('.works__slider__indicators__item.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevIndicatorIndex = currentIndicatorIndex - 1;
        var prevImage = $('.works__slider__item').eq(prevImageIndex);
        var prevIndicator = $('.works__slider__indicators__item').eq(prevIndicatorIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        currentIndicator.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
        prevIndicator.addClass('current');

    });
});