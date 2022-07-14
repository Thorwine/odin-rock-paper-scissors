// HTML-DOM > click on paragraph 'Play Now!'
document.getElementById('playNow').addEventListener('click', testFunction)

function testFunction() {
  let testVariable = playerPlay();
  console.log(testVariable);
}

// ------------------------------------------------------------------------

// const playerSelection = 'Rock';
// const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));

// ------------------------------------------------------------------------

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  switch (randomNumber) {
    case 1:
      // console.log('Rock');
      return ('Rock');
      break;
    case 2:
      // console.log('Paper');
      return ('Paper');
      break;
    case 3:
      // console.log('Scissors');
      return ('Scissors');
      break;
  }
}

// Returns either ‘Rock’, ‘Paper’ or ‘Scissors’ by players choice
function playerPlay() {
  let playerInput = prompt('Make your choice! Type \'Rock\', \'Paper\' or \'Scissors\'...');

  // Check if prompt was not empty
  if (!(playerInput === null)) {
    // Convert player input to lower case
    playerInput = playerInput.toLowerCase();
    // Convert first letter to upper case
    let firstLetterBig = playerInput.slice(0, 1).toUpperCase();
    // Combine first letter with player input (minus the first letter)
    playerInput = firstLetterBig + playerInput.slice(1);
  } else {
    // Promt was empty, exit game
    console.warn('Prompt was canceled')
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