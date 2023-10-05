function createElements(){
    const app = document.getElementById("app");

    // const container1 = document.createElement("div");
    // container1.classList.add("container");
    // app.appendChild(container1);

    // const row1 = document.createElement("div");
    // row1.classList.add("row");
    // container1.appendChild(row1);

    // const col1 = document.createElement("div");
    // col1.classList.add("col-4");
    // row1.appendChild(col1);

    // const col2 = document.createElement("div");
    // col1.classList.add("col-4");
    // row1.appendChild(col2);

    // const container2 = document.createElement("div");
    // container2.classList.add("container");
    // col2.appendChild(container2);

    // const row2 = document.createElement("div");
    // row1.classList.add("row");
    // container2.appendChild(row2);
    
    // const innerCol0 = document.createElement("div");
    // innerCol0.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol0);

    // const innerCol1 = document.createElement("div");
    // innerCol1.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol1);

    // const innerCol2 = document.createElement("div");
    // innerCol2.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol2);

    // const innerCol3 = document.createElement("div");
    // innerCol3.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol3);

    // const innerCol4 = document.createElement("div");
    // innerCol4.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol4);

    // const innerCol5 = document.createElement("div");
    // innerCol5.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol5);

    // const innerCol6 = document.createElement("div");
    // innerCol6.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol6);

    // const innerCol7 = document.createElement("div");
    // innerCol7.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol7);

    // const innerCol8 = document.createElement("div");
    // innerCol8.classList.add("col-4");
    // innerCol0.textContent = "hello";
    // row2.appendChild(innerCol8);

    // const col3 = document.createElement("div");
    // col1.classList.add("col-4");
    // row1.appendChild(col3);
    //}

    const title = document.createElement("h1");
    title.classList.add("d-flex", "justify-content-center", "mt-5");
    title.textContent = "Tic-Tac-Toe";
    app.appendChild(title);

    const inputRow = document.createElement("div");
    inputRow.classList.add("row");
    app.appendChild(inputRow);

    const player1NameInput = document.createElement("input");
    player1NameInput.classList.add("col-3", "ms-5");
    player1NameInput.placeholder = "Player 1";
    inputRow.appendChild(player1NameInput);

    const player1Score = document.createElement("p");
    player1Score.classList.add("ms-5");
    player1Score.textContent = "Games won:";
    inputRow.appendChild(player1Score);

    const player2NameInput = document.createElement("input");
    player2NameInput.classList.add("col-3", "ms-5");
    player2NameInput.placeholder = "Player 2";
    inputRow.appendChild(player2NameInput);

    const player2Score =  document.createElement("p");
    player2Score.classList.add("ms-5");
    player2Score.textContent = "Games won:";
    inputRow.appendChild(player2Score);

    const gameBoard = document.createElement("div");
    gameBoard.classList.add("container", "row");
    app.appendChild(gameBoard);

    for (let i=0; i<=8; i++){
    const tiles = createTiles(i);
    gameBoard.appendChild(tiles);
    }

    const buttonRow = document.createElement("div");
    buttonRow.classList.add("row", "justify-content-center");
    app.appendChild(buttonRow);

    const restartButton = document.createElement("button");
    restartButton.classList.add("col-2", "justify-content-center", "py-2")
    restartButton.textContent = "Restart Game";
    buttonRow.appendChild(restartButton);

}

function createTiles(){
    const tileElement = document.createElement("div");
    tileElement.classList.add("col-4", "justify-content-center", "py-5", );
    tileElement.textContent = "hello";
    return tileElement;
}

document.addEventListener("DOMContentLoaded", createElements);