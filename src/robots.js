function randomLetter () {
  // 65 is A, 90 is Z
  var randomCharCode = Math.floor(Math.random() * 25) + 65
  return String.fromCharCode(randomCharCode)
}

function randomDigit () {
  return Math.floor(Math.random() * 9)
}

/*
  EXPLAIN: How does check() work and why might it be better
  than writing an inline anonymous function?
*/
function check (val1) {
  return function (val2) {
    return val1 === val2
  }
}

function getName (robot) {
  return robot.name
}

/*
  EXPLAIN: How does animalFactory() work and how do we use the
  fact that it contains a closure to our advantage?
*/
window.animalFactory = function () {
  var robots = []
  return function (kind) {
    var newName = `${randomLetter()}${randomDigit()}`
    var nameIsTaken = !!robots.map(getName).find(check(newName))
    if (nameIsTaken) return { error: `ERROR: ${newName} is already taken!` }

    var robot = { name: newName, kind: kind, friends: robots }
    robots.push(robot)
    return robot
  }
}
