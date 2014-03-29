function Game(id) {
  var display = new Display(id),
  keyEvents = new KeyEvents(),
  board = new Board();
  self.boardArray = [['','','',''], ['','','',''], ['','','',''], ['','','','']];
  
  self.onMove = function (moveFunc) {
    var boardBefore = self.boardArray;
    var boardAfter = moveFunc(self.boardArray);
    if (boardBefore.compare(boardAfter)) {
      self.boardArray = boardAfter;
    } else {
      self.boardArray = board.addRandom(boardAfter);
    }

    display.draw(self.boardArray);
    display.updateScore(board.score);
  }

  // THE INIT!
  self.start = function () {
    keyEvents.onUp = function () { self.onMove(board.moveUp); }
    keyEvents.onDown = function () { self.onMove(board.moveDown); }
    keyEvents.onLeft = function () { self.onMove(board.moveLeft); }
    keyEvents.onRight = function () { self.onMove(board.moveRight); }

    self.boardArray = board.addRandom(self.boardArray);
    self.boardArray = board.addRandom(self.boardArray);
    display.draw(self.boardArray);
  }

  return self;
}
