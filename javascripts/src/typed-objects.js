// Write your Orange Tree code here - you may use constructor functions 
FRUIT_BEARING_AGE = 2
MAX_AGE = 15

function Tree() {
  this.age = 0
  this.height = 0
  this.orangeCount = 0
  this.isAlive = true
  this.oranges = []
}

Tree.prototype.grow = function() {
  if(!this.isAlive)
    return

  this.age += 1
  this.height += 10
  if ((this.age >= FRUIT_BEARING_AGE)) {
    this.orangeCount += Math.floor((Math.random()*10)+1)
    this.oranges.push(new Orange())
  }
  if (this.age > MAX_AGE) {
    this.isAlive = false
  }
}

Tree.prototype.dropOrange = function() {
  this.orangeCount -= 1
  return this.oranges.pop()
}

function Orange() {
  this.diameter = Math.floor((Math.random()*3)+1)
}

// optional to make this shit better if tests weren't in place:
// -Tree.prototype.orangeCount = function() {
//   return this.oranges.length
// }
// -add check for orangeCount so it can't have negative oranges

