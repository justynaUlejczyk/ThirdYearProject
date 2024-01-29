function exitButton(clickedElement) {
    var dimmedElement = document.querySelector('.dimmed');
    var createPost = document.querySelector('.feed-create-post-container')
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

