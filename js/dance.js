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

document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        }
    });
});