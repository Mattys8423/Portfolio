document.addEventListener("DOMContentLoaded", function () {

    const skills = document.querySelectorAll(".progress-fill");

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                const bar = entry.target;
                const width = bar.getAttribute("data-width");

                bar.style.width = width + "%";

                observer.unobserve(bar);

            }

        });

    }, { threshold: 0.4 });

    skills.forEach(skill => {
        observer.observe(skill);
    });

});