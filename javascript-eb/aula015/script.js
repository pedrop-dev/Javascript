/*
Timers
setTimeout(função, delay)
setInterval(função, delay) , clearInterval
*/

//const delay = 24 * 60 * 60 * 1000 Milisegundos
//Sempre escrever o tempo em uma variável
const delay = 1000

function print(value1, value2, n) {
    console.log(value1, value2, n)
}
setTimeout(print, delay, 'Pedro', 'JavaScript', 'N')

//////////////////////////////////////

const delay2 = 1000
let counter = 0

let intervalId = null

intervalId = setInterval(function() {
    console.log('Pedro', counter)
    counter++

    if (counter > 10) {
        clearInterval(intervalId)
    }
}, delay2)

console.log('intervalId', intervalId)