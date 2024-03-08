// Create Promise One -
const promiseOne = new Promise(function (resolve, reject) {
    // Do any Async Tasks - like Db Calls, cryptography, network
    //

    setTimeout(function () {
        console.log('Async task is complete')
        resolve()
    }, 1000)
})

// Consume Promise One -
promiseOne.then(function () {
    console.log('Promise Consumed')
})

// Promise Two -
new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('Async Task Two Complete')
        resolve()
    }, 1000)
}).then(function () {
    console.log('Async Task Two Consumed')
})

// Promise Three -
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({ username: 'Third', email: 'third@three.com' })
    }, 1000)
})

// Consume Promise Three -
promiseThree.then(function (user) {
    console.log(user, 'Promise Three Consumed')
})

// Promise Four -
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false
        if (!error) {
            resolve({ username: 'Fourth', email: 'fourth@four.com' })
        } else {
            reject('ERROR : Something went wromg')
        }
    }, 2000)
})

promiseFour
    .then(function (user) {
        console.log(user, 'Promise Four Consumed')
        return user.username
    })
    .then((username) => {
        console.log(username)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('Finally, the promise is either resolved or rejeced')
    })

// Promise Four -
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true
        if (!error) {
            resolve({ username: 'Fifth', email: 'fifth@five.com' })
        } else {
            reject('ERROR : Something went wrong on Five')
        }
    }, 3000)
})

// async function for consume promise five
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// calling consume promise five function
consumePromiseFive()

// Promise Six -
async function sixUsers() {
    try {
        const respose = await fetch('https://randomuser.me/api/')
        const data = await respose.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

sixUsers() // Calling Six Function

// Promise Seven -
fetch('https://randomuser.me/api/')
    .then((response) => {
        return response.json()
    })
    .then((resJson) => {
        console.log(resJson)
    })
    .catch((error) => { 
        console.log(error)
    })
