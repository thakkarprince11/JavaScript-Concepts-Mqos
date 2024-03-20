// Async function always return Promise
async function getString() {
    return 'Namaste JS'
}

const dataPromise = getString()

console.log(dataPromise)

dataPromise.then((res) => console.log(res))

// return promise in async function
const promise1 = new Promise(function (resolve, reject) {
    resolve('Promise Resolved Value!!')
})

async function getSomething() {
    return promise1
}

const dataSomething = getSomething()

console.log(dataSomething)

dataSomething.then((res) => console.log(res))

//NOTE: Async and Await are used to handle promises

// Normal Function -
function getNormalPromise() {
    promise1.then((res) => console.log(res, ' - from getNormalPromise'))
    console.log('JS Engine didnt wait for promise to resolve!!')
}

getNormalPromise()

//NOTE: Await keyword is only can be used inside Async function

// Async Function -
async function getAsyncPromise() {
    const val = await promise1
    console.log(val + ' - from getAsyncPromise')
}

getAsyncPromise()

// Promise TimeOut -
const promise2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('5sec Timeout Expired')
    }, 5000)
})

async function getTime() {
    const value = await promise2
    console.log(value)
    console.log('will wait for promise to resolve')
}

getTime()

// Two Awaits -

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('3sec Timeout Expired')
    }, 3000)
})

async function getTwoAwait() {
    const value = await promise2
    console.log(value, 'value1')
    console.log('will wait for promise to resolve')

    const value2 = await promise3
    console.log(value2, 'value2')
    console.log('will wait for second promise to resolve')
}

getTwoAwait()

// fetch -
async function fetchUser() {
    //NOTE: fetch return Promise
    try {
        const userJson = await fetch(
            'https://api.github.com/users/thakkarprince11'
        )
        const user = await userJson.json()
        console.log(user)
        //
    } catch (error) {
        console.log(error)
    }
}

fetchUser()
