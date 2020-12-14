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

    const know = document.querySelector('.know');

    // even 
    know.addEventListener('click', (e) => {
        const dest = e.target.getAttribute('data-dest');

        animateScollTo(`#${dest}`, 400);
    });


})();