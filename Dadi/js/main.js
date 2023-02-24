'use strict';

const playerHand = Math.floor((Math.random() * 5) + 1);
const computerHand = Math.floor((Math.random() * 5) + 1);

if(playerHand > computerHand) {
    alert("Player Wins");
} else if(computerHand > playerHand) {
    alert("Computer Wins");
} else {
    alert("Draw");
}

console.log(playerHand);
console.log(computerHand);