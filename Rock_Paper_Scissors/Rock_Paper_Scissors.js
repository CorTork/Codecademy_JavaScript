/* Takes user input of rock, paper, or scissors makes it lowercase and returns the input. If anything other than rock,
    paper, or scissors is used, prompts user to input one of the three */ 
const getUserChoice  = userInput => {
  userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput
      } else {
  console.log('Please choose rock, paper, scissors, or bomb');
  }
};

// Generates a random number for the computer to choose rock, paper, or scissors 
const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch(randomNumber) {
    case 0:
      return 'rock';
    case 1:
      return 'paper';
    case 2:
      return 'scissors';
    }
  
};

// Determines whether the user or computer wins
const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
        return 'This game is a tie.';
      } else if (userChoice === 'bomb') {
        return 'You annhilated the computer!!!';
      } else if ((userChoice === 'rock' && computerChoice === 'paper') ||
                (userChoice === 'paper' && computerChoice === 'scissors') ||
                (userChoice === 'scissors' && computerChoice === 'rock')) {
                 return 'The computer won.'
                } else {
        return 'You Win!';
      } 
      
}

// Plays the game
const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
  console.log(`User chose ${userChoice} and the computer chose ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();