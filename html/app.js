const localVideo = document.getElementById('localVideo');
const remoteVideo = document.getElementById('remoteVideo');
const startButton = document.getElementById('startButton');
const hangupButton = document.getElementById('hangupButton');
const muteButton = document.getElementById('muteButton');

let isAudioMuted = false;
let localStream = null;
let peerConnection;
const configuration = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }] };
const ws = new WebSocket('ws://localhost:3000');

// Initialize the WebSocket connection.
ws.onmessage = function (message) {
    const data = JSON.parse(message.data);
    handleSignalingData(data);
};

function sendMessage(data) {
    ws.send(JSON.stringify(data));
}

// Function to handle incoming signaling data
async function handleSignalingData(data) {
    switch (data.type) {
        case 'offer':
            await createAnswer(data.offer);
            break;
        case 'answer':
            await peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
            break;
        case 'ice-candidate':
            if (data.candidate) {
                await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
            }
            break;
    }
}

// Creating an answer
async function createAnswer(offer) {
    let connectedUser = offer.name;
    await peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
    const answer = await peerConnection.createAnswer();
    await peerConnection.setLocalDescription(answer);
    sendMessage({ type: 'answer', answer: answer, name: connectedUser });
}

// Function to start the call
async function start() {
    startButton.disabled = true;
    hangupButton.disabled = false;

    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    peerConnection = new RTCPeerConnection(configuration);

    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.onicecandidate = event => {
        if (event.candidate) {
            sendMessage({ type: 'ice-candidate', candidate: event.candidate });
        }
    };

    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    sendMessage({ type: 'offer', offer: offer });
}

// Function to end the call
function hangup() {
    peerConnection.close();
    localStream.getTracks().forEach(track => track.stop());
    startButton.disabled = false;
    hangupButton.disabled = true;
}

function toggleMute() {
    if (!localStream) {
        return;
    }

    // Toggle the enabled state of all audio tracks
    localStream.getAudioTracks().forEach(track => {
        track.enabled = !track.enabled;
    });

    isAudioMuted = !isAudioMuted;
    muteButton.textContent = isAudioMuted ? 'Unmute' : 'Mute';  // Update button text
}


// Adding click event listeners to buttons
startButton.addEventListener('click', start);
hangupButton.addEventListener('click', hangup);
muteButton.addEventListener('click', toggleMute);
