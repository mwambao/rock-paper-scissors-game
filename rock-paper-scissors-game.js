/*
Rock Paper Scissors game

This is a game between a player and the computer, where both will make a random
selection of either Rock, Paper, or Scissors (alternatively, you could create a version
using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and
Scissors will beat out Paper. You can use JavaScript to create your own version of
this game, applying the logic with an if statement. Since this project is a little more
difficult, here are some suggested steps:

1. Create an array that contains the variables Rock, Paper, and Scissors.

2. Set up a variable that generates a random number 0-2 for the player and then
do the same for the computer's selection. The number represents the index
values in the array of the 3 items.

3. Create a variable to hold a response message to the user. This can show the
random results for the player and then also the result for the computer of the
matching item from the array.

4. Create a condition to handle the player and computer selections. If both are
the same, this results in a tie.

5. Use conditions to apply the game logic and return the correct results.
There are several ways to do this with the condition statements, but you
could check which player's index value is bigger and assign the victory
accordingly, with the exception of Rock beating Scissors.

6. Add a new output message that shows the player selection versus the
computer selection and the result of the game.

*/

myArray = ['rock', 'paper','scissors'];
console.log(myArray);

//random number for player
playerRandom = Math.random();
playerRandom = playerRandom * 3;
playerRandom = Math.floor(playerRandom);
//print the players selection from the array
console.log("Player result: " + myArray[playerRandom]);

//random number for computer
computerRandom = Math.random();
computerRandom = computerRandom * 3;
computerRandom = Math.floor(computerRandom);
//print the computers selection from the array
console.log("Computer result: " + myArray[computerRandom]);



// -- The game logic --
if ( myArray[playerRandom] === myArray[computerRandom] ) {  // a tie
        console.log("It is a TIE, KEEP PLAYING!!!!")

} else if (myArray[playerRandom] === 'rock' && myArray[computerRandom] === 'scissors') {    //Player wins! rock beats scissors
    console.log("You win! " + myArray[playerRandom] + " beats " + myArray[computerRandom]);

} else if (myArray[playerRandom] === 'scissors' && myArray[computerRandom] === 'rock') {    //computer wins! rock beats scissors
    console.log("You LOSE! " + myArray[playerRandom] + " beaten by " + myArray[computerRandom]);

} else if (myArray[playerRandom] === 'scissors' && myArray[computerRandom] === 'paper') {  //Player wins! scissors beats paper
    console.log("You win! " + myArray[playerRandom] + " beats " + myArray[computerRandom]);

} else if (myArray[playerRandom] === 'paper' && myArray[computerRandom] === 'scissors') {  //Computer wins! scissors beat paper
    console.log("You LOSE! " + myArray[playerRandom] + " beaten by " + myArray[computerRandom]);

} else if (myArray[playerRandom] === 'paper' && myArray[computerRandom] === 'rock') {  //Player wins! paper beats rock
    console.log("You win! " + myArray[playerRandom] + " beats " + myArray[computerRandom]);

} else if (myArray[playerRandom] === 'rock' && myArray[computerRandom] === 'paper') {  //computer wins! paper beats rock
    console.log("You LOSE! " + myArray[playerRandom] + " beaten by " + myArray[computerRandom]);
}

