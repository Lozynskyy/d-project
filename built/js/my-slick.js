if(document.documentElement.clientWidth > 1440){
    $('.team__slider__body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: "<img src='../img/interface---arrow-right-b.png'>",
        prevArrow: "<img src='../img/interface---arrow-left-b.png'>"
    });
} else if(document.documentElement.clientWidth <= 1440) {
    $('.team__slider__body').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: "<img src='../img/interface---arrow-right-b.png'>",
        prevArrow: "<img src='../img/interface---arrow-left-b.png'>"
    });
}