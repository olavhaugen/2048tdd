function Display(id) {
  var display = document.getElementById(id);

  return {
    draw: function (board) {
      var row;
      for (var i = 0; i < board.length; i++) {
        row = display.getElementsByClassName("row")[i];
        for (var j = 0; j < board[i].length; j++) {
          row.getElementsByClassName("cell")[j].className = "cell " + "cell-" + board[i][j]
        }
      }
    },
    updateScore: function (score) {
      document.getElementById("score").innerHTML = score;
    }
  }
}
