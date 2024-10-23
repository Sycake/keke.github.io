// Function to toggle the visibility of sections
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Initially hide the content sections
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('architectureContent').style.display = 'none';
    document.getElementById('programmingContent').style.display = 'none';
});
