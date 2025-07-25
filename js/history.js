const scrollSection = document.querySelector('#sec2');
const scrollContent = document.querySelector('.item_box');
const items = document.querySelectorAll('.item');
const nextSection = document.querySelector('#footer');

const initialOffset = 700;

// 마지막 아이템이 완전히 보이도록 계산
function calculateTotalScrollRange() {
    // 콘텐츠의 실제 너비
    const contentWidth = scrollContent.scrollWidth;

    // 뷰포트 너비
    const viewportWidth = window.innerWidth;

    const maxScrollNeeded = contentWidth - viewportWidth;

    // 초기 오프셋 + 필요한 스크롤 거리 + 여유 공간
    const extraMargin = 200; // 추가 여유 공간

    return initialOffset + maxScrollNeeded + extraMargin;
}

const totalScrollRange = calculateTotalScrollRange();

// 섹션 높이를 충분히 크게 설정
scrollSection.style.height = (totalScrollRange + window.innerHeight) + 'px';

gsap.set(scrollContent, { x: initialOffset });

let lastScrollTop = 0;
let isTransitioning = false;

document.addEventListener('scroll', () => {
    if (window.innerWidth <= 900) return;
    if (isTransitioning) return;

    const scrolled = window.pageYOffset;
    const sectionTop = scrollSection.offsetTop;
    const sectionHeight = scrollSection.offsetHeight;
    const sectionEnd = sectionTop + sectionHeight - window.innerHeight;

    if (scrolled >= sectionTop && scrolled <= sectionEnd) {
        // 진행률 계산 (0~1)
        const progress = (scrolled - sectionTop) / (sectionEnd - sectionTop);
        const clampedProgress = Math.max(0, Math.min(3, progress));

        //전체길이 계산
        const xPosition = initialOffset - (clampedProgress * totalScrollRange - 300);

        gsap.set(scrollContent, { x: xPosition });

        if (clampedProgress >= 0.95 && scrolled > lastScrollTop) {
            isTransitioning = true;
            nextSection.scrollIntoView({ behavior: "smooth" });

            setTimeout(() => {
                isTransitioning = false;
            }, 1000);
        }
    }

    if (scrolled < sectionTop) {
        isTransitioning = false;
    }

    lastScrollTop = scrolled;
});
