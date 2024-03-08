// Getter Setter Old Way using Prototype

function user(email, password) {
    this._email = email
    this._password = password

    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toLowerCase()
        },
        set: function (value) {
            this._email = value
        }
    })

    Object.defineProperty(this, 'password', {
        get: function () {
            return this._password.toUpperCase()
        },
        set: function (value) {
            this._password = value
        }
    })
}

const chai = new user('TEA@GINGER.COM', 'gnger')

console.log(chai.email)
console.log(chai.password)

// Object Based Getter Setter

console.log('--------------- Object Based Getter Setter -------------------')

const userNew = {
    _email: 'TEA@GINGER.COM',
    _password: 'gnger',

    get email() {
        return this._email.toLowerCase()
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password.toUpperCase()
    },

    set email(value) {
        this._password = value
    }
}

console.log(userNew.email)
console.log(userNew.password)

//
console.log('----------------------------------')

const tea = Object.create(userNew)

console.log(tea.email)
console.log(tea.password)
