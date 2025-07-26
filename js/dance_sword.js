
window.addEventListener('scroll', () => {
    const sec2 = document.querySelector('#sec1');
    const lnb = sec2.querySelector('.tab-container');

    if (window.scrollY >= sec2.offsetTop) {
        lnb.style.width = `${lnb.offsetWidth}px`;
        lnb.classList.add('fixed');
    } else {
        lnb.classList.remove('fixed');
        lnb.style.width = '';
    }
});

function openTab(tabName) {
    document.querySelectorAll('.tab, .tabs').forEach(function (el) {
        el.classList.remove('on');
    });
    document.getElementById(tabName).classList.add('on');
    document.querySelector('.tabs[onclick="openTab(\'' + tabName + '\')"]').classList.add('on');
}

openTab('Tab2');

const arc_bott = new Swiper('.swiper', {
    slidesPerView: 1,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    freeMode: false,
    breakpoints: {
        1700: {
            slidesPerView: 1,
            spaceBetween: 20,
        }
    }
});