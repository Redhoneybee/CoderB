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

    // checking the moblie
    function checkedMoblie() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return true;
        return false;
    }

    // main-1-container slider
    function setSlider() {
        const sliderLBtn = document.querySelector('.slider-btn-left');
        const sliderRBtn = document.querySelector('.slider-btn-right');
        const slider_items = document.querySelectorAll('.slider-item');
        const slider = document.querySelector('.slider-list');
        const sliderLen = document.querySelectorAll('.slider-item').length;
        const windowXsize = window.innerWidth;
        let page = 0;
        slider_items.forEach(item => {
            item.style.width = windowXsize + 'px';
        });
        slider.style.width = windowXsize * sliderLen + 'px';

        sliderLBtn.addEventListener('click', () => {
            slider.style.transition = '.5s';
            if (page === 0) {
                page = sliderLen - 1;
            } else {
                --page;
            }
            slider.style.transform = `translateX(-${windowXsize * (page)}px)`;
            document.querySelector('#growth').classList.remove('slideRight');
            document.querySelector('#technic').classList.remove('slideLeft');
            if (page == 1) {
                document.querySelector('#growth').classList.add('slideRight');
                document.querySelector('#technic').classList.add('slideLeft');
            }
        });

        sliderRBtn.addEventListener('click', () => {
            slider.style.transition = '.5s';
            if (page === sliderLen - 1) {
                page = 0;
            } else {
                ++page;
            }
            slider.style.transform = `translateX(-${windowXsize * (page)}px)`;
            document.querySelector('#growth').classList.remove('slideRight');
            document.querySelector('#technic').classList.remove('slideLeft');
            if (page == 1) {
                document.querySelector('#growth').classList.add('slideRight');
                document.querySelector('#technic').classList.add('slideLeft');
            }
        });
    }


    let isMoblie = checkedMoblie();

    const nav = document.querySelector('nav');
    if (isMoblie) {
        nav.classList.add('fixed');
    } else {
        nav.classList.add('pc');
    }

    // screen init
    animateScollTo(`#header-container`, 200);
    const destLinkBtns = document.querySelectorAll('.dest-link');

    // window scroll events
    window.addEventListener('scroll', () => {
        const currentY_pos = document.documentElement.scrollTop;

        const main_1_pos = document.querySelector('#main-1-container').scrollHeight;
        const sbtns = document.querySelectorAll('.sbtn');
        if (currentY_pos < main_1_pos - 300) {
            sbtns.forEach(e => {
                e.classList.remove('slider-btn');
            });
            destLinkBtns.forEach((e, i) => {
                e.classList.remove('active');
                if (i == 0) e.classList.add('active');
            });
            if (!isMoblie) {
                nav.classList.remove('fixed');
            }
        } else if (currentY_pos > main_1_pos - 300) {
            sbtns.forEach(e => {
                e.classList.add('slider-btn');
            });
            destLinkBtns.forEach((e, i) => {
                e.classList.remove('active');
                if (i == 1) e.classList.add('active');
            });
            if (!isMoblie) {
                nav.classList.add('fixed');
            }
            document.querySelector('#greeting').classList.add('itemDown');
        }
    });

    setSlider();

    const know = document.querySelector('.know');

    know.addEventListener('click', (e) => {
        const dest = e.target.getAttribute('data-dest');
        animateScollTo(`#${dest}`, 400);
    });

    const menubtn = document.querySelector('.fa-align-justify');

    menubtn.addEventListener('click', () => {
        const content = document.querySelector('.nav-content');
        content.classList.toggle('visible');
    });


    destLinkBtns.forEach(e => {
        const dest = e.getAttribute('data-dest');
        e.addEventListener('click', (e) => {
            animateScollTo(`#${dest}`, 400);
        });
    });

    // get total slidee

})();