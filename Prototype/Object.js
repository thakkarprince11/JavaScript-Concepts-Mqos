
// 

function multiplyBy5(num){
    return num * 5
}

multiplyBy5.power = 2       // not calling function and using dot notation and power

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)

//

function createUser(username, score){
    this.username = username
    this.score = score
}

// Prototype

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
    console.log(`Score is ${this.score}`)
}

const userOne = new createUser('one', 5)
console.log(userOne)

const userTwo = new createUser('two', 10)
console.log(userTwo)

userTwo.increment()     // Calling Prototype Created Method
userTwo.printMe()       // Calling Prototype Created Method


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/