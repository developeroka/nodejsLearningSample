var express = require('express');
var http = require('http').createServer();
var io = require('socket.io')(http);



io.of('/sendmsg-nsp').on('connection', (socket) => {
   console.log('someone connected');
   io.emit('hi', 'Hello everyone!');
});



// class Server {

//     constructor () {
//         this._io = null;
//     }

//     set io (io) {
//         this._io = io;
//         this.init();
//     }

//     get io () {
//         return this._io;
//     }

//     init () {
//         this.io.on('connection', onUserConnected);
//     }

// }

// const names = ['Bear', 'Lion', 'Chicken', 'Whale', 'Fish'];

// const onUserConnected = socket => {
//     const name = names[Math.floor(names.length * Math.random())]
//     socket.on('pong from client', message => {
//         console.log(message);
//         setTimeout(() => {
//             socket.emit('ping server', `Ping from ${message}`);
//         }, 2000);
//     });
  
// };   

// const server = new Server;

// module.exports = server;