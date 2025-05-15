let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  const message = document.getElementById("message");
  const attempts = document.getElementById("attempts");

  if (isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "⚠️ Please enter a number between 1 and 100.";
    return;
  }

  attemptsLeft--;

  if (guess === randomNumber) {
    message.textContent = `🎉 Congratulations! You guessed it right: ${randomNumber}`;
    disableInput();
  } else if (attemptsLeft === 0) {
    message.textContent = `❌ Game Over! The correct number was ${randomNumber}`;
    disableInput();
  } else if (guess < randomNumber) {
    message.textContent = "📉 Too low! Try again.";
  } else {
    message.textContent = "📈 Too high! Try again.";
  }

  attempts.textContent = attemptsLeft;
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
}

function resetGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("guessInput").value = "";
  document.getElementById("guessInput").disabled = false;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = attemptsLeft;
}
