jQuery(document).ready
(function($) {

$('.custom1').owlCarousel({
animateOut: 'slideOutDown',
animateIn: 'flipInX',
items: 1,
margin: 30,
stagePadding: 30,
loop: true,
smartSpeed: 50000,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
dots: false
});

});


jQuery(document).ready
(function($) {

$('.custom2').owlCarousel({
animateOut: 'zoomOut',
animateIn: 'slideInDown',
items: 1,
margin: 30,
stagePadding: 30,
loop: true,
dots: false,
smartSpeed: 50000,
autoplay: true,
autoplayTimeout: 5000,
autoplayHoverPause: true,
autoHeight:true
});

});


jQuery(document).ready
(function($) {

$('.custom3').owlCarousel({

nav: false,
loop: true,
margin: 10,
dots: false,
autoplay: true,
autoplaySpeed: 5200,
autoplayTimeout: 5200,
autoplayHoverPause: false,
slideTransition: 'linear',
responsive: {
0: {
items: 1
},
576: {
items: 2
},
768: {
items: 3
},
992: {
items:6
}
}

});

});




jQuery(document).ready(function($) {
    $('.loop').owlCarousel({
    center: true,
    items: 3,
    loop: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    margin:3,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:3,
        },
        1000:{
            items:3,
        }
    }
    });
    
    });



jQuery(document).ready
(function($) {

$('.skillproduct').owlCarousel({
animateOut: 'slideOutDown',
animateIn: 'flipInX',
items: 1,
margin: 30,
stagePadding: 30,
loop: true,
smartSpeed: 50000,
autoplay: true,
autoplayTimeout: 3000,
autoplayHoverPause: true,
dots: false
});

});



  