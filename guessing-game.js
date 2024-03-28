function guessingGame(num) {
    // get num between 0-100
    const target = Math.floor(Math.random() * 100);
    let hasWon = false;
    let guesses = 0;

    return function guess(num){
        //cover base case 
        if(hasWon) return 'The game is over, you already won!';
        guesses ++
        // check to see if won
        if(target === num){
            hasWon = true;
            return `You win! You found ${target} in ${guesses} guesses.`;
        }else if(target < num){
            return  `${num} is too high!`
        }else{
            return `${num} is too low!`
        }
    }
}

module.exports = { guessingGame };
