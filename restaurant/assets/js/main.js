window.addEventListener('DOMContentLoaded', function () {


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

    let headers = document.querySelectorAll('.panel .header');
    for (let i = 0; i < headers.length; i++) {
        headers[i].addEventListener('click', function () {
            let description = this.nextElementSibling;
            //description.classList.toggle('active');
            if (description.style.maxHeight) {
                description.style.maxHeight = null;
            } else {
                description.style.maxHeight = description.scrollHeight + 'px';
            }
        })
    }
    let hamburger = document.getElementById('hamburger')
    hamburger.addEventListener('click', function () {
        this.classList.toggle('active');
        document.body.classList.toggle('menu-open')
    })

})
