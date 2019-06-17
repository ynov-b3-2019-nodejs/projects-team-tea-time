let io = null;

exports.connect = server => {
  let connectedUsers = [];
  io = require('socket.io')(server);
  io.on('connection', socket => {
    console.log('Client connecté');
    

    socket.on('disconnect', () => {
 
      console.log('Client déconnecté');
    });

    socket.on('add_user', (data) =>{
      console.log('ajout utilisateur ');
      connectedUsers.push(data);
      io.emit('add_user', connectedUsers);
    });

    
    socket.on('send_message', (msg) => io.emit('send_message', msg));

  });
};

exports.sendEvent = (event, data) => {
  io.emit(event, data);
};
