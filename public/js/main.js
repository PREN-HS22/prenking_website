var socket = io("ws://localhost:3000");

socket.on("connect", () => {
  console.log("Connected");

  socket.on('updated', ({ token, event, text, status, timestamp, power, totalPower, count }) => {
    // Update the status value on the HTML page
    var statusElement = document.getElementById('status_value');
    statusElement.textContent = status;

    var powerElement = document.getElementById('power_value');
    var totalPowerElement = document.getElementById('totalpower_value');
    powerElement.textContent = power;
    
    var currentTotalPower = parseFloat(totalPowerElement.textContent);
    var newTotalPower = currentTotalPower + parseFloat(power);
    totalPowerElement.textContent = newTotalPower;
    
    switch (event) {
      case "ADD_PET":
        var petCount = document.getElementById('pet_value');
        var count_pet = parseInt(petCount.textContent) + 1;
        petCount.textContent = count_pet;
        break;
      case "ADD_ZIGARETTE":
        var zigaretteCount = document.getElementById('zigarette_value');
        var count_zigarette = parseInt(zigaretteCount.textContent) + 1;
        zigaretteCount.textContent = count_zigarette;
        break;
      case "ADD_KRONKORKE":
        var kronkorkeCount = document.getElementById('kronkorke_value');
        var count_kronkorke = parseInt(kronkorkeCount.textContent) + 1;
        kronkorkeCount.textContent = count_kronkorke;
        break;
      case "ADD_WERT":
        var wertCount = document.getElementById('wert_value');
        var count_wert = parseInt(wertCount.textContent) + 1;
        wertCount.textContent = count_wert;
        break;
      default:
        break;
    }
  });
});