(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches || window.innerWidth <= 768;
    if (isTouch) return;

    const cursor = document.querySelector(".custom-cursor");
    const ring = document.querySelector(".custom-cursor-ring");
    if (!cursor || !ring) return;

    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;

    const speedX = 0.35;
    const speedY = 0.35;

    document.addEventListener("mousemove", (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;
    });

    function animateRing() {
        const dx = mouseX - ringX;
        const dy = mouseY - ringY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        const dynamicSpeed = Math.min(0.65, 0.22 + distance * 0.003);

        ringX += dx * dynamicSpeed;
        ringY += dy * dynamicSpeed;

        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateRing);
    }

    animateRing();

    const interactiveSelectors = "a, button, .tgl-btn, input, textarea, select, [role='button']";

    document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", () => {
            ring.classList.add("is-hover");
        });

        el.addEventListener("mouseleave", () => {
            ring.classList.remove("is-hover");
        });
    });

    document.addEventListener("mousedown", () => {
        ring.style.transform = "translate(-50%, -50%) scale(0.92)";
        cursor.style.transform = "translate(-50%, -50%) scale(0.9)";
    });

    document.addEventListener("mouseup", () => {
        ring.style.transform = "translate(-50%, -50%) scale(1)";
        cursor.style.transform = "translate(-50%, -50%) scale(1)";
    });

    document.addEventListener("mouseleave", () => {
        cursor.style.opacity = "0";
        ring.style.opacity = "0";
    });

    document.addEventListener("mouseenter", () => {
        cursor.style.opacity = "1";
        ring.style.opacity = "1";
    });
})();