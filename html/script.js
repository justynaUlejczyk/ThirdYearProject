document.addEventListener('DOMContentLoaded', () => {
    const socket = io(); // Ensure you've connected to the server correctly
    const localVideo = document.getElementById('localVideo');
    const remoteVideo = document.getElementById('remoteVideo');
    let localStream;
    let peerConnection;
    const config = { 'iceServers': [{ 'urls': 'stun:stun.l.google.com:19302' }] }; // Using Google's STUN server
    const room = 'YourRoomID'; // This should be dynamically set or obtained, e.g., from user input
  
    // Join the room
    socket.emit('joinRoom', { room });
  
    // Attempt to get media from webcam
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then(stream => {
        localStream = stream;
        localVideo.srcObject = stream;
        initializePeerConnection();
      }).catch(error => console.error(error));
  
    function initializePeerConnection() {
      peerConnection = new RTCPeerConnection(config);
  
      localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
      });
  
      peerConnection.ontrack = event => {
        remoteVideo.srcObject = event.streams[0];
      };
  
      peerConnection.onicecandidate = event => {
        if (event.candidate) {
          socket.emit('candidate', { candidate: event.candidate, room });
        }
      };
  
      // Create an offer
      peerConnection.createOffer().then(offer => {
        peerConnection.setLocalDescription(offer);
        socket.emit('offer', { offer, room });
      }).catch(error => console.error(error));
    }
  
    // Listening for signaling messages
    socket.on('offer', (offer) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(offer));
      peerConnection.createAnswer().then(answer => {
        peerConnection.setLocalDescription(answer);
        socket.emit('answer', { answer, room });
      });
    });
  
    socket.on('answer', (answer) => {
      peerConnection.setRemoteDescription(new RTCSessionDescription(answer));
    });
  
    socket.on('candidate', (candidate) => {
      peerConnection.addIceCandidate(new RTCIceCandidate(candidate));
    });
  });
  