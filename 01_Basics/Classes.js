// ES6

class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password} DP`
    }

    changeUsername() {
        return `${this.username.toUpperCase()}`
    }
}

const userOne = new User('One', 'first@one.com', '1234')
console.log(userOne.encryptPassword())
console.log(userOne.changeUsername())
