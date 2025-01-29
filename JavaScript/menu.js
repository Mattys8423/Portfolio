document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector('.menu-toggle');
    const nav = document.querySelector('header nav');

    // Ajoute ou enlève la classe "active" lorsque le bouton est cliqué
    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
});
