import io from 'socket.io-client';
const socket = io.connect(':8081');

const ioMiddleware = store => next => action => {
  if (action.io) {
    socket.emit('io', action);
  }
  return next(action);
};

export default ioMiddleware;
