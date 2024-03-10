function toggleMemberBar() {
    var rightPanel = document.querySelector('.right-bar');
    var isActive = rightPanel.classList.toggle('active');

    // Save the state to localStorage
    localStorage.setItem('rightPanelState', isActive ? 'active' : '');

}

// Check for previous state when the page loads
document.addEventListener('DOMContentLoaded', function () {
    var rightPanel = document.querySelector('.right-bar');
    var savedState = localStorage.getItem('rightPanelState');

    if (savedState === 'active') {
        rightPanel.classList.add('active');
    }
});
