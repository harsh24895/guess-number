// console.log('Done')


var guessButton = document.querySelector("#guess");
var price;
var resetButton = document.querySelector("#reset");

guessButton.addEventListener("click", decideIfWon);
resetButton.addEventListener("click", resetGame);

function resetGame() {
  var guessField = document.querySelector("#guessField");
  var lowOrHi = document.querySelector("#lowOrHi");

  randomize();
  guessField.value = "";
  lowOrHi.textContent = "";
}

function randomize() {
  price = Math.floor(Math.random() * 100) + 1;
  console.log(price);
}

function decideIfWon() {
  var guessField = document.querySelector("#guessField");
  var lowOrHi = document.querySelector("#lowOrHi");

  if (guessField.value > price) {
    lowOrHi.textContent = "too high";
  } else if (guessField.value < price) {
    lowOrHi.textContent = "too low";
  } else {
    lowOrHi.textContent = "winner";
    
  }
}

randomize();


