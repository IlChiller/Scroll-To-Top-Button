(function() {
    'use-strict'

    // This function see if the page is scrolled
    function checkScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            goTopBtn.classList.add('up_show');
        }
        if (scrolled < coords) {
            goTopBtn.classList.remove('up_show');
        }
    }

    // This function when you click the button makes you go up
    function downToUp() {
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -80);
            setTimeout(downToUp, 0);
        }
    }

    let goTopBtn = document.querySelector(".down_to_up");

    window.addEventListener('scroll', checkScroll);
    goTopBtn.addEventListener('click', downToUp);
})();