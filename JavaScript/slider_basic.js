document.addEventListener("DOMContentLoaded", function () {

    /*Variables*/
    const slider = document.querySelector("#slider ul");
    const slides = document.querySelectorAll("#slider ul li");
    const prev = document.querySelector(".control_prev");
    const next = document.querySelector(".control_next");

    let index = 0;
    const totalSlides = slides.length;
    let intervalId;

    /*Fonctions*/
    function updateSlider() {
        slider.style.transform = `translateX(-${index * 100}%)`;
    }

    function startAutoScroll() {
        intervalId = setInterval(function () {
            index = (index + 1) % totalSlides;
            updateSlider();
        }, 3000);
    }

    function stopAutoScroll() {
        clearInterval(intervalId);
    }

    /*Events*/
    next.addEventListener("click", function (e) {
        e.preventDefault();
        index = (index + 1) % totalSlides;
        updateSlider();
    });

    prev.addEventListener("click", function (e) {
        e.preventDefault();
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    /*Démarrer le défilement auto*/
    startAutoScroll();

    /*Checkbox*/
    document.getElementById("checkbox").addEventListener("change", function () {
        if (this.checked) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }
    });

});
