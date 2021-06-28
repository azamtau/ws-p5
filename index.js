const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

function onConnection(socket){
  socket.on('drawing', (data) => socket.broadcast.emit('drawing', data));
  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
}

io.on('connection', onConnection);

http.listen(port, () => console.log('listening on port ' + port));

// io.on('connect', (socket) => {
//   console.log('a user connected');
//   console.log(socket.id);

//   socket.on('move', (dx) => {
//     socket.emit('move', dx);
//     socket.broadcast.emit('move', dx);
//   })

// });
