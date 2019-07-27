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


//ususniecie kręciołka jak się załaduje strona
window.addEventListener('load', function () {
    let loader = document.getElementsByClassName('loader')[0];
    setTimeout(function () {
        loader.classList.add('none');
    }, 100)
})


//przyklejenie navigacji po scrollu
let navigation = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        navigation.classList.add('fixed')
    } else {
        navigation.classList.remove('fixed')
    }
})