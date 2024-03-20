const radius = [3, 1, 2, 4]

// logic area - function
const area = function (radius) {
    return Math.PI * radius * radius
}

// logic circumference - function
const circumference = function (radius) {
    return 2 * Math.PI * radius
}

// logic diameter - function
const diameter = function (radius) {
    return 2 * radius
}

// Higher Order Function -
const calculate = function (radius, logic) {
    const output = []

    for (let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculate(radius, area), 'Area') // area
console.log(calculate(radius, circumference), 'Circumference') // circumference
console.log(calculate(radius, diameter), 'Diameter') // diameter

