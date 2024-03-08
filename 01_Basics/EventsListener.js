// Scenerio 1 - for Bubbling

document.getElementById('images').addEventListener(
    'click',
    function (event) {
        console.log('Please Click Inside Image')
    },
    false
)

document.getElementById('owl').addEventListener(
    'click',
    function (event) {
        console.log('Owl Clicked')
    },
    false
)

// Scenerio 2 - stop Bubbling

document.getElementById('images').addEventListener(
    'click',
    function (event) {
        console.log('Please Click Inside Image')
    },
    true
)

document.getElementById('owl').addEventListener(
    'click',
    function (event) {
        console.log('Owl Clicked')
    },
    true
)

// Scenerio 3 - stop Propogation

document.getElementById('images').addEventListener(
    'click',
    function (event) {
        console.log('Please Click Inside Image')
    },
    false
)

document.getElementById('owl').addEventListener(
    'click',
    function (event) {
        console.log('Owl Clicked')
        event.stopPropagation() // stop stopPropagation
    },
    false
)

// Event PreventDefault

document.getElementById('google').addEventListener(
    'click',
    function (event) {
        event.preventDefault() // prevent Default
        console.log('Google Clicked')
    },
    false
)

// Click on a Image and it will disappear
document.getElementById('images').addEventListener(
    'click',
    function (event) {
        console.log(event)
        console.log(event.target)
        console.log(event.target.parentNode)

        if (event.target.tagName === 'IMG') {
            let removeit = event.target.parentNode
            //removeit.remove()
            removeit.parentNode.removeChild(removeit)
        }
    },
    false
)
