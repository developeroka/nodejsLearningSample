class Server {

    constructor () {
        this._io = null;
        this._count =  0;
        this._chatnsp = null;
    }

    set io (io) {
        this._io = io;
        this.init();
    }

    get io () {
        return this._io;
    }

    init () {
        this._chatnsp = this._io.of('/chat-nsp');
        this._chatnsp.on('connection', onUserConnected);
    }
}


const onUserConnected = socket => {
  
    server._count = server._count + 1;
    
    if(server._count <= 2){
        socket.on('chat message', message => {
            socket.join('room1');
            server._chatnsp.in('room1').emit('chat recieved', message.name + ':' + message.message , {for : ''} );
      });
    }

    else
    {
      socket.on('chat message', message => {
          socket.join('room2');
          server._chatnsp.in('room2').emit('chat recieved', message.name + ':' + message.message  );
    });
    }

};   

const server = new Server;

module.exports = server;