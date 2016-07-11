export function saveRSVP(socket) {
  return socket.on('saveRSVP', () =>{
    console.log('saving user');
  });
}
