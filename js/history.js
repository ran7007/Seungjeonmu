const scrollSection = document.querySelector('.horizontal-scroll_section');
const scrollContent = document.querySelector('.horizontal-scroll_content');
const lastItem = document.querySelector('.item:last-child');
const nextSection = document.querySelector('#footer');

const lastItemOffset = lastItem.offsetLeft + lastItem.clientWidth;
const maxScroll = scrollContent.scrollWidth - window.innerWidth;
scrollSection.style.height = (maxScroll + window.innerHeight) + 'px';

let lastScrollTop = 0;
let isTransitioning = false;

document.addEventListener('scroll', () => {
    // 900px 이하이면 가로 스크롤 관련 동작 무시
    if (window.innerWidth <= 900) return;

    if (isTransitioning) return;

    const scrolled = window.pageYOffset;
    const sectionOffset = Math.min(maxScroll, scrolled - scrollSection.offsetTop);
    const notReachedBottom = Math.max(1000, scrollSection.getBoundingClientRect().bottom - window.innerHeight);

    if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, { x: -sectionOffset });

        if (sectionOffset >= maxScroll && scrolled > lastScrollTop) {
            isTransitioning = true;
            nextSection.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                isTransitioning = false;
            }, 500);
        }
    }

    if (scrolled < lastScrollTop && scrolled < scrollSection.offsetTop) {
        isTransitioning = false;
    }

    lastScrollTop = scrolled <= 0 ? 0 : scrolled;
});

const heroScene = new ScrollMagic.Scene({
    triggerElement: '.horizontal-scroll_section',
    triggerHook: 0,
    duration: maxScroll
});
