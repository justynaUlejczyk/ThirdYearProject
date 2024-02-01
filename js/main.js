function toggleDropdownNav() {
    var dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("active");
}

function toggleDropdownProfile() {
    var dropdownContent = document.getElementById("dropdownContentProfile");
    dropdownContent.classList.toggle("active");
}


function toggleHeart(postid) {
    postidnum = String(postid);
    var icons = document.querySelectorAll(".like.icons.post-" + postid);
    icons.forEach(element => {
        element.classList.toggle("active");
    });
}



function openPost(clickedElement) {
    var postElement = clickedElement.closest('.posts');

    console.log('Clicked Element:', clickedElement);
    console.log('Post Element:', postElement);

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


function handleLikeButtonClick(postid) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '../php/update_likes.php', true);
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);

                document.getElementsByClassName('likeCounter ' + postid)[0].textContent = response.likesCount;
                console.log(document.getElementsByClassName('likeCounter ' + postid));
                console.log(response.likesCount);

                document.getElementsByClassName('likeCounter ' + postid)[0].textContent = response.likesCount;
            } else {
                console.error('Error:', xhr.statusText);
            }
        }
    };

    xhr.onerror = function () {
        console.error('Request failed');
    };

    xhr.send(JSON.stringify({
        postid: postid
    }));
}



