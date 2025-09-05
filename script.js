let secretNumber = Math.floor(Math.random() * 100) ;
let attempts = 0;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  const attemptsDisplay = document.getElementById("attempts");

  if (isNaN(guess)) {
    feedback.textContent = "Please Enter a number.";
    return;
  }

  attempts++;
  attemptsDisplay.textContent = `Attempts: ${attempts}`;

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
  } else if (guess < secretNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
}



