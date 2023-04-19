const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");


const io = new Server(server);

let count = 0;

app.use(express.static('public'));
// app.get('/', (req, res) => {
//     res.send('<h1>Hello world</h1>');
//     console.log(__dirname + '/../index.html');

//   });

  app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
    //res.sendFile('C:\repo\pren\pren-king\index.html');
  });

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('increment', () => {
    count ++

    io.emit("countUpdated", count);
  })
  console.log("count:" , count)
});


server.listen(3000, () => {
  console.log('listening on *:3000');
});