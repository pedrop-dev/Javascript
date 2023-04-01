//string built in methods

//charAt()
const nm = ' Pedro'
console.log(nm)

console.log(nm.charAt(0))

//charCodeAt
console.log(nm.charCodeAt(3))

//concat
console.log(nm.concat(' Henrique'))

//endsWith
console.log(nm.endsWith('o'))

//fromCharCode
console.log(String.fromCharCode(114))

//includes
console.log(nm.includes('r'))

//indexOf
console.log(nm.indexOf('e'))

//lastIndexOf
console.log(nm.lastIndexOf('P'))

//localeCompare
console.log(nm.localeCompare('Pedro'))

//match
console.log(nm.match(/dr[o|a]/))

//repeat
console.log(nm.repeat(2))

//replace
console.log(nm.replace('Pedro', 'Gabriel'))

//search
console.log(nm.search('d'))

//slice
console.log(nm.slice(0,2))

//split
console.log(nm.split('dro'))

//startsWith
console.log(nm.startsWith('P'))

//subtr
console.log(nm.substr(0, 3))

//substring
console.log(nm.substring(3, 5))

//toLocaleLowerCase
console.log(nm.toLocaleLowerCase())

//toLocaleUpperCase
console.log(nm.toLocaleUpperCase())

//toLowerCase
console.log(nm.toLowerCase())

//toUpperCase
console.log(nm.toUpperCase())

//toString
console.log(nm.toString())

//trim
console.log(nm.trim())

//valueOf
console.log(nm.valueOf())
