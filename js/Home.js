document.addEventListener("DOMContentLoaded", function () {
    const postpreclass = document.querySelector("postpre");
    const dimming = document.querySelector(".dimmed");
    const feedPost = document.querySelector(".feed-post");
    const exitbutton = document.querySelector(".close");

    feedPost.addEventListener("click", function () {
        postpreclass.style.display = "flex";
        dimming.classList.add("active");
    });

    exitbutton.addEventListener("click", function () {
        postpreclass.style.display = "none";
        dimming.classList.remove("active");
    });

    // Close the postpre on clicking outside of it
    document.addEventListener("click", function (event) {
        const isClickInsidePostPre = postpreclass.contains(event.target);
        const isClickInsideFeedPost = feedPost.contains(event.target);

        if (!isClickInsidePostPre && !isClickInsideFeedPost) {
            postpreclass.style.display = "none";
            dimming.classList.remove("active");
        }
    });
});