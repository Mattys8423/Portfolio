document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector("header nav");

    menuToggle.addEventListener("click", function () {
        nav.classList.toggle("active");
        menuToggle.classList.toggle("active"); // Active l'animation
    });
});


window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
});

