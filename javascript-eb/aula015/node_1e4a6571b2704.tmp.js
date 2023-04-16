/*
Timers

setTimeOut(função, delay)
*/

const delay = 24 * 60 * 60 * 1000//Milisegundos

function print(value1, value2, n) {
    console.log(value1, value2, n)
}
setTimeout(print, delay, 'Pedro', 'JavaScript', 'N')