document.addEventListener('DOMContentLoaded', function () {
    // Get all elements with the class "group"
    const groupElements = document.querySelectorAll('.group');

    // Add event listeners to each "group" element
    groupElements.forEach(groupElement => {
        groupElement.addEventListener('mouseenter', () => {
            // Add the "active" class when the mouse enters
            groupElement.classList.add('active');
        });

        groupElement.addEventListener('mouseleave', () => {
            // Remove the "active" class when the mouse leaves
            groupElement.classList.remove('active');
        });
    });
});

function finishPost() {
    var dimmedElement = document.querySelector('.dimmed');
    var createPost = document.querySelector('.feed-create-post-container')

    dimmedElement.classList.remove('active');
    createPost.style.display = 'none';
}

function createPost() {
    var createPost = document.querySelector('.feed-create-post-container')
    var dimmedElement = document.querySelector('.dimmed');

    dimmedElement.classList.add('active');
    createPost.style.display = 'flex';
}