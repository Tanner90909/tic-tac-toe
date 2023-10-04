#START

#INITIALIZE

Create h1 element for website title
Create gameboard
Create create player1 and player2 scoreboards (names in input field so they can be changed???)(need to track wins somehow)
create restart button
create event listener for on click
create event listener for on load (load empty gameboard and empty scoreboards)(createElements function and createGameBoard function)
create 9 objects, each with a property that indicates which player (if any) has played a piece on that tile.

#FUNCTIONALITY

createElements function
function createElements(){
    create h1 element for title
    create scoreboards with input fields for usernames and games won element
    create restart button
}

createGameBoard function
function createGameBoard(){
    create gameboard itself
}

playPiece function that allows player to play piece and makes that tile unclickable

function playPiece(){
    plays piece on board according to where user clicked
    updates array with 1 of 2 values: X or O
    changes player turn to opposing player
    somehow make the tile unclickable???
    call evalWinCon function at the end of this function
}

evalWinCon function is called at the end of the playPiece function. Evaluates if there is a winner or not and displays win message.

function evalWinCon(){
    evaluates the game state according to the 8 possible win conditions
    win con possibilites - [0,1,2][0,3,6][0,4,8][1,4,7][2,5,8][3,4,5][6,7,8][2,4,6] (individual arrays or 1 big array???)
    If 1 player achieves win condition, displays PlayerX Wins!
    creates h1 element to display win message
}

MVC