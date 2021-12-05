const board = document.getElementById('chessboard');
var patterneven = " <div class='square'></div>" ;
var patternodd = " <div class='squares'></div>" ;

for(i=0;i<4;i++){
	board.innerHTML += patterneven.repeat(8);
	board.innerHTML += patternodd.repeat(8);
}
