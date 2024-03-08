// Static

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username - ${this.username}`)
    }

    // static
    static createId() {
        return `123`
    }
}

const userOne = new User('ONE')

userOne.logMe()
//console.log(userOne.createId())

class Teacher extends User {
    constructor(username, email) {
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher('iPhone', 'iPhone@apple.com')
iPhone.logMe()
//console.log(iPhone.createId())
