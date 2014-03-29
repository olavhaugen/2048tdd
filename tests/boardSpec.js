describe("Board", function() {
  var board, boardBefore;

  beforeEach(function () {
    boardBefore = [
          [ 2, '',  2,  4],
          [ 2,  4,  4,  2],
          ['', '', '', ''],
          [ 4, '',  4,  2]
    ];
    board = new Board();
  })

  it("moveLeft should sum numbers to the left", function() {
    var boardAfter = [
          [ 4,  4, '', ''],
          [ 2,  8,  2, ''],
          ['', '', '', ''],
          [ 8,  2, '', '']
    ];

    var board = new Board();
    var result = board.moveLeft(boardBefore);

    expect(boardAfter).toEqual(result);
  });

  it("moveRight should sum numbers to the right", function() {
    var boardAfter = [
          ['', '',  4,  4],
          ['',  2,  8,  2],
          ['', '', '', ''],
          ['', '',  8,  2]
    ];

    var board = new Board();
    var result = board.moveRight(boardBefore);

    expect(boardAfter).toEqual(result);
  });


  it("moveUp should sum numbers to upwards", function() {
    var boardAfter = [
          [ 4,  4,  2,  4],
          [ 4, '',  8,  4],
          ['', '', '', ''],
          ['', '', '', '']
    ];

    var board = new Board();
    var result = board.moveUp(boardBefore);

    expect(boardAfter).toEqual(result);
  });

  it("moveDown should sum numbers to downwards", function() {
    var boardAfter = [
          ['', '', '', ''],
          ['', '', '', ''],
          [ 4, '',  2,  4],
          [ 4,  4,  8,  4]
    ];

    var board = new Board();
    var result = board.moveDown(boardBefore);
    expect(boardAfter).toEqual(result);
  });

});
