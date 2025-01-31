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

document.addEventListener("DOMContentLoaded", function () {
    const toggleArrow = document.querySelector(".dropdown-toggle");
    const submenu = document.querySelector(".submenu");

    toggleArrow.addEventListener("click", function (event) {
        event.stopPropagation(); // Empêche la propagation du clic vers d'autres éléments
        submenu.classList.toggle("show");
        toggleArrow.classList.toggle("active");
    });

    // Fermer le sous-menu si on clique ailleurs
    document.addEventListener("click", function (event) {
        if (!toggleArrow.contains(event.target) && !submenu.contains(event.target)) {
            submenu.classList.remove("show");
            toggleArrow.classList.remove("active");
        }
    });
});

