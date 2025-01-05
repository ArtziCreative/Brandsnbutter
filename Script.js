document.addEventListener("DOMContentLoaded", () => {
    // Toggle mobile menu visibility
    function toggleMenu() {
        console.log("Hamburger menu clicked!"); // Debugging message
        const navLinks = document.querySelector(".nav-links");
        if (navLinks) {
            navLinks.classList.toggle("active");
        }
    }

    // Attach toggleMenu to the hamburger menu
    const menuIcon = document.querySelector(".mobile-menu-icon");
    if (menuIcon) {
        menuIcon.addEventListener("click", toggleMenu);
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                });
            }

            // Close mobile menu after clicking a link
            const navLinks = document.querySelector(".nav-links");
            if (navLinks && navLinks.classList.contains("active")) {
                navLinks.classList.remove("active");
            }
        });
    });
});

// Smooth scrolling with custom duration
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            smoothScroll(target, 1000); // Adjust duration in milliseconds (e.g., 1000ms = 1 second)
        }

        // Close mobile menu after clicking a link
        const navLinks = document.querySelector(".nav-links");
        if (navLinks && navLinks.classList.contains("active")) {
            navLinks.classList.remove("active");
        }
    });
});

// Custom smooth scroll function
function smoothScroll(target, duration) {
    const startPosition = window.scrollY;
    const targetPosition = target.getBoundingClientRect().top + window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        // Easing function for smooth scrolling (easeInOutQuad)
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}