function toggleHeart(button) {
    button.classList.toggle("active");
}


function exitButton() {
    var postPreElement = document.querySelector('prepost');
    var dimmedElement = document.querySelector('.dimmed');

    dimmedElement.classList.remove('active');
    postPreElement.style.display = 'none';
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

function displayPostInfo(postId) {
    // Find the post element by ID
    var postElement = document.getElementById('id' + postId);

    // Check if a post element with the specified ID exists
    if (postElement) {
        // Get information from the post (you can customize this based on your data structure)
        var imgSrc = postElement.querySelector('.expanded-post img').getAttribute('src');
        var captionText = postElement.querySelector('.caption').textContent;

        // Display the information (you can customize this based on your needs)
        console.log('Post ID:', postId);
        console.log('Image Source:', imgSrc);
        console.log('Caption:', captionText);


        // Additional logic for displaying the information in your UI can go here
    } else {
        console.log('Post with ID ' + postId + ' not found.');
    }
}

// Example usage
var postIdToDisplay = 2; // You can replace this with the actual post ID
openPost(document.getElementById(postIdToDisplay));
