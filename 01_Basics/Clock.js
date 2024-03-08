//const clock = document.getElementById('#clock')


// will run after every 1 sec
setInterval(function () {
    let date = new Date()
    console.log(date.toLocaleString())
    //clock.innerHTML = date.toLocaleString()
}, 1000)
