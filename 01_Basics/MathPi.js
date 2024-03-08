// Changing Default Math.Pi Value from Object.Prototype

console.log(Math.PI)

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
console.log(descriptor)

//const myNewObj = Object.create(null)

console.log('------------------------------------------')

const chai = {
    name: 'Ginger Tea',
    price: 50,
    isAvailable: true,

    orderChai: function () {
        console.log('Tea is Not Available')
    }
}

console.log(chai)

console.log(Object.getOwnPropertyDescriptor(chai, 'name')) // getOwnPropertyDescriptor for created object

Object.defineProperty(chai, 'name', { writable: false, enumerable: false }) // Define Your Own Object Property

console.log(Object.getOwnPropertyDescriptor(chai, 'name'))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} - ${value}`)
    }
}

