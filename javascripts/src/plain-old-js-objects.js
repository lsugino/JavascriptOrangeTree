/* Write your code for the plain-old-js-objects-spec here */

FRUIT_BEARING_AGE = 2
MAX_AGE = 20

var createTree = function() {
  var tree = {
    age: 0,
    height: 0,
    orangeCount: 0,
    oranges: [],
    isAlive: true,
    grow: function() {
      this.age += 1
      this.height += 10
      if (this.age === FRUIT_BEARING_AGE) {
        this.orangeCount = Math.floor((Math.random()*10)+1);
        this.oranges.push(createOrange())
      }
      if (this.age > MAX_AGE) {
        this.isAlive = false
      }
    },
    dropOrange: function() {
      return this.oranges.pop()
    }
  }

  return tree
}

var createOrange = function() {
  var orange = { diameter: Math.floor((Math.random()*3)+1) }
  return orange

}

