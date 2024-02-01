document.addEventListener('DOMContentLoaded', function () {
    // Retrieve dark mode preference from localStorage
    var darkModePreference = localStorage.getItem('darkmode');
    var darkModeCheckbox = document.querySelector('.display input[type="checkbox"]');

    // Set the initial state of the checkbox based on dark mode preference
    darkModeCheckbox.checked = darkModePreference === 'true';

    // Apply dark mode if the preference is 'true'
    if (darkModeCheckbox.checked) {
        toggleDarkMode(darkModeCheckbox);
    }
});

function toggleDarkMode(checkbox) {
    var page = document.querySelector('body');

    // Check if 'darkmode' class is present
    if (page.classList.contains('darkmode')) {
        // If present, remove the 'darkmode' class
        page.classList.remove('darkmode');
        // Store the dark mode preference in localStorage
        localStorage.setItem('darkmode', 'false');
    } else {
        // If not present, add the 'darkmode' class
        page.classList.add('darkmode');
        // Store the dark mode preference in localStorage
        localStorage.setItem('darkmode', 'true');
    }

    // Store the checkbox state in localStorage
    localStorage.setItem('checkboxState', checkbox.checked ? 'checked' : 'unchecked');
}