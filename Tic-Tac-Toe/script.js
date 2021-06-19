"use strict"
const blocks = document.querySelectorAll(".blocks");
const board = document.querySelectorAll(".board");
const inputs = document.querySelectorAll("input");
const labels = document.querySelectorAll("label");
const status = document.querySelector(".status");
const message = document.querySelector(".status p");
const restartBtn = document.querySelector("button");
restartBtn.addEventListener("click", restart);
let user = 'X', comp = 'O', usersTurn = true, initialState = true, userBlocks = [], compBlocks = [];

const winning_scenarios = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

setInputs();

board[0].addEventListener("click", (e) => {
    if (initialState) preventSelection();
    const block = e.target;
    let gameOver = false;
    if (block.innerText === "") {
        if (usersTurn) {
            block.innerText = user;
            userBlocks.push(block.getAttribute("value") - 0);
            gameOver = isGameOver("user");
            console.log(gameOver);
            if (gameOver) {
                status.classList.add("show");
                message.innerText = `${user} Won!!!`;
            }
        }

        else {
            block.innerText = comp;
            compBlocks.push(block.getAttribute("value") - 0);
            gameOver = isGameOver("comp");
            if (gameOver) {
                status.classList.add("show");
                message.innerText = `${comp} Won!!!`;

            }
        }
        usersTurn = !usersTurn;
        if (!gameOver && userBlocks.length + compBlocks.length === 9) {
            message.innerText = "Draw";
            status.classList.add("show");
        }
    }
})

function isGameOver(player) {
    let arr = player === "user" ? userBlocks : compBlocks;
    for (let i = 0; i < winning_scenarios.length; i++) {
        const allArePresent = winning_scenarios[i].every(element => arr.includes(element));
        if (allArePresent) return true;
    }
    return false;
}

function restart(e) {
    e.stopPropagation();
    status.classList.toggle("show");
    userBlocks = [];
    compBlocks = [];
    initialState = true;
    usersTurn = true;
    setInputs();
    resetBoard();

}

function resetBoard() {
    blocks.forEach(block => {
        if (block.innerText != '') block.innerText = '';
    })
}

function setInputs() {
    for (let i = 0; i < 2; i++) {
        inputs[i].addEventListener("click", setUserAndComp);
        inputs[i].style.pointerEvents = 'visible';
        labels[i].style.pointerEvents = 'visible';
    }
}

function setUserAndComp(e) {
    user = e.target.id;
    comp = user === 'X' ? 'O' : 'X';
}

function preventSelection() {
    initialState = false;
    for (let i = 0; i < 2; i++) {
        inputs[i].removeEventListener("click", setUserAndComp);
        inputs[i].style.pointerEvents = 'none';
        labels[i].style.pointerEvents = 'none';
    }
}