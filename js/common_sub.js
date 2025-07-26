document.addEventListener("DOMContentLoaded", function () {
    const currentUrl = location.pathname.split("/").pop();
    const depthLinks = document.querySelectorAll(".depth2 li a");

    depthLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();

        if (linkHref === currentUrl) {
            const gnbLi = link.closest("li").closest(".depth2").parentElement;
            if (gnbLi) gnbLi.classList.add("active");
        }
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
        triggerHook: 0.7,
        reverse: true,
    })
        .setTween(sectionTween)
        .addTo(controller);
});
