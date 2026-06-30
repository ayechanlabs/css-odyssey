document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".content-section");

    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // Stop page from jumping

            // 1. Remove active class from all links and sections
            navLinks.forEach(item => item.classList.remove("active"));
            sections.forEach(section => section.classList.remove("active"));

            // 2. Add active class to clicked link
            link.classList.add("active");

            // 3. Get the target section ID and make it visible
            const targetId = link.getAttribute("data-target");
            document.getElementById(targetId).classList.add("active");
        });
    });
});