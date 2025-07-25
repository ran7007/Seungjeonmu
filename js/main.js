document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });
});

// 스크롤 네비게이션
$(document).ready(function () {
    $(".gnb li a[href^='#']").click(function (e) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
    });
});

// gsap 애니메이션 시작
$(function () {
    scrollAnimations();
});

function scrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // header nav 애니메이션
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

    // sec1 → sec2 넘어가며 배경 숨기기
    ScrollTrigger.create({
        trigger: "#sec2",
        start: "top center",
        onEnter: () => {
            gsap.to("#sec1 .sec1_video", { opacity: 0, duration: 1 });
        },
        onLeaveBack: () => {
            gsap.to("#sec1 .sec1_video", { opacity: 1, duration: 1 });
        }
    });

    // sec1 → sec3 스크롤 시 이미지 위로 사라짐
    ScrollTrigger.create({
        trigger: "#sec3",
        start: "bottom 80%",
        onEnter: () => {
            gsap.to(["#sec1 .sec1_video", "#sec1 .sec1_img"], {
                opacity: 0,
                y: -50,
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

    // ✅ ✅ ✅ 모든 디바이스에서 작동하도록 변경 (조건문 제거)
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

    // 이미지 확대 효과도 반응형 포함
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

    // sec1 → sec3 페이드 전환도 항상 작동
    ScrollTrigger.create({
        trigger: "#sec3",
        start: "bottom 80%",
        onEnter: () => {
            gsap.to("#sec1 .sec1_video", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        },
        onLeaveBack: () => {
            gsap.to("#sec1 .sec1_video", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        },
    });
}
