

// Namaste Javascript
function outer() {
    for (var i = 1; i <= 5; i++) {
        function inner(x) {
            setTimeout(function () {
                console.log(x)
            }, x * 1000)
        }
        inner(i)
    }
}

outer()
