var lazyLoadInstance = new LazyLoad({});

new WOW().init();

// $(".scroll-up").click(function() {
// 	$('html, body').animate({
// 		scrollTop: 0
// 	}, 800);
// 	return false;
// });

$(".anchor-link").click(function (e) {
    var data_scroll = $($(this).data("scroll"));
    $("html, body").animate({ scrollTop: data_scroll.offset().top }, "slow", "swing", function () { });
    return false;
});


// banner
$('.owl-carousel.banner').owlCarousel({
    loop: true,
    center: true,
    slideTransition: 'ease',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    autoplayHoverPause: false,
    items: 1,
    margin: 0,
    dots: true
});

// opinions
$('.owl-carousel.opinions').owlCarousel({
    loop: true,
    slideTransition: 'ease',
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1500,
    autoplayHoverPause: false,
    items: 3,
    margin: 50,
    dots: false,
    nav: true,
    responsive: {
        0: {
            items: 1,
            margin: 50,
        },
        640: {
            items: 2,
            margin: 20,
        },
        1200: {
            items: 3,
            margin: 50,
        }
    }
});

// rooms-1
$('.slider-big-1').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: true,
    asNavFor: '.slider-small-1'
});
$('.slider-small-1').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big-1',
    swipe: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

// rooms-2
$('.slider-big-2').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: true,
    asNavFor: '.slider-small-2'
});
$('.slider-small-2').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big-2',
    swipe: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

// rooms-3
$('.slider-big-3').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    swipe: true,
    fade: true,
    asNavFor: '.slider-small-3'
});
$('.slider-small-3').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-big-3',
    swipe: true,
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }
    ]
});

function mobileMenu(clicked) {

    const anchor = document.getElementById('nav-icon3')
    if (anchor.classList.contains('open')) {
        anchor.classList.remove('open')
        closeMenu();
    }
    else {
        anchor.classList.add('open')
        openMenu()
    }
}

function openMenu() {
    const menu = document.getElementById('mobile-menu')

    menu.classList.add('display')
    setTimeout(() => {
        menu.classList.add('show')
    }, 50)
}

function closeMenu() {
    const menu = document.getElementById('mobile-menu')

    menu.classList.remove('show')
    setTimeout(() => {
        menu.classList.remove('display')
    }, 300)
}