var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var host = process.env.IP;
var mongoose = require('mongoose');


io.on('connection', (socket) => {
  console.log('client connected');
});


http.listen(8081, function(){
  console.log(`listening on :8081`);
});

mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});
