function setUsername(username) {
    // Complex Db Calls
    this.username = username
    console.log('Called')
}

function createUser(username, email, password) {
    //
    setUsername.call(this, username)    // Call & this

    this.email = email
    this.password = password
}

const useOne = new createUser("One", "first@one.com", '12233')
console.log(useOne)