const board = document.getElementById('chessboard'); //fetching the chessboard component
var patterneven = " <div class='square'></div>" ; //creating a class for every square with an even number
var patternodd = " <div class='squares'></div>" ; //creating a class for every square with an odd number

for(i=0;i<4;i++){
	board.innerHTML += patterneven.repeat(8);
	board.innerHTML += patternodd.repeat(8);
}
