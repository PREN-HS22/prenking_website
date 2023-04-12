const dataContainer = document.getElementById("data-container");
const ws = new WebSocket("ws://localhost:8080");

ws.onmessage = function(event) {
  const data = JSON.parse(event.data);
  updateData(data);
}

function updateData(data) {
  const newData = document.createElement("p");
  newData.innerHTML = "Name: " + data.name + ", Alter: " + data.age;
  dataContainer.appendChild(newData);
}
