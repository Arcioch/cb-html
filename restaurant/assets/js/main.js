let arrowUp = document.getElementById('arrow-up');
let navigation = document.getElementsByTagName('nav')[0];



window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        arrowUp.classList.add('show');
        navigation.classList.add('white');
    } else {
        arrowUp.classList.remove('show');
        navigation.classList.remove('white');
    }
})

arrowUp.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})