// HTML-DOM > Click on paragraph 'Play Now!'
document.getElementById('playNow').addEventListener('click', computerPlay)

// Randomly returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function computerPlay() {

  let randomNumber = Math.floor(Math.random() * 3 + 1);

  switch (randomNumber) {
    case 1:
      console.log('Rock');
      return ('Rock');
      break;
    case 2:
      console.log('Paper');
      return ('Paper');
      break;
    case 3:
      console.log('Scissors');
      return ('Scissors');
      break;
  }
}