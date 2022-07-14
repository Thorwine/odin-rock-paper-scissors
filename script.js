// HTML-DOM > click on paragraph 'Play Now!'
document.getElementById('playNow').addEventListener('click', test)

function test() {
  const playerSelection = playerPlay();
  const computerSelection = computerPlay();

  console.log(playRound(playerSelection, computerSelection));
}

// ------------------------------------------------------------------------
function playRound(playerSelection, computerSelection) {
  // Returns the result of a single round

  switch (playerSelection) {
    // Player 'Rock'
    case 'Rock':
      switch (computerSelection) {
        case 'Rock':
          return ('Draw! Rock vs. Rock');
        case 'Paper':
          return ('You lose! Paper beats Rock')
        case 'Scissors':
          return ('You win! Rock beats Scissors')
      }
    // Player 'Paper'
    case 'Paper':
      switch (computerSelection) {
        case 'Rock':
          return ('You win! Paper beats Rock');
        case 'Paper':
          return ('Draw! Paper vs. Paper');
        case 'Scissors':
          return ('You lose! Scissors beats Paper');
      }
    // Player 'Scissors'
    case 'Scissors':
      switch (computerSelection) {
        case 'Rock':
          return ('You lose! Rock beats Scissors');
        case 'Paper':
          return ('You win! Scissors beats Paper');
        case 'Scissors':
          return ('Draw! Scissors vs. Scissors');
      }
  }
}

// ------------------------------------------------------------------------
function computerPlay() {
  // Returns either ‘Rock’, ‘Paper’ or ‘Scissors’ (randomly)

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  switch (randomNumber) {
    case 1:
      return ('Rock');
      break;
    case 2:
      return ('Paper');
      break;
    case 3:
      return ('Scissors');
      break;
  }
}

// ------------------------------------------------------------------------
function playerPlay() {
  // Returns either ‘Rock’, ‘Paper’ or ‘Scissors’ (by players choice)

  let playerInput = prompt('Make your choice! Type \'Rock\', \'Paper\' or \'Scissors\'...');

  // Check if prompt is not empty
  if (!(playerInput === null)) {
    // Convert player input to lower case
    playerInput = playerInput.toLowerCase();
    // Convert first letter to upper case
    let firstLetterBig = playerInput.slice(0, 1).toUpperCase();
    // Combine first letter with player input (minus the first letter)
    playerInput = firstLetterBig + playerInput.slice(1);
  } else {
    // Promt is empty, exit game!
    console.warn('Prompt empty > cancel!')
    return;
  }

  // Check if result is false
  if (!(playerInput === 'Rock' || playerInput === 'Paper' || playerInput === 'Scissors')) {
    // False result > call prompt again!
    playerPlay();
  } else {
    // All good, return result!
    return (playerInput);
  }
}