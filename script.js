/* ==========================
   MODAL
========================== */

const modal = document.getElementById("modal");
const open = document.getElementById("openModal");
const close = document.getElementById("closeModal");

open.addEventListener("click", () => {

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

});

close.addEventListener("click", () => {

    modal.classList.remove("active");

    document.body.style.overflow = "";

});

window.addEventListener("click", (e) => {
    if (e.target === modal) {

    modal.classList.remove("active");

    document.body.style.overflow = "";

    }
});


/* ==========================
   SCROLL REVEAL
========================== */

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

reveals.forEach(section => {
    observer.observe(section);
});