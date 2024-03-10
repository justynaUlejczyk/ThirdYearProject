

document.addEventListener('DOMContentLoaded', (event) => {
    const videoElement = document.getElementById('localVideo');

    const constraints = {
        video:false,
        audio:false,
    };
    // Constraints for the media stream. Here, we're just asking for video

    const join = document.getElementById('join');

    // Add an event listener for the 'click' event
    myButton.addEventListener('click', function() {
        const constraints = {
            video: true,
            audio:true,
        };
    });

    // Request access to the media devices
    navigator.mediaDevices.getUserMedia(constraints)
    .then((stream) => {
        // Once access is granted, set the video source to the stream
        videoElement.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing media devices.', error);
    });
});