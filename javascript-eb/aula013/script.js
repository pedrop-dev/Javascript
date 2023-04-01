//arrays built in methods

//concat

const data = ['a', 'b', 'c']
const result = data.concat(['d','e','f'])

console.log(data)
console.log(result)

//find

const dt1 = [1, 12, 15, 20, 37, 40]
const res = dt1.find(function(item) {
    return item < 2 
})

//findIndex

const dt2 = [1, 12, 15, 20, 37, 40]
const res2 = dt2.findIndex(function(item) {
    return item > 38
})

console.log(res2)

//indexOf

const dt3 = [1, 12, 15, 20, 37, 40]
const res3 = dt3.indexOf(37)

console.log(res3)

//lastIndexOf

const dt4 = [1, 12, 15, 20, 12, 37, 40]
const res4 = dt4.lastIndexOf(12)

console.log(res4)

//includes

const dt5 = [1, 12, 15, 20, 12, 37, 40]

const res5 = dt5.includes(20)

console.log(res5)

//pop

const dt6 = ['a','b','c']
const res6 = dt6.pop()

console.log(dt6)
console.log(res6)

//push

const dt7 = ['a','b','c']
const res7 = dt7.push('Pedro')

console.log(dt7)
console.log(res7)

//shift

const dt8 = ['a','b','c']
const res8 = dt8.shift()

console.log(dt8)
console.log(res8)

//unshift

const dt9 = ['a','b','c']
const res9 = dt9.unshift('Henrique')

console.log(dt9)
console.log(res9)

//some

const dt10 = [1,2,null,3,4,5,6]
const res10 = dt10.some(function(item) {
    return item == 2
})

console.log(dt10)
console.log(res10)

//every

const dt11 = [1,2,3,4,5,6]
const res11 = dt11.every(function(item) {
    return item > 0
})

console.log(dt11)
console.log(res11)

//slice

const dt12 = [1,2,3,4,5,6,7,8,9,10]
const res12 = dt12.slice(-5)

console.log(dt12)
console.log(res12)

//splice

const dt13 = [1,2,3,4,5,6,7,8,9,10]
const res13 = dt13.slice(2)

console.log(dt13)
console.log(res13)

//map

const dt14 = [1,2,3,4,5,6,7,8,9,10]
const res14 = dt14.map(function(item) {
    console.log(item)
    return item * 2
})

console.log(dt14)
console.log(res14)

//forEach

const dt15 = [1,2,3,4,5,6,7,8,9,10]
const res15 = dt15.forEach(function(item) {
    console.log()
    return item * 3
})

console.log(dt15)
console.log(res15)

