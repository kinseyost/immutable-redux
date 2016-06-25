var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var host = process.env.IP;

io.on('connection', (socket) => {
  console.log('client connected');
});


http.listen(8081, function(){
  console.log(`listening on :8081`);
});
