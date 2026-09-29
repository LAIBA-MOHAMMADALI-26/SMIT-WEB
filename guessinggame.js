let secretNumber = 7;

let guess = Math.floor(Math.random() * 10) + 1;

console.log("Secret number:", secretNumber);
console.log("Computer guessed:", guess);


if (guess === secretNumber) {
  console.log("Correct guess! 🎉");
} else {
  console.log("Wrong guess. Try again!");
}

