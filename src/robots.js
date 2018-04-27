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

  //the check function will itself return an anonymous function with one parameter which is val2, and that anonymous function returns val1===val2

  //The problem with making check an inline anonymous functiomn is that we then could call that function when declaring the variable isNameTaken
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

  //robots.map(getName) is going to execute the getName function on each imdex in the robots array and return a new array that contains the result of getName(robots[index])
  //we then call get .find on the new array created by running getNameon each imndex in the robots array; which will iterate through the indexes in the array of robot names and see if its value is equal to newName

  //everything inside of find(...) is basically an anonymous function which checks to see if its value is equal to the newName, which is the argument being passed in

  //the .find method takes a function as its parameter which will be used as to test each element of the array and will return the value of the first element in the array that satisfies that function

  //double negation is a way that we can return a truthy falsy value for something instead of its actual value.  A single ! point will uase type coercion to convert a value to truthy/falsey but also flips its truthiness, so we have to add a second exlamation point to correct for this and return a strict true or false value
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
