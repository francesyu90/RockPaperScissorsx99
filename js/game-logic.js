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

const VALID_MOVE_TYPES = ['rock', 'paper', 'scissors'];

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