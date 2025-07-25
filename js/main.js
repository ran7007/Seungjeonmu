document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });
});



//스크롤
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

{
    gsap.registerPlugin(ScrollTrigger);

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


    ScrollTrigger.create({
        trigger: "#sec3",
        start: "bottom 80%",
        onEnter: () => {
            gsap.to(["#sec1 .sec1_video, #sec1 .sec1_img"], { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        },
        onLeaveBack: () => {
            gsap.to(["#sec1 .sec1_video, #sec1 .sec1_img"], { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        },
    });
}

// 패널 리스트 확보 (.sec2 ~ .sec4 모두)
if (window.innerWidth > 1024) {
    // 애니메이션 + pin 처리
    let panels = gsap.utils.toArray(".sec2, .sec3, .sec4");

    panels.forEach((panel) => {
        ScrollTrigger.create({
            trigger: panel,
            start: "top top",
            end: "bottom top",
            pin: true,
            pinSpacing: true,
        });
    });

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

    // sec1 → sec3 opacity 전환도 데스크탑에서만
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
