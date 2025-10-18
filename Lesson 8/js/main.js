switch (Math.floor(Math.random() * 3 + 1))
{
    case 1:
        console.log(1);
        break;
    case 2:
        console.log(2);
        break;
    default:
        console.log("No match.");
        break
}

let playerOne = "rock";
let playerTwo = "rock";

switch (playerOne) {
    case computer:
        console.log("Tie");
        break;
    case "rock":
        if (playerTwo === "paper")
        {
            console.log("computer wins");
        }
        else
        {
            console.log("You win");
        }
        break;
    case "paper":
        if (playerTwo === "scissors")
        {
            console.log("computer wins");
        }
        else
        {
            console.log("You win");
        }
        break;
    case "scissors":
        if (playerTwo === "rock")
        {
            console.log("computer wins");
        }
        else
        {
            console.log("You win");
        }
        break;
}