// let btn = document.querySelector('.scrollDown')
// let toLearn = document.querySelector('.toLearn');

// btn.addEventListener('click', function () {

//     toLearn.scrollIntoView(false);
// })

jQuery(function ($) {
    $.scrollTo(0);

    $('.scrollUp').click(function () {
        $.scrollTo($('body'), 1000);
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) $('.scrollUp').fadeIn();
        else $('.scrollUp').fadeOut();
    });

    $('.scrollDown').click(function () {
        $.scrollTo((917), 1000);
    });
});