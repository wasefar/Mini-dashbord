$(document).ready(function(){

// 	// static menu

//     $(window).scroll(function () {

//     if ($(document).scrollTop() > 50) {
//         $(".top_header_area").addClass("sticky");
//     } else {
//         $(".top_header_area").removeClass("sticky");
//     }

// });

    // event slider

    $('.owl-carousel.data-page').owlCarousel({
        loop: true,
        margin: 5,
        nav: true,
         navText: ["<img src='image/left-arrow.png'>","<img src='image/right-arrow.png'>"],
        autoplay: false,
        //animateOut: 'zoomOutDown',
        // animateIn: 'zoomIn',
        smartSpeed: 450,
        autoplayTimeout: 4000,
        autoplayHoverPause: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })


    // menu overlay

    $('.bars').click(function () {

        $('.overlay_mobile_menu').addClass('animated fadeInLeft faster').show();
    });


    $('.cross_nav').click(function () {

        $('.overlay_mobile_menu').removeClass('animated zoomIn slow').hide();
    });


    // fade effect div

    AOS.init({
        duration: 1000
    });

// end fade effect div 


});