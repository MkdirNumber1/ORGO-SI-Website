




// Select all dropdown toggles
const toggles = document.querySelectorAll('.dropdown-toggle');

// Add click event to each toggle
toggles.forEach(toggle => {
    toggle.addEventListener('click', function() {
        const dropdown = this.nextElementSibling; // Select the next ul
        // Toggle the display of the clicked dropdown
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
    });
});

// Optional: Close dropdowns if clicking outside (if you want this functionality)
window.addEventListener('click', function(event) {
    toggles.forEach(toggle => {
        const dropdown = toggle.nextElementSibling;
        if (!toggle.contains(event.target) && dropdown.style.display === 'block') {
            dropdown.style.display = 'none';
        }
    });
});
