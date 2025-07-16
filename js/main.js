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

    gsap.to("#sec2 .overlay", {
        opacity: 0.1,
        ease: "none",
        scrollTrigger: {
            trigger: "#sec2",
            start: "top bottom",
            end: "top top",
            scrub: true
        }
    });

    // gsap.from("#sec2 .sec2_text", {
    //     opacity: 1,
    //     y: 100,
    //     scrollTrigger: {
    //         trigger: "#sec2",
    //         start: "top bottom",
    //         end: "bottom top",
    //         scrub: true
    //     }
    // });

    ScrollTrigger.create({
        trigger: "#sec3",
        start: "top 50%",
        onEnter: () => {
            gsap.to("#sec1 .sec1_img", { opacity: 0, y: -50, duration: 1, ease: "power2.out" });
        },
        onLeaveBack: () => {
            gsap.to("#sec1 .sec1_img", { opacity: 1, y: 0, duration: 1, ease: "power2.out" });
        },
    });
}
