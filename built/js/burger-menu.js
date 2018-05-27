$(function(){

    $('.header__menu__toggle').on('click', function() {
        $('.header__menu__list').slideToggle(300, function(){
            if( $(this).css('display') === "none"){
                $(this).removeAttr('style');
            }
        });

    });

});