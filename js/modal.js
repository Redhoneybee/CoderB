const datas = {
    growth: {
        labels: ['HTML', 'CSS', 'JS', 'Node.js', 'React.js', 'MongoDB', 'MySQL'],
        datas: [80, 65, 82, 52, 23, 15, 21],
        title: 'Study satisfaction(2020)',
        label: 'studing',
    },
    technic: {
        labels: ['HTML', 'CSS', 'JS', 'Node.js', 'React.js', 'MongoDB', 'MySQL'],
        datas: [45, 40, 52, 38, 12, 20, 20],
        title: 'Technic Level',
        label: 'level',
    }
};
(function () {
    "use strict";

    // checking the moblie
    function checkedMoblie() {
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
            return true;
        return false;
    }

    // set width
    function setAllWidth(m) {
        const modal = document.querySelector('.modal');
        const modalContent = document.querySelector('.modal-content');
        const chart = document.querySelector('#chart');
        if (m) {
            const windowWidth = window.innerWidth + 'px';
            modal.style.maxWidth = windowWidth;
            modalContent.style.width = windowWidth;
            chart.style.width = windowWidth;
            return;
        }

        modal.style.maxWidth = 700 + 'px';
        modalContent.style.width = 700 + 'px';
        chart.style.width = 700 + 'px';
    }

    // canvus chart 
    function drowChartData(data) {
        const ctx = document.getElementById('chart').getContext('2d');
        const chart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: data.labels,
                datasets: [
                    {
                        label: data.label,
                        backgroundColor: ['#d7385e', '#fb7b6b', '#f3c623', '#ffa41b', '#342ead', '#639a67', '#005082'],
                        data: data.datas
                    }
                ]
            },
            options: {
                legend: { display: false },
                title: {
                    display: true,
                    text: data.title
                }
            }
        });
    }


    // drow modal
    function toggleModal(data) {
        const mask = document.querySelector('.mask');
        const modal = document.querySelector('.modal');
        const modalWrap = document.querySelector('.modal-wrap');
        drowChartData(data);

        mask.style.opacity = 1;
        modal.style.opacity = 1;
        modalWrap.classList.add('visible');
        document.querySelector('.modal .modal-close').addEventListener('click', () => {
            mask.style.opacity = 0;
            modal.style.opacity = 0;
            modalWrap.classList.remove('visible');
        });
    }

    const isMoblie = checkedMoblie();

    setAllWidth(isMoblie);

    if (isMoblie) document.querySelector('.modal').style.transform = `scale(1)`;


    const growthBtn = document.querySelector('#growth .btn');
    const technicBtn = document.querySelector('#technic .btn')

    growthBtn.addEventListener('click', () => {
        toggleModal(datas.growth);
    });

    technicBtn.addEventListener('click', () => {
        toggleModal(datas.technic);
    });
})();