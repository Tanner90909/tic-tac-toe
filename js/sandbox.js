// create elements function
function createElements(){
    const app = document.getElementById("app");

    // h1 element
    const title = document.createElement("h1");
    title.classList.add("d-flex", "justify-content-center", "mt-5");
    title.textContent = "Tic-Tac-Toe";
    app.appendChild(title);

    // row for input elements
    const inputRow = document.createElement("div");
    inputRow.classList.add("row", "pt-5", "justify-content-center");
    app.appendChild(inputRow);

    // input element 1
    const player1NameInput = document.createElement("input");
    player1NameInput.classList.add("col-3", "ms-5", "rounded-pill");
    player1NameInput.placeholder = "Player 1";
    inputRow.appendChild(player1NameInput);

    // input element 2
    const player2NameInput = document.createElement("input");
    player2NameInput.classList.add("col-3", "ms-5", "rounded-pill");
    player2NameInput.placeholder = "Player 2";
    inputRow.appendChild(player2NameInput);

    // row for gameboard tiles
    const gameBoard = document.createElement("div");
    gameBoard.classList.add("row", "mx-auto", "pt-5");
    app.appendChild(gameBoard);

    // for loop to make 9 tiles
    for (let i=0; i<=8; i++){
    const tiles = createTiles(i);
    gameBoard.appendChild(tiles);
    }

    //row for button element
    const buttonRow = document.createElement("div");
    buttonRow.classList.add("row", "justify-content-center", "pt-3");
    app.appendChild(buttonRow);

    // button element
    const restartButton = document.createElement("button");
    restartButton.classList.add("col-2", "justify-content-center", "py-2", "rounded-pill")
    restartButton.textContent = "Restart Game";
    restartButton.addEventListener("click", restartGame);
    buttonRow.appendChild(restartButton);

}

// create tiles function
function createTiles(index){
    const tileElement = document.createElement("button");
    tileElement.classList.add("col-4", "py-5", "text-center", "tiles");
    tileElement.id = index;
    tileElement.addEventListener("click", playPiece);
    return tileElement;
}

// restart game function
function restartGame(){
    for (let i=0; i<=8; i++){
        let tileElement = document.getElementById(i);
        tileElement.textContent = "";
        tileElement.addEventListener("click", playPiece);
    }
}

document.addEventListener("DOMContentLoaded", createElements);

let turnPlayer = true;

let player1Pieces = [];
let player2Pieces = [];

let possibleWinCons = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

// eval win con function
function evalWinCon(){
    const app = document.getElementById("app");
    for (let i=0; i<possibleWinCons.length; i++){
        const winCon = possibleWinCons[i];
        const index0 = winCon[0];
        const index1 = winCon[1];
        const index2 = winCon[2];

        if (player1Pieces.includes(index0) && player1Pieces.includes(index1) && player1Pieces.includes(index2)){
            const player1Winner = document.createElement("div");
            player1Winner.classList.add("col-12");
            player1Winner.textContent = "You Win!!!";
            app.appendChild(player1Winner);
        } else if (player2Pieces.includes(index0) && player2Pieces.includes(index1) && player2Pieces.includes(index2)){
            const player2Winner = document.createElement("div");
            player2Winner.classList.add("col-12");
            player2Winner.textContent = "You Win!!!";
            app.appendChild(player2Winner);
        }
    }
}

// play piece function
function playPiece(event){
    const tileElement = event.target;
    const tileIndex = parseInt(tileElement.id);
    if (turnPlayer === true){
        tileElement.textContent = "X";
        player1Pieces.push(tileIndex);
        tileElement.removeEventListener("click", playPiece);
    } else {
        tileElement.textContent = "O";
        player2Pieces.push(tileIndex);
        tileElement.removeEventListener("click", playPiece);
    }
    turnPlayer = !turnPlayer;
    evalWinCon();
}




