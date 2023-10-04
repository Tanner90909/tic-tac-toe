function createElements(){
    const app = document.getElementById("app");

    const title = document.createElement("h1");
    title.textContent = "Tic-Tac-Toe";
    app.appendChild(title);

    const player1NameInput = document.createElement("input");
    app.appendChild(player1NameInput);

    const player1Score = document.createElement("p")
    player1Score.textContent = "Games won:";
    app.appendChild(player1Score);

    const player2NameInput = document.createElement("input");
    app.appendChild(player2NameInput);

    const player2Score =  document.createElement("p");
    player2Score.textContent = "Games won:";
    app.appendChild(player2Score);

    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Game";
    app.appendChild(restartButton);

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("container");
    app.appendChild(gameBoard);

    for (let i=0; i<=9; i++){
    const tiles = createTiles(i);
    gameBoard.appendChild(tiles);
    }
}

function createTiles(){
    const tileElement = document.createElement("div");
    tileElement.textContent = "hello";
    return tileElement;
}

document.addEventListener("DOMContentLoaded", createElements);