const body = document.querySelector("body");
const heading = document.querySelector("h1");
const changeColorBtn = document.querySelector("#colorChanger")
body.classList = "content";

function changeColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let randomColor = `rgb(${red},${green},${blue})`;
    heading.innerText = randomColor;
    body.style.backgroundColor = randomColor;
}

changeColorBtn.addEventListener("click", changeColor);