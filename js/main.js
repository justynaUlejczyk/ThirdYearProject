function toggleDropdown() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("active");
}


function toggleHeart(button) {
    button.classList.toggle("active");
}


function exitButton(clickedElement) {
    var dimmedElement = document.querySelector('.dimmed');
    var createPost = document.querySelector('.feed-create-post-container')
    var postElement = clickedElement.closest('.posts');

    dimmedElement.classList.remove('active');
    createPost.style.display = 'none';

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

function openPost(clickedElement) {
    var postElement = clickedElement.closest('.posts');

    if (postElement) {
        var postId = postElement.getAttribute('data-postid');
        var postPreElement = postElement.querySelector('prepost');

        if (postPreElement) {
            postPreElement.style.display = 'flex';
        }

        var dimmedElement = document.querySelector('.dimmed');
        if (dimmedElement) {
            dimmedElement.classList.add('active');
        }
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

function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1;
}

function incrementLikes() {
    var likeCounter = document.getElementById('likeCounter');
    var currentLikes = parseInt(likeCounter.innerText);
    if (hasClass(likeCounter, "liked")) {
        likeCounter.innerText = currentLikes - 1;
    } else {
        likeCounter.innerText = currentLikes + 1;        
    }
    likeCounter.classList.toggle("liked");
}



