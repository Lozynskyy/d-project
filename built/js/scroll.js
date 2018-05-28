var $page = $('html, body');

$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});

$('.top-arrow').click(function() {
    $page.animate({scrollTop: 0},500);
    return false;
});