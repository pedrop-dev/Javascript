//AJAX
//1 - XMLHttpRequest
//2 - jquery
//3 - axios
//4 - fetch API

function doAjax() {
    const CODE_READY = 4
    const xhttp = new XMLHttpRequest()

    xhttp.onreadystatechange = function() {
        if (this.readyState == CODE_READY) {
            console.log('this.readyState',this.responseText)
        }
    }

    xhttp.open("GET", 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt')
    xhttp.send()
}

setTimeout(doAjax, 5000)

const ROBOTSTXT = 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt'

function doAjax() {
    axios.get(ROBOTS_TXT)
    .then(function (response) {
        //handle succes
        console.log(response.data)
    })
    .catch(function (error) {
        //handle error
        console.log(error)
    })
}

setTimeout(doAjax, 1000)


const ROBOTS_TXT = 'https://cors-anywhere.herokuapp.com/https://instagram.com/robots.txt'

function doAjax() {
    fetch(ROBOTS_TXT)
    .then(response = response.text())
    .then(text = console.log(text))
}