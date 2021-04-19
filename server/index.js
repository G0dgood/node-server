const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors')
var server = http.Server(app);

// var io =  module.exports.io = require('socket.io')(server);
const io = module.exports.io = require("socket.io")(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true
  }
});

const SocketManager = require('./SocketManager');
app.use(cors())



const port = process.env.PORT || 3231


io.on('connection', SocketManager);

server.listen(port, () => {
	console.log(`Server started on port ${port}`);
});


module.exports = io