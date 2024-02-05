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
    console.log(userId);
    console.log(selectedChat);
    selectedChat.style.display = "flex";
}

