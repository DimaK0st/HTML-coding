$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        items: 5,
        autoPlay: 3000,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });
});


$(document).ready(function() {
    $('.owl-carousel1').owlCarousel({
        items: 1,
        autoPlay: 30000,
        itemsDesktop : true,
        itemsDesktopSmall : true,
        itemsTablet: true,
        itemsMobile : true,
        navigation: true,
        navigationText: [
            "<i class='fa fa-chevron-left'></i>",
            "<i class='fa fa-chevron-right'></i>"
        ]
    });
});