var letterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = []; 


$("#start").on("click", function() {
    alert("Let's test your psychic abilities! Press a letter on the keyboard.");

    var computerGuess = letterBank[Math.floor(Math.random() * letterBank.length)];

    document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    guessesSoFar.push(userGuess);

    document.getElementById("user-text").innerHTML = guessesSoFar;


    if (userGuess === computerGuess) {
        wins++;
        alert("Amazing! You guessed right!")
	    guessesLeft = 9; 
        guessesSoFar.length = 0;
    } else if (guessesLeft == 0){
        alert("You didn't guess correctly! Try again!")
        losses++;
	    guessesLeft = 9;
        guessesSoFar.length = 0;
    } else if (userGuess !== computerGuess) {
        guessesLeft--;
        }
    
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-left").innerHTML = guessesLeft;

    }

});