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


function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("active");
}


function toggleHeart(button) {
    button.classList.toggle("active");
}


function exitButton() {
    var postPreElement = document.querySelector('prepost');
    var dimmedElement = document.querySelector('.dimmed');
    var createPost = document.querySelector('.feed-create-post-container')

    dimmedElement.classList.remove('active');
    postPreElement.style.display = 'none';
    createPost.style.display = 'none';
}

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


function openPost(clickedElement) {
    // Find the closest post element by using querySelector
    var postElement = clickedElement.closest('.posts');
    var postPreElement = document.querySelector('prepost');
    var dimmedElement = document.querySelector('.dimmed');

    dimmedElement.classList.add('active');
    postPreElement.style.display = 'flex';


    // Check if a post element was found
    if (postElement) {
        // Get the ID attribute of the post element
        var postId = postElement.getAttribute('id');

        // Display the information for the opened post
        displayPostInfo(postId);

        // Additional logic for handling the opening of the post can go here
    } else {
        console.log('No post element found.');
    }
}



function toggleMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}

