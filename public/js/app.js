
  var socket = io("ws://localhost:3000");

  var zigaretten_count = 0;
  var pet_count = 0;
  var kronkorke_count = 0;
  var wert_count = 0;
 socket.on("connect", () => {
    console.log("Connected");
 })

 updateRandomNumber();
  
 setInterval(updateRandomNumber, 2000);

//  zigaretten.addEventListener('ADD-ZIGARETTE', function(e) {
//    e.preventDefault();
//         socket.emit("countUpdated", count)
//    });


function incrementZigaretten(){
    var zigaretten_value = document.getElementById('zigarette_value');
    var count =parseInt(zigaretten_value.textContent);
    count++;
    zigaretten_value.textContent = count;
}

function incrementPET(){
    var pet_value = document.getElementById('pet_value');
    var count =parseInt(pet_value.textContent);
    count++;
    pet_value.textContent = count;
}


function incrementKronkorke(){
    var kronkorke_value = document.getElementById('kronkorke_value');
    var count =parseInt(kronkorke_value.textContent);
    count++;
    kronkorke_value.textContent = count;
}

function incrementWert(){
    var wert_value = document.getElementById('wert_value');
    var count =parseInt(wert_value.textContent);
    count++;
    wert_value.textContent = count;
}


function changeStatus(){
    var status_value = document.getElementById('status_value');
    status_value.textContent = "Running..."
}

function updateRandomNumber() {
    var randomNum = Math.floor(Math.random() * 500) + 1;
    var randomNumberElement = document.getElementById("power-value");
    randomNumberElement.textContent = randomNum;
  }
  




