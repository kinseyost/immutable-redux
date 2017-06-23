import io from 'socket.io-client';
const socket = io.connect(':8081');
import store from 'store.js';

socket.on('io', (action) => {
  action.io = false; // set io to false, and then dispatch
  store.dispatch(action);
});

socket.on('message', (action) => {
  store.dispatch(action);
});

socket.on('messageFromEmitter', (action) => {
  socket.emit('emit', action);
});

const ioMiddleware = () => next => action => {
  if (action.io) {
    socket.emit('io', action);
  }
  return next(action);
};

export default ioMiddleware;
