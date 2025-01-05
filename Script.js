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

function submitForm() {
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    emailjs
        .send("your_service_id", "your_template_id", formData)
        .then(
            () => {
                alert("Your message has been sent!");
                document.getElementById("contact-form").reset(); // Clears the form
            },
            (error) => {
                alert("Failed to send the message. Please try again.");
                console.error("EmailJS Error:", error);
            }
        );
}

function submitForm() {
    alert("Your message has been sent!");
    window.location.href = "thank-you.html"; // Redirect to a thank-you page
}