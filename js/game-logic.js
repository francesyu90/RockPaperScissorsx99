let playerOneMoveOneType,
    playerOneMoveTwoType,
    playerOneMoveThreeType;
let playerTwoMoveOneType,
    playerTwoMoveTwoType,
    playerTwoMoveThreeType;

let playerOneMoveOneValue,
    playerOneMoveTwoValue,
    playerOneMoveThreeValue;
let playerTwoMoveOneValue,
    playerTwoMoveTwoValue,
    playerTwoMoveThreeValue;

const PLAYER_ONE = 'Player One';
const PLAYER_TWO = 'Player Two';
const TIE = 'Tie';
const ROCK = 'rock';
const PAPER = 'paper';
const SCISSORS = 'scissors';

const VALID_MOVE_TYPES = [ROCK, PAPER, SCISSORS];

const checkIfInputsValid = (
    moveOneType, 
    moveOneValue, 
    moveTwoType, 
    moveTwoValue, 
    moveThreeType, 
    moveThreeValue
) => {

    //  should not set moves if a move type is missing
    if (
        !moveOneType ||
        !moveTwoType ||
        !moveThreeType 
    ) {
        return false;
    } 

    //  should not set moves if a move value is missing
    if (
        !moveOneValue ||
        !moveTwoValue ||
        !moveThreeValue 
    ) {
        return false;
    }

    //  should not set moves if an invalid move type is supplied
    if (
        !VALID_MOVE_TYPES.includes(moveOneType) ||
        !VALID_MOVE_TYPES.includes(moveTwoType) ||
        !VALID_MOVE_TYPES.includes(moveThreeType) 
    ) {
        return false;
    }

    //  should not set moves if any move values are less than one
    if (
        moveOneValue < 1 ||
        moveTwoValue < 1 ||
        moveThreeValue < 1
    ) {
        return false;
    }

    //  should not set moves if any move values are greater than 99
    if (
        moveOneValue > 99 ||
        moveTwoValue > 99 ||
        moveThreeValue > 99
    ) {
        return false;
    }

    //  should not set moves if move values sum to move than 99
    if ( (moveOneValue + moveTwoValue + moveThreeValue) > 99) {
        return false;
    }

    return true;
}

const setPlayerMoves = (
    player, 
    moveOneType, 
    moveOneValue, 
    moveTwoType, 
    moveTwoValue, 
    moveThreeType, 
    moveThreeValue
) => {

    const isValid = checkIfInputsValid(
        moveOneType, 
        moveOneValue, 
        moveTwoType, 
        moveTwoValue, 
        moveThreeType, 
        moveThreeValue
    );

    if (!isValid) {
        return;
    }

    switch(player) {
        case PLAYER_ONE: 
            playerOneMoveOneType = moveOneType;
            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeType = moveThreeType;
            playerOneMoveThreeValue = moveThreeValue;
            break;
        case PLAYER_TWO:
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeType = moveThreeType;
            playerTwoMoveThreeValue = moveThreeValue;
            break;
        default:
            return;
    }
}

const determineWinnerByMoves = (
    playerOneMoveType,
    playerOneMoveValue,
    playerTwoMoveType,
    playerTwoMoveValue
) => {

    if (
        !playerOneMoveType ||
        !playerOneMoveValue ||
        !playerTwoMoveType ||
        !playerTwoMoveValue 
    ) {
        return null;
    }

    if (playerOneMoveType !== playerTwoMoveType) {    
        if (playerOneMoveType === ROCK && playerTwoMoveType === PAPER) {
            return PLAYER_TWO;
        } else if (playerOneMoveType === ROCK && playerTwoMoveType === SCISSORS) {
            return PLAYER_ONE;
        } else if (playerOneMoveType === PAPER && playerTwoMoveType === ROCK) {
            return PLAYER_ONE;
        } else if (playerOneMoveType === PAPER && playerTwoMoveType === SCISSORS) {
            return PLAYER_TWO;
        } else if (playerOneMoveType === SCISSORS && playerTwoMoveType === PAPER) {
            return PLAYER_ONE;
        } else {
            return PLAYER_TWO;
        }
    } else if (playerOneMoveValue !== playerTwoMoveValue) {
        return (playerOneMoveValue > playerTwoMoveValue)? PLAYER_ONE : PLAYER_TWO;
    } else {
        return TIE;
    }
}

const getRoundWinner = (roundNumber) => {

    switch(roundNumber) {
        case 1:
            return determineWinnerByMoves(
                playerOneMoveOneType,
                playerOneMoveOneValue,
                playerTwoMoveOneType,
                playerTwoMoveOneValue
            );
        case 2:
            return determineWinnerByMoves(
                playerOneMoveTwoType,
                playerOneMoveTwoValue,
                playerTwoMoveTwoType,
                playerTwoMoveTwoValue
            );
        case 3:
            return determineWinnerByMoves(
                playerOneMoveThreeType,
                playerOneMoveThreeValue,
                playerTwoMoveThreeType,
                playerTwoMoveThreeValue
            );
        default:
            return null;
    }
}

const getGameWinner = () => {

    let playerOneScore = 0;
    let playerTwoScore = 0;

    for(let i = 1; i <= 3; i++) {

        const result = getRoundWinner(i);

        switch(result) {
            case PLAYER_ONE:
                playerOneScore++;
                break;
            case PLAYER_TWO:
                playerTwoScore++;
                break;
            case TIE:
                break;
            default: return null;
        }
    }

    if (playerOneScore > playerTwoScore) {
        return PLAYER_ONE;
    } else if (playerOneScore < playerTwoScore) {
        return PLAYER_TWO;
    } else {
        return TIE;
    }
}

const generateRandomNumber = (maxNumber) => {
    return Math.floor((Math.random() * maxNumber) + 1);
}

const determineMoveType = () => {

    const number = generateRandomNumber(3);

    switch(number) {
        case 1: 
            return PAPER;
        case 2:
            return SCISSORS;
        case 3:
            return ROCK;
        default:
            return null;
    }
}

const setComputerMoves = () => {

    playerTwoMoveOneType = determineMoveType();
    playerTwoMoveTwoType = determineMoveType();
    playerTwoMoveThreeType = determineMoveType();

    playerTwoMoveOneValue = generateRandomNumber(99);
    playerTwoMoveTwoValue = generateRandomNumber(99 - playerTwoMoveOneValue);
    playerTwoMoveThreeValue = 99 - playerTwoMoveOneValue - playerTwoMoveTwoValue;
}