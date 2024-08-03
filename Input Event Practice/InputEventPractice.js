const input = document.querySelector("input");
const heading = document.querySelector("h1");


input.addEventListener("input", function (e) {
    if (this.value) {
        heading.innerText = `Welcome, ${input.value}`;
    } else {
        heading.innerText = "Enter Your Username";
    }


});
