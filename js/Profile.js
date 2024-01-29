function exitButton(clickedElement) {
    var dimmedElement = document.querySelector('.dimmed');
    var postElement = clickedElement.closest('.posts');

    dimmedElement.classList.remove('active');

    console.log('Clicked Element:', clickedElement);
    console.log('Post Element:', postElement);

    if (postElement) {
        var postId = postElement.getAttribute('data-postid');

        console.log('Opened post with ID:', postId);

        var postPreElement = postElement.querySelector('prepost');

        if (postPreElement) {
            postPreElement.style.display = 'none';
        }
    } else {
        console.log('No post element found.');
    }
}

function showGroupsTab() {
    var profileTab = document.querySelector('.profile-info-display');
    var groupTab = document.querySelector('.profile-info-groups');
    var aboutTab = document.querySelector('.profile-info-about');

    groupTab.style.display = 'block';
    profileTab.style.display = 'none'
    aboutTab.style.display = 'none';

}

function showPostsTab() {
    var profileTab = document.querySelector('.profile-info-display');
    var groupTab = document.querySelector('.profile-info-groups');
    var aboutTab = document.querySelector('.profile-info-about');

    groupTab.style.display = 'none';
    profileTab.style.display = 'flex'
    aboutTab.style.display = 'none';

}

function showAboutTab() {
    var profileTab = document.querySelector('.profile-info-display');
    var groupTab = document.querySelector('.profile-info-groups');
    var aboutTab = document.querySelector('.profile-info-about');

    groupTab.style.display = 'none';
    profileTab.style.display = 'none'
    aboutTab.style.display = 'block';

}