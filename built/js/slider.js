$(document).ready(function(){
    $('.next').click(function() {
        var currentImage = $('.slider__item.current');
        var currentIndicator = $('.indicators__item.current');
        var currentImageIndex = $('.slider__item.current').index();
        var currentIndicatorIndex = $('.indicators__item.current').index();
        var nextImageIndex = currentImageIndex + 1;
        var nextIndicatorIndex = currentIndicatorIndex + 1;
        var nextImage = $('.slider__item').eq(nextImageIndex);
        var nextIndicator = $('.indicators__item').eq(nextIndicatorIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        currentIndicator.removeClass('current');

        if(nextImageIndex == ($('.slider__item:last').index() + 1)){
            $('.slider__item').eq(0).fadeIn(1000);
            $('.slider__item').eq(0).addClass('current');
            $('.indicators__item').eq(0).addClass('current');
        } else {
            nextImage.fadeIn(1000);
            nextImage.addClass('current');
            nextIndicator.addClass('current');
        }
    });

    $('.prev').click(function() {
        var currentImage = $('.slider__item.current');
        var currentIndicator = $('.indicators__item.current');
        var currentImageIndex = $('.slider__item.current').index();
        var currentIndicatorIndex = $('.indicators__item.current').index();
        var prevImageIndex = currentImageIndex - 1;
        var prevIndicatorIndex = currentIndicatorIndex - 1;
        var prevImage = $('.slider__item').eq(prevImageIndex);
        var prevIndicator = $('.indicators__item').eq(prevIndicatorIndex);
        currentImage.fadeOut(1000);
        currentImage.removeClass('current');
        currentIndicator.removeClass('current');
        prevImage.fadeIn(1000);
        prevImage.addClass('current');
        prevIndicator.addClass('current');

    });
});