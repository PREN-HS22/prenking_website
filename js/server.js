const WebSocket = require('ws');
const fs = require('fs');

const server = new WebSocket.Server({ port: 8080 });
let data = { name: "Max Mustermann", age: 30 };
// let data = { name: "Anna Schmidt", age: 25 };

server.on('connection', function(ws) {
  ws.send(JSON.stringify(data));

  ws.on('message', function(message) {
    data = JSON.parse(message);
    fs.writeFile('data/data.json', JSON.stringify(data), (err) => {
      if (err) throw err;
      console.log('Data saved to file');
    });
  });
});
