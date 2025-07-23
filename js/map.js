document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const mgnb = document.querySelector(".mgnb");

    ham.addEventListener("click", () => {
        ham.classList.toggle("active");
        mgnb.classList.toggle("active");
    });
});