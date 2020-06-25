var playerOne = prompt("Player One: Enter Your Name , you will be Blue");
var player1color = "rgb(86, 151, 255)";

var playerTwo = prompt("Player Two: Enter Your Name , you will be Red");
var player2color = "rgb(237, 45, 73)";

var game_on = true;
var table = $("table tr");


function changeColor(rowIndex, colIndex, colr){
  reeturn table.eq(rowIndex).find('td').eq(colIndex).find("button").css('background-color', color);
}
