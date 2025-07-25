document.addEventListener("DOMContentLoaded", function () {
    const controller = new ScrollMagic.Controller();

    new ScrollMagic.Scene({
        triggerElement: "#sec3",
        triggerHook: 0.8,
        reverse: true,
    })
        .on("enter", function () {
            document.querySelectorAll(".counting").forEach((el) => {
                const countTo = parseInt(el.getAttribute("data-count"), 10);
                const duration = 2000;
                const frameRate = 30;
                const totalFrames = Math.round(duration / (1000 / frameRate));
                let frame = 0;
                const span = el.querySelector('span');

                const counter = setInterval(() => {
                    frame++;
                    const progress = frame / totalFrames;
                    const currentCount = Math.floor(countTo * progress);
                    el.innerHTML = `${currentCount.toLocaleString()}${span ? span.outerHTML : ''}`;

                    if (frame >= totalFrames) {
                        clearInterval(counter);
                        el.innerHTML = `${countTo.toLocaleString()}${span ? span.outerHTML : ''}`;
                    }
                }, 1000 / frameRate);
            });
        })
        .addTo(controller);
});
