// function WebSocketTest() {
            
//     if ("WebSocket" in window) {
//        alert("WebSocket is supported by your Browser!");
       
//        // Let us open a web socket
//        var ws = new WebSocket("ws://localhost:9998/echo");
        
//        ws.onopen = function() {
          
//           // Web Socket is connected, send data using send()
//           ws.send("Message to send");
//           alert("Message is sent...");
//        };
        
//        ws.onmessage = function (evt) { 
//           var received_msg = evt.data;
//           alert("Message is received...");
//        };
        
//        ws.onclose = function() { 
          
//           // websocket is closed.
//           alert("Connection is closed..."); 
//        };
//     } else {
      
//        // The browser doesn't support WebSocket
//        alert("WebSocket NOT supported by your Browser!");
//     }
//  }



// const socket = new WebSocket('wss://example.com');

// // When the connection is opened
// socket.addEventListener('open', (event) => {
// 	console.log('WebSocket connection opened');
// });

// // When a message is received
// socket.addEventListener('message', (event) => {
// 	console.log('WebSocket message received:', event.data);

// 	// Display the message in the HTML page
// 	const messagesDiv = document.getElementById('messages');
// 	messagesDiv.innerHTML += `<p>${event.data}</p>`;
// });

// // When an error occurs
// socket.addEventListener('error', (event) => {
// 	console.error('WebSocket error:', event);
// });

// // When the connection is closed
// socket.addEventListener('close', (event) => {
// 	console.log('WebSocket connection closed');
// });



// Verbindung zum WebSocket-Server öffnen
const socket = new WebSocket("ws://example.com/socket");

// Verbindung hergestellt
socket.addEventListener('open', function (event) {
    console.log('WebSocket-Verbindung hergestellt');
});

// Verbindung unterbrochen
socket.addEventListener('close', function (event) {
    console.log('WebSocket-Verbindung unterbrochen');
});

// Fehler bei der Verbindung
socket.addEventListener('error', function (event) {
    console.log('WebSocket-Fehler:', event);
});

// Nachricht vom Server empfangen
socket.addEventListener('message', function (event) {
    console.log('Nachricht vom Server:', event.data);
});


// JSON-Datei abrufen
fetch('data/data.json')
	.then(response => response.json())
	.then(data => {
		console.log('Daten empfangen:', data);
	})
	.catch(error => {
		console.error('Fehler beim Abrufen der Daten:', error);
	});

// JSON-Datei aktualisieren
const newData = {
	"name": "Max Mustermann",
	"age": 31,
	"email": "max.mustermann@example.com"
};

fetch('data/data.json', {
	method: 'PUT',
	body: JSON.stringify(newData),
	headers: {
		'Content-Type': 'application/json'
	}
})
	.then(response => response.json())
	.then(data => {
		console.log('Daten aktualisiert:', data);
	})
	.catch(error => {
		console.error('Fehler beim Aktualisieren der Daten:', error);
	});