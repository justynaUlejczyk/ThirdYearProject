document.addEventListener('DOMContentLoaded', () => {
  const localVideo = document.getElementById('localVideo');
  const remoteVideo = document.getElementById('remoteVideo');
  let localStream;
  let remoteStream;
  let peerConnection;
  const config = {'iceServers': [{'urls': 'stun:stun.l.google.com:19302'}]}; // Using Google's public STUN server




  // Access the camera and microphone
  navigator.mediaDevices.getUserMedia({video: true, audio: true})
    .then(stream => {
      localStream = stream;
      localVideo.srcObject = stream;
      initializePeerConnection();
    }).catch(error => console.log(error));

    const room = '1';
    socket.emit('joinRoom', { room });
  
  function initializePeerConnection() {
    peerConnection = new RTCPeerConnection(config);

    // Add stream to peer connection
    localStream.getTracks().forEach(track => {
      peerConnection.addTrack(track, localStream);
    });

    // Listen for remote stream
    peerConnection.ontrack = event => {
      remoteStream = event.streams[0];
      remoteVideo.srcObject = remoteStream;
    };


    // Listen for ICE candidates
    peerConnection.onicecandidate = event => {
      if (event.candidate) {
        socket.emit('candidate', { candidate: event.candidate, room });
      }
    };

      peerConnection.createOffer().then(offer => {
        peerConnection.setLocalDescription(offer);
        socket.emit('offer', { offer, room });
      }).catch(error => console.error(error));

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

    // Simplified signaling: Assume signaling logic is implemented here
    // You would typically listen for a 'signal' event from your signaling server
    // and then call `createOffer` or `createAnswer` depending on the signal data

    // Listen for ICE candidates
    peerConnection.onicecandidate = event => {
      if (event.candidate) {
        // Send candidate to remote peer via signaling server
        console.log('New ICE candidate:', event.candidate);
      }
    };

    // Create an offer
    peerConnection.createOffer().then(offer => {
      return peerConnection.setLocalDescription(offer);
    }).then(() => {
      // Send the offer to the remote peer via the signaling server
    }).catch(error => console.log(error));
  }
});