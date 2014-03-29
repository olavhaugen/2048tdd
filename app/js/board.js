function Board() {
  var self = this;

  function Tile(value, isMerged) {
    var self = this;
    self.value = value || '';
    self.isMerged = !!isMerged;
    return self;
  }

  function fillWithEmpty(board, rowIndex) {
    var length = board[rowIndex].length;
    if (length < 4) {
      for (var j = 0; j < 4 - length; j++) {
        board[rowIndex].push(new Tile(''));
      }
    }
  }

  function addTiles(board, current, rowIndex) {
    if (current) {
      var prev = board[rowIndex][board[rowIndex].length - 1];
      if (prev && prev.value ===  current && !prev.isMerged) {
        var tile = new Tile(current * 2, true);
        self.score += tile.value;
        board[rowIndex][board[rowIndex].length - 1] = tile;
      } else{
        board[rowIndex].push(new Tile(current));
      }
    }
  }

  self.addRandom = function(board) {
    var x, y;
    var emptyPoints = [];
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        if (!board[i][j]) {
          emptyPoints.push({x: i, y: j});
        }
      }
    }
    if (emptyPoints.length > 0) {
      var cell = emptyPoints[Math.floor(Math.random()*emptyPoints.length)];
      board[cell.x][cell.y] = 2;
    }
    return board;
  };

  self.moveUp = function (board) {
    var tmpBoard = [[],[],[],[]];
    var result = [[],[],[],[]];
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        addTiles(tmpBoard, board[j][i], i);
      }
      fillWithEmpty(tmpBoard, i);
    }


    for (var i = 0; i < tmpBoard.length; i++) {
      for (var j = 0; j < tmpBoard[i].length; j++) {
        result[j][i] = tmpBoard[i][j].value;
      }
    }
    return result;
  };
  self.moveDown = function (board) {
    var tmpBoard = [[],[],[],[]];
    var result = [[],[],[],[]];
    for (var i = board.length - 1; i >= 0; i--) {
      for (var j = board[i].length - 1; j >= 0; j--) {
        addTiles(tmpBoard, board[j][i], i);
      }
      fillWithEmpty(tmpBoard, i);
    }

    for (var i = tmpBoard.length - 1; i >= 0; i--) {
      for (var j = tmpBoard[i].length - 1; j >= 0; j--) {
        result[j][i] = tmpBoard[i][tmpBoard[i].length - 1 - j].value;
      }
    }

    return result;
  };
  self.moveLeft = function (board) {
    var tmpBoard = [[],[],[],[]];
    var result = [[],[],[],[]];
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board[i].length; j++) {
        addTiles(tmpBoard, board[i][j], i);
      }
      fillWithEmpty(tmpBoard, i);
    }

    for (var i = 0; i < tmpBoard.length; i++) {
      for (var j = 0; j < tmpBoard[i].length; j++) {
        result[i][j] = tmpBoard[i][j].value;
      }
    }

    return result;
  };
  self.moveRight = function (board) {
    var tmpBoard = [[],[],[],[]];
    var result = [[],[],[],[]];
    for (var i = board.length - 1; i >= 0; i--) {
      for (var j = board[i].length - 1; j >= 0; j--) {
        addTiles(tmpBoard, board[i][j], i);
      }
      fillWithEmpty(tmpBoard, i);
    }

    for (var i = tmpBoard.length - 1; i >= 0; i--) {
      for (var j = tmpBoard[i].length - 1; j >= 0; j--) {
        result[i][j] = tmpBoard[i][tmpBoard[i].length - 1 - j].value;
      }
    }

    return result;
  };

  self.score = 0;

  return self;
}
