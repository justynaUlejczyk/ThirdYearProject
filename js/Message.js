function changeChat(element) {
    console.log("changeChat function called");

    // Get the user id from the clicked element
    var userId = element.getAttribute("userid");

    // Store the selected user ID in localStorage
    localStorage.setItem("lastSelectedUserId", userId);

    // Hide all chat containers
    var chatContainers = document.querySelectorAll(".chatter-box-chat-containers");
    chatContainers.forEach(function (container) {
        container.style.display = "none";
    });

    // Show the chat container with the corresponding id
    var selectedChat = document.querySelector(".chatter-box-chat-containers[chatid='" + userId + "']");
    console.log('twoj stary');
    selectedChat.style.display = "flex";
}

// Retrieve the last selected user ID from localStorage
document.addEventListener('DOMContentLoaded', function () {
    var lastSelectedUserId = localStorage.getItem("lastSelectedUserId");

    if (lastSelectedUserId) {
        // Show the chat container for the last selected user
        var selectedChat = document.querySelector(".chatter-box-chat-containers[chatid='" + lastSelectedUserId + "']");
        selectedChat.style.display = "flex";
    }
});
