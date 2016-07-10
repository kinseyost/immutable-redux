import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
import { userModel } from './models';

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const host = process.env.IP;

// TODO store and retreive user data from mongo

io.on('connection', (socket) => {
  console.log('client connected');
});

server.listen(8081, function(){
  console.log(`listening on :8081`);
});

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to mongodb');
});
