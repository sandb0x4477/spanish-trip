document.addEventListener("DOMContentLoaded", () => {
  // Unix timestamp (in seconds) to count down to
  var timeNow = new Date().getTime() / 1000;
  // var fiveSeconds = new Date().getTime() / 1000 + 5;
  // var fifteenSeconds = new Date().getTime() / 1000 + 15;
  var tripStart = 1583237700; //03-03-2020 22:00
  var tripEnd = 1586679000; //12-04-2020 9:10
  var counter;
  if (timeNow < tripStart) {
    counter = tripStart;
  } else {
    counter = tripEnd;
  }
  // Set up FlipDown
  var flipdown = new FlipDown(counter)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log("The countdown has ended!");
    });

  let body = document.body;
  body.classList.toggle('light-theme');
  body.querySelector("#flipdown").classList.toggle("flipdown__theme-dark");
  body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // Toggle theme
  // var interval = setInterval(() => {
  //   let body = document.body;
  //   body.classList.toggle('light-theme');
  //   body.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
  // }, 5000);
});
