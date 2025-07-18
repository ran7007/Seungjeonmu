window.addEventListener('scroll', () => {
    const sec2 = document.querySelector('#sec2');
    const lnb = sec2.querySelector('.tabnav');

    if (window.scrollY >= sec2.offsetTop) {
        lnb.style.width = `${lnb.offsetWidth}px`;
        lnb.classList.add('fixed');
    } else {
        lnb.classList.remove('fixed');
        lnb.style.width = '';
    }
});



const tabImg = document.querySelector('#sec3 .inner .year_cont .tab_img1');
const sec3 = document.querySelector('#sec3');
const footer = document.querySelector('#footer');

window.addEventListener('scroll', () => {
    const sec3Top = sec3.offsetTop;
    const sec3Height = sec3.offsetHeight;
    const footerTop = footer.offsetTop;
    const scrollY = window.scrollY;
    const winH = window.innerHeight;

    if (scrollY + winH < sec3Top + 750) {
        tabImg.classList.remove('fixed');
        tabImg.style.position = 'relative';
        tabImg.style.top = '';
        tabImg.style.left = '';
        tabImg.style.opacity = '0';
    } else if (scrollY + winH >= sec3Top + 750 && scrollY + winH < footerTop) {

        tabImg.classList.add('fixed');
        tabImg.style.position = '';
        tabImg.style.top = '';
        tabImg.style.left = '';
        tabImg.style.opacity = '1';
    } else if (scrollY + winH >= footerTop - 400) {
        tabImg.classList.remove('fixed');
        tabImg.style.position = 'absolute';
        tabImg.style.top = (sec3Height - tabImg.offsetHeight) + 'px';
        tabImg.style.left = '';
        tabImg.style.opacity = '0';
    }
});
