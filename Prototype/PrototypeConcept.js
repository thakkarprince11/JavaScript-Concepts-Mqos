let myName = 'DP'
console.log(myName.length)

//
// Creating trueLenght Prototype
let newName = 'DP     '

String.prototype.trueLength = function(){
    console.log(`True Length is ${this.trim().length}`)
}
newName.trueLength()


console.log('================================================================')

//
// Injecting in All Object
let myHeros = ['thor', 'spiderman']

let heroPowers = {
    thor: 'Hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`Spidey power is ${this.spiderman}`)
    }
}

Object.prototype.superPower = function () {
    console.log('Superpower of Heros - ')
}

heroPowers.superPower() // Object Prototype

myHeros.superPower() // Array Prototype

console.log('-------------------------------------------------------')

// Injecting in All Array
Array.prototype.speciality = function () {
    console.log('Speciality of Heros - ')
}

myHeros.speciality() // Array Prototype

console.log('=========================================================')

// Inheritance Old Syntax

const userTeach = {
    name: 'One',
    email: 'first@one.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignmnet',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = userTeach

// Inheritance Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

console.log(TeachingSupport.makeVideo, 'Accessing Other Objects Properties')
