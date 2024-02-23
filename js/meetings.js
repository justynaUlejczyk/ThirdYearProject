const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const startButton = document.getElementById('start');
const peerConnection = new RTCPeerConnection();
let localStream = null;

// Assuming you have a WebSocket connection to your signaling server
const signalingSocket = new WebSocket('wss://your_signaling_server.example.com');

signalingSocket.onmessage = async (message) => {
    const data = JSON.parse(message.data);
    switch(data.type) {
        case 'offer':
            await peerConnection.setRemoteDescription(new RTCSessionDescription(data.offer));
            const answer = await peerConnection.createAnswer();
            await peerConnection.setLocalDescription(answer);
            signalingSocket.send(JSON.stringify({type: 'answer', answer: answer}));
            break;
        case 'answer':
            await peerConnection.setRemoteDescription(new RTCSessionDescription(data.answer));
            break;
        case 'candidate':
            if (data.candidate) {
                await peerConnection.addIceCandidate(new RTCIceCandidate(data.candidate));
            }
            break;
    }
};

async function startMeeting() {
    localStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    localVideo.srcObject = localStream;

    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });

    peerConnection.ontrack = (event) => {
        remoteVideo.srcObject = event.streams[0];
    };

    peerConnection.onicecandidate = (event) => {
        if (event.candidate) {
            signalingSocket.send(JSON.stringify({type: 'candidate', candidate: event.candidate}));
        }
    };

    if (startButton.textContent === 'Start Meeting') {
        // Create an offer and send it through the signaling server
        const offer = await peerConnection.createOffer();
        await peerConnection.setLocalDescription(offer);
        signalingSocket.send(JSON.stringify({type: 'offer', offer: offer}));
        startButton.textContent = 'In Call';
    }
}

startButton.addEventListener('click', startMeeting);
