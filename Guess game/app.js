let maximumNumber = parseInt(prompt("Enter the maximum number"));

while (!maximumNumber) {
    maximumNumber = parseInt(prompt("Enter the valid maximum number"));
}
console.log(`You have entered the maximum number of ${maximumNumber}`);

const randomNumber = Math.floor(Math.random() * maximumNumber) + 1;
console.log(`You have entered the maximum number of ${randomNumber}`);

let guess_number = prompt("Enter the guess number or type 'q' to quit!");
let attempt = 1;

while (parseInt(guess_number) !== randomNumber) {
    if (guess_number === 'q') {
        break;
    }
    if (parseInt(guess_number) < randomNumber) {
        console.log("Entered number is less");
        guess_number = prompt("Enter the guess number or type 'q' to quit!");
        attempt++;
    } else if (parseInt(guess_number) > randomNumber) {
        console.log("Entered number is high");
        guess_number = prompt("Enter the guess number or type 'q' to quit!");
        attempt++;
    } else {
        guess_number = prompt("Enter the valid guess number or enter 'q' to quit!");
    }

}

if (guess_number === 'q') {
    console.log(`You have quit the game in ${attempt} attempts`);
} else {
    console.log(`You have won the game in ${attempt} attempts...!`);
}

