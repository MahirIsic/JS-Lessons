let soup = "chicken noodle soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today";
console.log(response);

let isCustomerBanned = true;
let soupAccess = isCustomerBanned 
    ? "Sorry, no soup for you" 
    : soup
    ? `Yes, we have ${soup}`
    : "Sorry, we're out of soup";
console.log(soupAccess);

let testScore = 79;
let myGrade = testScore > 89 ? "A"
    : testScore > 79 ? "B"
    : testScore > 69 ? "C"
    : testScore > 59 ? "D"
    : "F";
console.log(myGrade)

let playerOne = 'rock';
let computer = 'rock';

let result = playerOne === computer
    ? "Tie Game"
    : playerOne === 'rock' && computer === 'paper'
    ? 'Computer wins!'
    : playerOne === 'paper' && computer === 'scissors'
    ? "Computer wins!"
    : playerOne === 'scissors' && computer === 'rock'
    ? "Computer wins"
    : "playerOne wins!";
console.log(result);