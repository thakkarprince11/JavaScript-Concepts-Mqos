//

class User {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    // Getter
    get password() {
        return this._password.toUpperCase()
    }

    // Setter
    set password(value) {
        this._password = value
    }

    // Getter
    get email(){
        return this._email.toLowerCase()
    }

    // Setter
    set email(value){
        this._email = value
    }
}

const userOne = new User('DP@EMAIL.COM', 'dppt')

console.log(userOne.email)
console.log(userOne.password)
