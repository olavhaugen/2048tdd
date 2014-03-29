// Compare two arrays - from: http://stackoverflow.com/a/14853974
Array.prototype.compare = function (array) {
  if (!array)
  return false;

  if (this.length != array.length)
  return false;

  for (var i = 0, l=this.length; i < l; i++) {
    if (this[i] instanceof Array && array[i] instanceof Array) {
      if (!this[i].compare(array[i]))
      return false;
    }
    else if (this[i] != array[i]) {
      return false;
    }
  }
  return true;
}
