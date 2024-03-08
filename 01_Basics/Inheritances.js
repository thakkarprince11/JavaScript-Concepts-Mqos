// Inheritance

class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        //
        super(username) // super keyword
        this.email = email
        this.password = password
    }

    addCourses() {
        console.log(`New Course added by ${this.username}`)
    }
}

const tchr = new Teacher('OneUser', 'One@teacher.com', '132')
tchr.addCourses()

const usr = new User('SecondUser')
usr.logMe()
tchr.logMe()

console.log(tchr instanceof Teacher)        // instanceof
console.log(tchr instanceof User)        // instanceof
