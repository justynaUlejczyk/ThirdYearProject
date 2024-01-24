function toggleHeart(button) {
    button.classList.toggle("active");
}


function exitButton(clickedElement) {
    // Find the closest post element by using querySelector
    var postElement = clickedElement.closest('.posts');

    // Log the clicked element and the found post element
    console.log('Clicked Element:', clickedElement);
    console.log('Post Element:', postElement);

    // Check if a post element was found
    if (postElement) {
        // Get the ID attribute of the post element
        var postId = postElement.getAttribute('id');

        // Log it to the console
        console.log('Clicked on exit button for post with ID:', postId);

        // Find the postpre element within the same post
        var postPreElement = postElement.querySelector('postpre');

        // Check if the postpre element was found
        if (postPreElement) {
            // Set the display property of .postpre to none
            postPreElement.style.display = 'none';
        }

        // Remove the .active class from the .dimmed element
        var dimmedElement = document.querySelector('.dimmed');
        if (dimmedElement) {
            dimmedElement.classList.remove('active');
        }
    } else {
        console.log('No post element found.');
    }
}


function openPost(clickedElement) {
    // Find the closest post element by using querySelector
    var postElement = clickedElement.closest('.posts');

    // Log the clicked element and the found post element
    console.log('Clicked Element:', clickedElement);
    console.log('Post Element:', postElement);

    // Check if a post element was found
    if (postElement) {
        // Get the ID attribute of the post element
        var postId = postElement.getAttribute('id');

        // Log it to the console
        console.log('Opened post with ID:', postId);

        // Find the postpre element within the same post
        var postPreElement = postElement.querySelector('postpre');

        // Check if the postpre element was found
        if (postPreElement) {
            // Set the display property of postpre to flex
            postPreElement.style.display = 'flex';
        }

        // Add the 'active' class to the .dimmed element
        var dimmedElement = document.querySelector('.dimmed');
        if (dimmedElement) {
            dimmedElement.classList.add('active');
        }
    } else {
        console.log('No post element found.');
    }
}


// function exitButton(clickedElement) {
//     var buttonId = clickedElement.getAttribute('button-post-id');

//     var postpreElement = document.querySelector('postpre[id="' + buttonId + '"]');
//     var dimming = document.querySelector(".dimmed");

//     postpreElement.style.display = "none";
//     dimming.classList.remove("active");
// }