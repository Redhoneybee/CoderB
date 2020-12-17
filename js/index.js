const animateScollTo = (selector, duration) => {
    duration = duration || 1000;
    const target = document.querySelector(selector);
    if (!target) return;

    const e = document.documentElement;
    const current_y = e.scrollTop;
    const target_y = target.getBoundingClientRect().top + current_y;
    animateScroll(current_y, target_y, duration);
    function animateScroll(start, end, duration) {
        const unit = (target_y - current_y) / duration;
        const startTime = new Date().getTime();
        const endTime = new Date().getTime() + duration;

        const scrollTo = () => {
            let now = new Date().getTime();
            let passed = now - startTime;

            if (now <= endTime) {
                e.scrollTop = current_y + (unit * passed);
                requestAnimationFrame(scrollTo);
            }
        }
        requestAnimationFrame(scrollTo);
    }
}

(function () {
    "use strict";

    let isMoblie = false;

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMoblie = true;
    }

    // screen init
    animateScollTo(`#header-container`, 200);
    const know = document.querySelector('.know');
    const nav = document.querySelector('nav');


    if (isMoblie) {
        nav.classList.add('fixed');
    } else {
        nav.classList.add('pc')
    }



    window.addEventListener('scroll', () => {
        const currentY_pos = document.documentElement.scrollTop;

        const main_1_pos = document.querySelector('#main-1-container').scrollHeight;

        if (currentY_pos > main_1_pos - 300) {
            if (!isMoblie) {
                nav.classList.add('fixed');
            }
            document.querySelector('#greeting').classList.add('itemDown');
        }
    });

    document.querySelector('#main-1-container').addEventListener('scroll', (e) => {
        const currentX_pos = e.target.scrollLeft;
        const technic = document.querySelector('#graph').scrollWidth;

        if (currentX_pos > technic - 400) {
            document.querySelector('#growth').classList.add('slideRight');
            document.querySelector('#technic').classList.add('slideLeft');
        }
    });

    know.addEventListener('click', (e) => {
        const dest = e.target.getAttribute('data-dest');
        animateScollTo(`#${dest}`, 200);
    });



    const menubtn = document.querySelector('.fa-align-justify');

    menubtn.addEventListener('click', () => {
        const content = document.querySelector('.nav-content');
        content.classList.toggle('visible');
    });

    const destLinkBtns = document.querySelectorAll('.dest-link');

    destLinkBtns.forEach(e => {
        const dest = e.getAttribute('data-dest');
        e.addEventListener('click', (e) => {
            animateScollTo(`#${dest}`, 400);
            destLinkBtns.forEach(e => {
                e.classList.remove('active');
            });
            e.target.classList.add('active');
        });
    });
})();