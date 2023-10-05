function createElements(){
    const app = document.getElementById("app");

    const title = document.createElement("h1");
    title.classList.add("d-flex", "justify-content-center", "mt-5");
    title.textContent = "Tic-Tac-Toe";
    app.appendChild(title);

    const inputRow = document.createElement("div");
    inputRow.classList.add("row", "pt-5", "justify-content-center");
    app.appendChild(inputRow);

    const player1NameInput = document.createElement("input");
    player1NameInput.classList.add("col-3", "ms-5", "rounded-pill");
    player1NameInput.placeholder = "Player 1";
    inputRow.appendChild(player1NameInput);

    const player2NameInput = document.createElement("input");
    player2NameInput.classList.add("col-3", "ms-5", "rounded-pill");
    player2NameInput.placeholder = "Player 2";
    inputRow.appendChild(player2NameInput);

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("row", "mx-auto", "pt-5");
    app.appendChild(gameBoard);

    for (let i=0; i<=8; i++){
    const tiles = createTiles(i);
    gameBoard.appendChild(tiles);
    }

    const buttonRow = document.createElement("div");
    buttonRow.classList.add("row", "justify-content-center", "pt-3");
    app.appendChild(buttonRow);

    const restartButton = document.createElement("button");
    restartButton.classList.add("col-2", "justify-content-center", "py-2", "rounded-pill")
    restartButton.textContent = "Restart Game";
    buttonRow.appendChild(restartButton);

}

function createTiles(index){
    const tileElement = document.createElement("button");
    tileElement.classList.add("col-4", "py-5", "text-center", "tiles");
    tileElement.id = index;
    tileElement.addEventListener("click", playPiece);
    return tileElement;
}

document.addEventListener("DOMContentLoaded", createElements);

let turnPlayer = true;

let player1Pieces = [];
let player2Pieces = [];

function playPiece(event){
    const tileElement = event.target;
    const tileIndex = tileElement.id;
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
}

function evalWinCon(){

}
