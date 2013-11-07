$(document).ready(function() {
  var tree = new Tree()
  var updateFruitCount = function() {
    $('span.fruit-count').text(tree.orangeCount)
  }

  $('button.plant').click(function() {
    $('#orange-tree-template').show()
  })
  $('button.age').click(function() {
    tree.grow()
    $('span.age').text(tree.age)
    updateFruitCount()
  })
  $('button.pick').click(function() {
    tree.dropOrange()
    updateFruitCount()
  })
})



