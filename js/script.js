$(document).ready(function () {
    /* меню ***********************************/

    $(".menu_mob_btn").click(function () {
        $(this).toggleClass("active");
        $(".menu").toggleClass("active");
    });

    $(".menu a").click(function () {
        $(".menu").toggleClass("active");
    });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 100){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });

    $('.gallery1').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });

    $('.gallery2').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    enterMode: false,
                    variableWidth: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: false,
                    variableWidth: false,
                }
            },
        ]
    });
})