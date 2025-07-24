document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });
});




const controller = new ScrollMagic.Controller();
const sections = document.querySelectorAll("#sec1, #sec2, #sec3, #sec4, #sec5, #sec6");

sections.forEach((section) => {
    TweenLite.set(section, { opacity: 0, y: 100 });

    const sectionTween = TweenMax.to(section, 1, {
        opacity: 1,
        y: 0,
        ease: Power2.easeOut,
    });

    new ScrollMagic.Scene({
        triggerElement: section,
        triggerHook: 1,
        reverse: true,
    })
        .setTween(sectionTween)
        .addTo(controller);
});