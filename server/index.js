var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.emit('handshake', { data: 'hello there' });
});

http.listen(3333, function(){
  console.log('listening on *:3333');
});
