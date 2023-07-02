var socket = io("ws://localhost:3000");

socket.on("connect", () => {
  console.log("Connected");

  var countdownElement = document.getElementById('countdown');
  var statusElement = document.getElementById('status_value');
  var debugElement = document.getElementById('debug_value');
  var textElement = document.getElementById('text_value');
  var powerElement = document.getElementById('power_value');
  var totalPowerElement = document.getElementById('totalpower_value');
  var countdownDuration = 240; // 4 minutes in seconds
  var countdownInterval;

  socket.on("updated", ({ token, event, text, status, timestamp, power, debug_text }) => {
    statusElement.textContent = status;
    debugElement.textContent = debug_text;
    textElement.textContent = text;
    powerElement.textContent = power;
    
    var currentTotalPower = parseFloat(totalPowerElement.textContent);
    var newTotalPower = currentTotalPower + parseFloat(power);
    totalPowerElement.textContent = newTotalPower;

    if (power !== null) {
      if (!countdownInterval) {
        var countdownTime = countdownDuration;
        countdownInterval = setInterval(() => {
          var minutes = Math.floor(countdownTime / 60);
          var seconds = countdownTime % 60;
          countdownElement.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
          countdownTime--;

          if (countdownTime < 0) {
            clearInterval(countdownInterval);
            countdownInterval = null;
            countdownElement.textContent = 'Countdown finished!';
          }
        }, 1000);
      }
    }
    
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