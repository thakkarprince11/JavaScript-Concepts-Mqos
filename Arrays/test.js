// sudo npm i -g jsvu
// go to shell terminal in pc (not vscode terminal)
// go to test.js folder
// in terminal run command as below -
// ~/.jsvu/bin/v8-debug --allow-natives-syntax
// press enter and you'll be headed to d8 version in terminal
// d8> const arr = []
// d8> %DebugPrint(arr)
// Hit Enter

const myArray = []
//%DebugPrint(myArray)

// Continuos Array & Holey Array

// Optimization -  SMI (Small Integer)
// Optimization -  Packed Elements
// Optimization -  Double (float, string, function)
//

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS

arrTwo.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arrTwo.push('7')
// PACKED_ELEMENTS

arrTwo[10] = 11 // Only 6 Index is available but we added to 10th Index so there Gap(Hole) in the Array
// HOLEY_ELEMENTS

console.log(arrTwo)
console.log(arrTwo.length, ' - Length')
console.log(arrTwo[9], ' - 9th Position')
console.log(arrTwo[19], ' - 19th Position')

// How JS Engine find index value -
//  - Bound Check
//  - hasOwnProperty(arrTwo, 9)
//  - hasOwnProperty(arrTwo.prototype, 9)
//  - hasOwnProperty(Object.prototype, 9)

// Array holes are very expensive in js

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8])

// Optimized Arrays = SMI > DOUBLE > PACKED
// Optimized Holey Arrays = H_SMI > H_DOUBLE > H_PACKED
// 30+ Variations in Array

//
const arrFour = new Array(3) // just 3 holes - HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // HOLEY_ELEMENTS
arrFour[1] = '2' // HOLEY_ELEMENTS
arrFour[2] = '3' // HOLEY_ELEMENTS

const arrFive = [] // SMI
arrFive.push('1') // PACKED_ELEMENTS
arrFive.push('2') // PACKED_ELEMENTS
arrFive.push('3') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]

arrSix.push(NaN) // DOUBLE
arrSix.push(Infinity) // DOUBLE

// for, for-of, forEach are recommended to use more