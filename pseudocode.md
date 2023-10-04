#START

#INITIALIZE

Create h1 element for website title
Create gameboard
Create create player1 and player2 scoreboards (names in input field so they can be changed???)
create restart button
create event listener for on click
create event listener for on load (load empty gameboard and empty scoreboards)(newGame function?)
create an array that indicates whether each tile has been played on or not
create an array that indicates which piece (X or O) is in which tile (0-8 index) (key value pairs???)


#FUNCTIONALITY

newGame function that loads all initial elements on the page

function newGame(){
    loads elements to screen
    elements needed: h1 title - an h1 html element
     2 scoreboards (1 for each player) - container? with input field for player name and displays p element that shows games won by respective player.
    gameboard - div for the board as a whole, 9 divs for each tile inside of the board div. (attach index number to each div respective to their position on gameboard)
    restart button - button element that calls function on click
}

playPiece function that allows player to play piece and makes that tile unclickable

function playPiece(){
    
}
