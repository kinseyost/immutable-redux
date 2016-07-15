import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
import { userModel } from './models.js';

import { saveRSVP } from './listeners.js';

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const host = process.env.IP;

// TODO store and retreive user data from mongo

io.on('connection', (socket) => {
  console.log('client connected');
  saveRSVP(socket);
  socket.on('io', action => console.log(action));
});

server.listen(8081, () => {
  console.log(`listening on :8081`);

});

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongodb');
});
