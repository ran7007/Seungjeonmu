window.addEventListener('scroll', () => {
    const sec2 = document.querySelector('#sec2');
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
    const container = document.querySelector('.tab-container');
    const currentOnTab = container.querySelector('.tabs.on');
    const clickedTab = document.querySelector(`.tabs[onclick="openTab('${tabName}')"]`);

    document.querySelectorAll('.tab, .tabs').forEach(el => el.classList.remove('on'));

    document.getElementById(tabName).classList.add('on');
    clickedTab.classList.add('on');

    if (window.innerWidth <= 870) {
        if (currentOnTab === clickedTab) {
            container.classList.toggle('show-dropdown');
        } else {
            container.classList.remove('show-dropdown');
        }
    }
}


