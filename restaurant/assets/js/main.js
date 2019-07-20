let arrowUp = document.getElementById('arrow-up');

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 0) {
        arrowUp.classList.add('show')
    } else {
        arrowUp.classList.remove('show');
    }
})

arrowUp.addEventListener('click', scrollToTop);


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}