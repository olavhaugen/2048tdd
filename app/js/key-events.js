function KeyEvents() {
  var self = this;

  self.onLeft = function () {};
  self.onRight = function () {};
  self.onUp = function () {};
  self.onDown = function () {};

  document.onkeydown = function (e) {
    if (e.keyCode === 37) { self.onLeft(); }
    if (e.keyCode === 38) { self.onUp(); }
    if (e.keyCode === 39) { self.onRight(); }
    if (e.keyCode === 40) { self.onDown(); }
  }

  return self;
}
