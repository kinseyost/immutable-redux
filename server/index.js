/* eslint-disable no-console*/

import express from 'express';
import http from 'http';
import socketIO from 'socket.io';
import mongoose from 'mongoose';
import { userModel } from './models.js';

import { saveRSVP } from './listeners.js';

const app = express();
const server = http.Server(app);
const io = socketIO(server);
const port = 8081;

// TODO store and retreive user data from mongo

io.on('connection', (socket) => {
  console.log('client connected');
  saveRSVP(socket);
  socket.on('io', action => {
    const modifiedAction = action;
    modifiedAction.modified = 'I got modified by the server';
    console.log(modifiedAction);
    socket.emit('io', modifiedAction);
  }

);
});

server.listen(port, () => {
  console.log(`listening on :${port}`);
});

mongoose.connect('mongodb://localhost/test');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('connected to mongodb');
});
