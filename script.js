function highlightSection(sectionId) {
    // Remove active class from all sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.classList.remove("active");
    });

    // Add active class to clicked section
    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add("active");
}
