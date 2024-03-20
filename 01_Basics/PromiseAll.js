// Promises
const p1 = new Promise(function (resolve, reject) {
    //setTimeout(() => resolve('P1 Success'), 3000)
    setTimeout(() => reject("P1 Fail"), 3000)
})

const p2 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('P2 Success'), 1000)
    //setTimeout(() => reject('P2 Fail'), 1000)
})

const p3 = new Promise(function (resolve, reject) {
    setTimeout(() => resolve('P3 Success'), 2000)
    //setTimeout(() => reject("P3 Fail"), 2000)
})

// PromiseAll -
Promise.all([p1, p2, p3])
    .then((res) => console.log(res, "PromiseAll"))
    .catch((err) => console.log(err, "PromiseAll"))

// PromiseAllSettled -
Promise.allSettled([p1, p2, p3])
    .then((res) => console.log(res, "PromiseAllSettled"))
    .catch((err) => console.log(err, "PromiseAllSettled"))

// PromiseRace -
Promise.race([p1, p2, p3])
    .then((res) => console.log(res, "PromiseRace"))
    .catch((err) => console.log(err, "PromiseRace"))

// PromiseAny -
Promise.any([p1, p2, p3])
    .then((res) => console.log(res, "PromiseAny"))
    .catch((err) => console.log(err, "PromiseAny"))
