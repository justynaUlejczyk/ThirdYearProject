const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log(`A user connected: ${socket.id}`);

  // Join a specific room
  socket.on('joinRoom', ({ room }) => {
    console.log(`${socket.id} joined room ${room}`);
    socket.join(room);
    socket.to(room).emit('userJoined', { userId: socket.id, room });
  });

  // Relay candidate messages within the room
  socket.on('candidate', ({ candidate, room }) => {
    socket.to(room).emit('candidate', candidate);
  });

  // Relay offers within the room
  socket.on('offer', ({ offer, room }) => {
    socket.to(room).emit('offer', offer);
  });

  // Relay answers within the room
  socket.on('answer', ({ answer, room }) => {
    socket.to(room).emit('answer', answer);
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    // Additional logic to handle cleanup, notifying others in the room, etc., can be added here
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
