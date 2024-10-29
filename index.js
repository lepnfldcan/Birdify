var numberOfDrumButtons = document.querySelectorAll(".drum").length;

var birdSounds = {
  w: new Audio("sounds/cardinal.mp3"),
  a: new Audio("sounds/sparrow.wav"),
  s: new Audio("sounds/robin.mp3"),
  d: new Audio("sounds/starling.mp3"),
  j: new Audio("sounds/bluejay.mp3"),
  k: new Audio("sounds/swallow.wav"),
  l: new Audio("sounds/mockingbird.mp3"),
};

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    var birdSound = birdSounds[buttonInnerHTML];

    if (birdSound) {
      if (birdSound.paused) {
        birdSound.play();
      } else {
        birdSound.pause();
        birdSound.currentTime = 0;
      }

      this.classList.add("pressed");

      setTimeout(() => this.classList.remove("pressed"), 100);
    } else {
      console.log("No sound mapped for this button:", buttonInnerHTML);
    }
  });
  document.addEventListener("keydown", function (event) {
    var keyPressed = event.key.toLowerCase(); // Ensure lowercase
    var birdSound = birdSounds[keyPressed]; // Access the correct sound

    if (birdSound) {
      // Play the sound
      if (birdSound.paused) {
        birdSound.play();
      } else {
        birdSound.pause();
        birdSound.currentTime = 0;
      }

      // Optional: Add visual feedback for button press
      var button = document.querySelector("." + keyPressed);
      if (button) {
        button.classList.add("pressed");
        setTimeout(() => button.classList.remove("pressed"), 100);
      }
    } else {
      console.log("No sound mapped for this key:", keyPressed);
    }
  });
}
