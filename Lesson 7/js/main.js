let soup = "chicken noodle soup";
let reply;
let customerIsBanned = false;
let crackers = true;

if (customerIsBanned)
{
    reply = "No soup for you!";
}
else if (soup && crackers)
{
    reply = `Here's your order of ${soup} & crackers`;
} 
else if (soup)
{
    reply = `Here's your order of ${soup}`;
}
else
{
    reply = "Sorry, we're out of soup.";
}
console.log(reply);



let testScore = 89;
let collegeStudent = true;
let grade;

if(testScore >= 90)
{
    grade = 'A';
}
else if(testScore >= 80)
{
    grade = 'B';
}
else if(testScore >= 70)
{
    grade = 'C';
}
else if(testScore >= 80)
{
    grade = 'D';
}
else
{
    if (collegeStudent)
    {
        grade = 'U';
    }
    else
    {
        grade = 'F';
    }
}
console.log(grade);

playerOne = "Paper";
playerTwo = "Rock";

if (playerOne === computer)
{
    console.log("Tie!");
}
else
{
    if(playerOne === "Rock")
    {
        if(PlayerTwo === "Paper")
        {
            console.log("You Lose!");
        }
        else
        {
            console.log("You Win!");
        }
    }
    else if(playerOne === "Paper")
    {
        if(PlayerTwo === "Scissors")
        {
            console.log("You Lose!");
        }
        else
        {
            console.log("You Win!");
        }
    }
    else
    {
        if(PlayerTwo === "Rock")
        {
            console.log("You Lose!");
        }
        else
        {
            console.log("You Win!");
        }
    }
}