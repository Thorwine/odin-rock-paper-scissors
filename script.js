// HTML-DOM > click on paragraph 'Play Now!'
document.getElementById('playNow').addEventListener('click', game)

// ------------------------------------------------------------------------
function game() {
  // Main game function
  // Loops through 5 rounds of the game

  let scorePlayer = 0;
  let scoreComputer = 0;
  let scoreDraw = 0;

  console.clear();

  // loop for 5 rounds
  for (let i = 0; i < 5; i++) {
    // get players choice
    const playerSelection = playerPlay();
    // get computers random choice
    const computerSelection = computerPlay();

    // get result from round
    let resultRound = playRound(playerSelection, computerSelection)

    // increase score to either player, computer or draw
    switch (resultRound) {
      // +1 for the player
      case 'plusPlayer':
        scorePlayer++;
        break;
      // +1 for the computer
      case 'plusComputer':
        scoreComputer++;
        break;
      // +1 for the draws
      case 'plusDraw':
        scoreDraw++;
        break;
    }
  }

  // get the winner + get/print win/lost message
  console.log('%c' + determineWinner(scorePlayer, scoreComputer), 'background: #222; color: #bada55');

  // print out scores
  console.log('Score Player: ' + scorePlayer);
  console.log('Score Computer: ' + scoreComputer);
  console.log('Draws: ' + scoreDraw);
}

// ------------------------------------------------------------------------
function determineWinner(scorePlayer, scoreComputer) {
  // Returns the win/lost message

  if (scorePlayer === scoreComputer) {
    return 'It\'s a draw!';
  } else if (scorePlayer > scoreComputer) {
    return 'You win the game!';
  } else if (scorePlayer < scoreComputer) {
    return 'You lost the game!';
  }
}

// ------------------------------------------------------------------------
function playRound(playerSelection, computerSelection) {
  // Returns the result of a single round

  switch (playerSelection) {
    // Player 'Rock'
    case 'Rock':
      switch (computerSelection) {
        case 'Rock':
          console.log('Draw! Rock vs. Rock');
          return 'plusDraw';
        case 'Paper':
          console.log('You lose! Paper beats Rock');
          return 'plusComputer';
        case 'Scissors':
          console.log('You win! Rock beats Scissors');
          return 'plusPlayer';
      }
    // Player 'Paper'
    case 'Paper':
      switch (computerSelection) {
        case 'Rock':
          console.log('You win! Paper beats Rock');
          return 'plusPlayer';
        case 'Paper':
          console.log('Draw! Paper vs. Paper');
          return 'plusDraw';
        case 'Scissors':
          console.log('You lose! Scissors beats Paper');
          return 'plusComputer';
      }
    // Player 'Scissors'
    case 'Scissors':
      switch (computerSelection) {
        case 'Rock':
          console.log('You lose! Rock beats Scissors');
          return 'plusComputer';
        case 'Paper':
          console.log('You win! Scissors beats Paper');
          return 'plusPlayer';
        case 'Scissors':
          console.log('Draw! Scissors vs. Scissors');
          return 'plusDraw';
      }
  }
}

// ------------------------------------------------------------------------
function computerPlay() {
  // Returns either ‘Rock’, ‘Paper’ or ‘Scissors’ (randomly)

  // generate a random Integer from 1 to 3
  let randomNumber = Math.floor(Math.random() * 3 + 1);

  // return computers 'choice'
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

  // Get players choice
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
    // Promt was canceled
    console.warn('Prompt empty')
    return;
  }

  // Check if input is false
  if (!(playerInput === 'Rock' || playerInput === 'Paper' || playerInput === 'Scissors')) {
    // False input, alert and exit
    alert('Wrong input! Type \'Rock\', \'Paper\' or \'Scissors\'...');
    process.exit(1);
  } else {
    // All good, return result!
    return (playerInput);
  }
}