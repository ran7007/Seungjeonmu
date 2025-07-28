document.addEventListener('DOMContentLoaded', () => {
    const targets = document.querySelectorAll('.showImg');

    function onScroll() {
        const windowHeight = window.innerHeight;

        targets.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < windowHeight * 0.85) {
                el.classList.add('in-view');
            } else {
                el.classList.remove('in-view');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onScroll);
    onScroll();
});
