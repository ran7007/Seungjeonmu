document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });

    const currentUrl = location.pathname.split("/").pop();

    const depthLinks = document.querySelectorAll(".depth2 li a");
    depthLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        if (linkHref === currentUrl) {
            const gnbLi = link.closest(".depth2").parentElement;
            if (gnbLi) gnbLi.classList.add("active");
        }
    });

    const mgnbLinks = document.querySelectorAll(".mgnb dl dd a");
    mgnbLinks.forEach(link => {
        const linkHref = link.getAttribute("href").split("/").pop();
        if (linkHref === currentUrl) {
            const dt = link.closest("dl").querySelector("dt");
            if (dt) dt.classList.add("active");
            link.classList.add("active");
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
        triggerHook: 1,
        reverse: true,
    })
        .setTween(sectionTween)
        .addTo(controller);
});