let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;


// Write your code below:

const generateTarget = (targetNumber) => {
    return (Math.floor(Math.random() * 10))
};

const compareGuesses = (humanGuess, computerGuess, targetNumber) => {
    const humanScoreDifference = Math.abs(targetNumber - humanGuess);
    const computerScoreDifference = Math.abs(targetNumber - computerGuess);
    
    // determine who won
    if (humanScoreDifference < computerScoreDifference) {
        return true;
    }
    else if (computerScoreDifference < humanScoreDifference) {
        return false;
    }
    else {
        return true;
    }
}

const updateScore = (winnerIs) => {
    if (winnerIs === 'human') {
        humanScore++;
    }
    else if (winnerIs === 'computer') {
        computerScore++;
    }
}

const advanceRound = () => {
    currentRoundNumber++;
    return currentRoundNumber;
}