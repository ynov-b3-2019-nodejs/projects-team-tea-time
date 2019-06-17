let socketValue = null;
let io = null;

exports.connect = server => {
  io = require('socket.io')(server);
  io.on('connection', socket => {
    console.log('Client connecté');
    socket.on('disconnect', () => {
      console.log('Client déconnecté');
    });
    socket.on('send_message', (msg) => io.emit('send_message', msg));
  });
};

exports.sendEvent = (event, data) => {
  io.emit(event, data);
};
