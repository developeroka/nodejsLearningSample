class Server {

    constructor () {
        this._io = null;
    }

    set io (io) {
        this._io = io;
        this.init();
    }

    get io () {
        return this._io;
    }

    init () {
        this.io.on('connect', onUserConnected);
    }

}


const onUserConnected = socket => {
    socket.on('chat message', message => {
      socket.emit('chat recieved','jiikh')
    });
};   

const server = new Server;

module.exports = server;