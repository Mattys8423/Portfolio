$(function () {
    if (typeof ScrollReveal === "undefined") {
        console.warn("ScrollReveal n'est pas chargé.");
        return;
    }

    const sr = ScrollReveal({
        reset: false,
        viewFactor: 0.2
    });

    if ($(window).width() < 768) {
        $('.timeline-content.js--fadeInLeft').each(function () {
            $(this).removeClass('js--fadeInLeft').addClass('js--fadeInRight');
        });
    }

    sr.reveal('.js--fadeInLeft', {
        origin: 'left',
        distance: '80px',
        easing: 'ease-in-out',
        duration: 800,
        interval: 150
    });

    sr.reveal('.js--fadeInRight', {
        origin: 'right',
        distance: '80px',
        easing: 'ease-in-out',
        duration: 800,
        interval: 150
    });
});