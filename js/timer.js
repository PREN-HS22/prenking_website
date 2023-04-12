function startTimer() {
    
// Set the countdown time to 4 minutes from now
const countDownDate = new Date().getTime() + 4 * 60 * 1000;

// Update the countdown every 1 second
const x = setInterval(function() {

  // Get today's date and time
  const now = new Date().getTime();

  // Calculate the distance between now and the countdown date
  const distance = countDownDate - now;

  // Time calculations for minutes and seconds
  const minutes = Math.floor(distance / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="timer"
  document.getElementById("countdown").innerHTML = minutes + ":" + seconds;

  // If the countdown is finished, display "EXPIRED"
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

}
   
   