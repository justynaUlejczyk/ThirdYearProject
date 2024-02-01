function toggleDarkMode() {
    var page = document.querySelector('body');

    // Check if 'darkmode' class is present
    if (page.classList.contains('darkmode')) {
        // If present, remove the 'darkmode' class
        page.classList.remove('darkmode');
    } else {
        // If not present, add the 'darkmode' class
        page.classList.add('darkmode');
    }
}