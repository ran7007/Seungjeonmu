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
        trigger: "#sec3",
        start: "bottom 80%",
        onEnter: () => {
            gsap.to("#sec1 .sec1_img", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        },
        onLeaveBack: () => {
            gsap.to("#sec1 .sec1_img", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        },
    });
}

// 패널 리스트 확보 (.sec2 ~ .sec4 모두)
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

ScrollTrigger.create({
    snap: {
        snapTo: (progress, self) => {
            const scrollPos = self.scroll();
            const closest = gsap.utils.snap(snapScrollPositions, scrollPos);
            return gsap.utils.normalize(0, ScrollTrigger.maxScroll(window), closest);
        },
        duration: 1,
        ease: "power1.inOut"
    }
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