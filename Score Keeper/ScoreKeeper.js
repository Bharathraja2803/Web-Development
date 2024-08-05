const player1PointBtn = document.querySelector("#pointToPlayer1");
const player2PointBtn = document.querySelector("#pointToPlayer2");
const player1Point = document.querySelector("#player1Score");
const player2Point = document.querySelector("#player2Score");
const winningScore = document.querySelector("#winning-score");
const startBtn = document.querySelector("#startButton");
const resetBtn = document.querySelector("#resetButton");
player1PointBtn.disabled = true;
player2PointBtn.disabled = true;
resetBtn.disabled = true;

startBtn.addEventListener("click", function () {
    if (winningScore.value === "0") {
        alert("Select the winning score");
    } else {
        winningScore.disabled = true;
        player1PointBtn.disabled = false;
        player2PointBtn.disabled = false;
        startBtn.disabled = true;
        resetBtn.disabled = false;
    }
});

resetBtn.addEventListener("click", function () {
    player1Point.innerText = "0";
    player2Point.innerText = "0";
    winningScore.value = "0";
    player1Point.style.color = "black";
    player2Point.style.color = "black";
    winningScore.disabled = false;
    startBtn.disabled = false;
    resetBtn.disabled = true;
    player1PointBtn.disabled = true;
    player2PointBtn.disabled = true;
});

function start() {
    winningScore.disabled = true;
    player1PointBtn.disabled = false;
    player2PointBtn.disabled = false;
}

function checkSetValue() {
    if (parseInt(player2Point.innerText) < parseInt(winningScore.value) && parseInt(player1Point.innerText) < parseInt(winningScore.value)) {
        return true;
    }
    return false;
}

player1PointBtn.addEventListener("click", function (e) {

    player1Point.innerText = parseInt(player1Point.innerText) + 1;
    checkWinning();

});

player2PointBtn.addEventListener("click", function (e) {

    player2Point.innerText = parseInt(player2Point.innerText) + 1;
    checkWinning();

});

function checkWinning() {
    if (parseInt(player1Point.innerText) === parseInt(winningScore.value) || parseInt(player2Point.innerText) === parseInt(winningScore.value)) {
        setWinningColor();
    }
}

function setWinningColor() {
    player1PointBtn.disabled = true;
    player2PointBtn.disabled = true;
    if (parseInt(player1Point.innerText) === parseInt(winningScore.value)) {
        player1Point.style.color = "green";
        player2Point.style.color = "red";
    } else {
        player1Point.style.color = "red";
        player2Point.style.color = "green";
    }
}