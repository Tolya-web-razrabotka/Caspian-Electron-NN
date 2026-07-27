$(document).ready(function() {
    $('.reasonsCards').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        swipeToSlide: true,
        variableWidth: false,
        arrows: true,
        infinite: false,          
        speed: 750,
        fade: false,
        easing: 'easeInOutQuart',
        prevArrow: $('.leftArrow'),
        nextArrow: $('.rightArrow'),
        
        pauseOnHover: true,
        pauseOnFocus: true,
        touchThreshold: 10,
        waitForAnimate: false,
        adaptiveHeight: true,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            }
        ]
    });
});