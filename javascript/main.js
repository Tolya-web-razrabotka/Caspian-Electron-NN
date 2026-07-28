$(document).ready(function() {
    $('.mainSlider').slick({
        autoplay: true,             
        autoplaySpeed: 1500,        
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true, 
        swipeToSlide: true,
        arrows: false,
        infinite: true,
        speed: 750,
        fade: true,
        easing: 'easeInOutQuart',
    });


    // === ОСТАЛЬНЫЕ СЛАЙДЕРЫ ===
    // СЛАЙДЕР "6 ПРИЧИН" 
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

    // СЛАЙДЕР "НАШИ ПАРТНЕРЫ"
    $('.ourPartnersCards').slick({
        autoplay: false,
        autoplaySpeed: 3500,
        slidesToShow: 5,
        slidesToScroll: 5,
        dots: false,
        swipeToSlide: false,
        variableWidth: false,
        arrows: true,
        infinite: false,
        speed: 750,
        fade: false,
        easing: 'easeInOutQuart',
        prevArrow: $('.partnersPrevArrow'),
        nextArrow: $('.partnersNextArrow'),
        
        pauseOnHover: true,
        pauseOnFocus: true,
        touchThreshold: 10,
        waitForAnimate: false,
        adaptiveHeight: true,
        
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                    swipeToSlide: true
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                    swipeToSlide: true
                }
            }
        ]
    });

    // СЛАЙДЕР "РАЗЪЕДИНИТЕЛИ"
    $('.disconnectersCards').slick({
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
        prevArrow: $('.disconnectersPrevArrow'),
        nextArrow: $('.disconnectersNextArrow'),
        
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
                    arrows: false,
                    swipeToSlide: true
                }
            }
        ]
    });
});