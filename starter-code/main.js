console.log("JS file is connected to HTML! Woo!")

/*var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";

/*if (cardOne === cardTwo || cardThree === cardFour) {
	alert("You found a match!");
} else {
	alert("Sorry, try again.");
}
*/

/*var game = document.getElementById('game-board')

var createBoard = function() {
for(var i=0;i<4;i++){
	var newCard = document.createElement('div');
	newCard.className = 'card';
	game.appendChild(newCard);
	}
}

createBoard();
*/
var game = document.getElementById('game-board')

var cards = ["queen","queen","king","king"]
var cardsInPlay = []

var createBoard = function () {
	for(var i=0; i<cards.length; i++) {
		var cardElement = document.createElement('div');
		cardElement.className = 'card';
		game.appendChild(cardElement);
		cardElement.setAttribute('data-card', cards[i]);
		cardElement.addEventListener('click', isTwoCards);
	}
}

var isMatch = function() {

}


var isTwoCards = function() {
	cardsInPlay.push(this.getAttribute('data-card'));
	if (this.getAttribute('data-card')  == "queen") {
		this.innerHTML = "<img src='wdi-fundamentals-memorygame/starter-code/Queen img.jpg''>";
	}	else{
		this.innerHTML = "<img src='wdi-fundamentals-memorygame/starter-code/King img.png''>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}

createBoard();