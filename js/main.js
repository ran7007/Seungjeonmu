document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });
});
$(document).ready(function () {
    $(".gnb li a[href^='#']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

$(function () {
    scrollAnimations();
});

ScrollTrigger.create({
    trigger: "#sec2",
    start: "top center",
    onEnter: () => document.querySelector('.gotop').classList.add('active'),
    onLeaveBack: () => document.querySelector('.gotop').classList.remove('active')
});

function scrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // header nav 애니메이션 - 모든 화면 크기에 적용
    gsap.to("#header .nav", {
        y: -100,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#sec1",
            start: "top top",
            end: "top+=200 top",
            scrub: 0.2
        }
    });

    gsap.to("#header .rghbar", {
        x: 100,
        opacity: 0,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#sec1",
            start: "top top",
            end: "top+=200 top",
            scrub: 0.3
        }
    });

    gsap.to("#sec1 .inner", {
        opacity: 0,
        y: -100,
        ease: "power1.out",
        scrollTrigger: {
            trigger: "#sec1",
            start: "top top",
            end: "center top",
            scrub: 0.3
        }
    });

    // sec1 → sec2 넘어가며 배경 숨기기 - 모든 화면 크기에 적용
    ScrollTrigger.create({
        trigger: "#sec2",
        start: "top center",
        onEnter: () => {
            gsap.to("#sec1 .sec1_video .sec1_img", { opacity: 0, duration: 1 });
        },
        onLeaveBack: () => {
            gsap.to("#sec1 .sec1_video .sec1_img", { opacity: 1, duration: 1 });
        }
    });

    // 화면 크기 체크 함수
    function isDesktop() {
        return window.innerWidth > 650;
    }


    ScrollTrigger.create({
        trigger: "#sec3",
        start: "bottom 80%",
        onEnter: () => {
            gsap.to(["#sec1 .sec1_video", "#sec1 .sec1_img"], {
                opacity: 0,
                y: isDesktop() ? -50 : -20,
                duration: 1,
                ease: "power2.out"
            });
        },
        onLeaveBack: () => {
            gsap.to(["#sec1 .sec1_video", "#sec1 .sec1_img"], {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });
        }
    });

    // 데스크톱 전용 애니메이션
    if (isDesktop()) {
        // 섹션 고정(pin) 효과
        const panels = gsap.utils.toArray(".sec2, .sec3, .sec4");
        panels.forEach((panel) => {
            ScrollTrigger.create({
                trigger: panel,
                start: "top top",
                end: "bottom top",
                pin: true,
                pinSpacing: true,
            });
        });

        // 이미지 확대 효과
        gsap.utils.toArray(".sec3_img, .sec4_img").forEach((img) => {
            gsap.fromTo(img,
                { scale: 1 },
                {
                    scale: 1.3,
                    scrollTrigger: {
                        trigger: img,
                        start: "center bottom",
                        end: "bottom top",
                        scrub: true,
                        ease: "none"
                    }
                }
            );
        });
    }
    // 모바일 전용 애니메이션
    else {
        // 모바일에서는 추가적인 이미지 사라짐 처리
        ScrollTrigger.create({
            trigger: "#sec3",
            start: "top 50%", // 모바일에서는 시작점을 더 앞당김
            onEnter: () => {
                gsap.to("#sec1 .sec1_video, #sec1 .sec1_img", {
                    opacity: 0,
                    duration: 0.5,
                    ease: "power2.out"
                });
            },
            onLeaveBack: () => {
                gsap.to("#sec1 .sec1_video, #sec1 .sec1_img", {
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    }

    // 윈도우 리사이즈 이벤트에 대응
    let windowWidth = window.innerWidth;
    window.addEventListener("resize", () => {
        // 브레이크포인트를 건넜을 때만 페이지 새로고침
        const newWindowWidth = window.innerWidth;
        const crossedBreakpoint =
            (windowWidth <= 650 && newWindowWidth > 650) ||
            (windowWidth > 650 && newWindowWidth <= 650);

        if (crossedBreakpoint) {
            location.reload();
        }

        windowWidth = newWindowWidth;
    });
}
