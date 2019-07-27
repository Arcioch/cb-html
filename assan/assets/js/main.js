let slider = tns({
    container: '.slider',
    items: 1,
    autoplay: true,
    autoplayButtonOutput: false,
    mouseDrag: true,
    mode: 'gallery',
    controlsPosition: 'bottom',
    navPosition: 'bottom',
    controlsText: ['&#60;', '&#62;']
});

//inicjacja animation on scroll 
AOS.init();

//inicjacja dla pralax
let paralaxImages = document.getElementsByClassName('paralax');
new simpleParallax(paralaxImages);
