const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const bodyParser = require('body-parser');

const io = new Server(server);

let count = 0;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post("/api", function (req, res) {
  console.log(req.body);

  // Increment the count by 1
  count++;

  // Perform necessary operations with the received data
  const { token, event, text, status, timestamp, power, debug_text } = req.body;

  // Emit an event to the connected clients with the updated count and status
  io.emit("updated", { token, event, text, status, timestamp, power, debug_text });
  
  res.send("POST request received");
});

io.on('connection', (socket) => {
  console.log('a user connected');

  console.log("Connected");
  socket.on('increment', () => {
    count++;
    
    io.emit("updated", { token, event, text, status, timestamp, power, debug_text });
  });
  console.log("count:", count);
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
