(function ($) {
    
// Hamburger-menu
    $('.hamburger-menu').on('click', function () {
        $('.hamburger-menu .line-top, .ofcavas-menu').toggleClass('current');
        $('.hamburger-menu .line-center').toggleClass('current');
        $('.hamburger-menu .line-bottom').toggleClass('current');
    });


// Sticky-menu
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 137) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();

// Owl-Carousel
        function client_carouselInit() {
        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 30,
            items: 3,
            autoplay: true,
            autoplayTimeout: 1500,
            autoplayHoverPause: true,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                390: {
                    items: 1
                },
                575:{
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });
    }
    client_carouselInit();
})(jQuery);