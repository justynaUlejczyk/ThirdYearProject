document.addEventListener('DOMContentLoaded', () => {
  const socket = io(); // Ensure the Socket.io client is properly connected
  const localVideo = document.getElementById('localVideo');
  const remoteVideo = document.getElementById('remoteVideo');
  
  let localStream;
  let peerConnection;
  const config = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]};

  if (!localVideo) {
    console.error('localVideo element not found');
    return;
  }

  // Access the camera and microphone, then display the local video stream
  navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then(stream => {
      localStream = stream;
      localVideo.srcObject = stream;
      localVideo.muted = true; // Mute to avoid feedback in local testing

    });

  // Join a predefined room
  const room = '1';
  socket.emit('joinRoom', { room });

  function initializePeerConnection() {
    peerConnection = new RTCPeerConnection(config);

    // Add local stream to the peer connection
    localStream.getTracks().forEach(track => {
      peerConnection.addTrack(track, localStream);
    });

    // Listen for remote stream
    peerConnection.ontrack = event => {
      remoteVideo.srcObject = event.streams[0];
    };

    // Send any ice candidates to the other peer
    peerConnection.onicecandidate = event => {
      if (event.candidate) {
        socket.emit('candidate', { candidate: event.candidate, room });
      }
    };

    // Upon receiving an offer, set it as the remote description, and create an answer
    socket.on('offer', (offer) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(offer))
        .then(() => peerConnection.createAnswer())
        .then(answer => {
          peerConnection.setLocalDescription(answer);
          socket.emit('answer', { answer, room });
        })
        .catch(error => console.error('Error handling offer:', error));
    });

    // When an answer is received, set it as the remote description
    socket.on('answer', (answer) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });

    // Handle incoming ICE candidates
    socket.on('candidate', (candidate) => {
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });

    // Create an offer if the local stream is ready
    if (localStream) {
      peerConnection.createOffer()
        .then(offer => {
          return peerConnection.setLocalDescription(offer);
        })
        .then(() => {
          socket.emit('offer', { offer: peerConnection.localDescription, room });
        })
        .catch(error => console.error('Error creating an offer:', error));
    }
  }
});
