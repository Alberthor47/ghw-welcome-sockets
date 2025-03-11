const express = require('express');
const cors = require('cors')
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const server = createServer(app);

app.use(cors());
app.use(express.json());

const io = new Server(server, {
  cors: {
    origin: '*',
  }
});

io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

  socket.on('message', (message) => {
    console.log('message in server: ', message);
    socket.broadcast.emit('message', message);
  });
});

server.listen(8080, () => {
  console.log('server running at http://localhost:8080');
});