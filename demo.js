let randomNumber;
let attempts = 0;
let gameOver = false;

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submitGuess');
const feedback = document.getElementById('feedback');
const attemptsDisplay = document.getElementById('attempts');
const resetButton = document.getElementById('resetGame');

// Start a new game
function startNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    feedback.textContent = '';
    guessInput.value = '';
    attemptsDisplay.textContent = attempts;
    submitButton.disabled = false;
    resetButton.style.display = 'none';
}

// Handle the guess submission
function submitGuess() {
    if (gameOver) return;

    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess === randomNumber) {
        feedback.textContent = `Congratulations! You guessed the number ${randomNumber} in ${attempts} attempts.`;
        feedback.style.color = 'green';
        gameOver = true;
        submitButton.disabled = true;
        resetButton.style.display = 'inline-block';
    } else if (userGuess > randomNumber) {
        feedback.textContent = 'Too high! Try again.';
        feedback.style.color = 'red';
    } else {
        feedback.textContent = 'Too low! Try again.';
        feedback.style.color = 'red';
    }

    attemptsDisplay.textContent = attempts;
}

// Event listeners
submitButton.addEventListener('click', submitGuess);
resetButton.addEventListener('click', startNewGame);

// Start the first game
startNewGame();
