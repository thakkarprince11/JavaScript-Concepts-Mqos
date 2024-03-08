// Object Literal
const user = {
    username: 'One',
    email: 'first@one.com',
    loginCount: 8,
    signedIn: true,
    getUserDetails: function () {
        console.log(`Username : ${this.username}`) // this
        console.log(this)
    }
}

console.log(user.email)
console.log(user.getUserDetails())
console.log(this, 'Global Context')


console.log('---------------------------------------------------------')

// Construction Function
function userNew(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

// new keyword
const userOne = new userNew('two', '1', false)
console.log(userOne)

const userTwo = new userNew('three', '11', true)
console.log(userTwo)

// constructor
const userThree = new userNew('four', '05', true)
console.log(userThree.constructor)