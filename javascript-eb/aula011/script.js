
/*LOOPS: 
        for (inicialização; condição; incremento) {código}
        while(condição) {código}
        do {} while()
        for ( of ) {} loop para array
        for ( in )
*/

for(let i = 10; i >= 0; i--) {
    console.log(i)
}
//////////
let a = 0

while(a <= 10) {
    console.log(a)
    a++
}
//////////
let b = 10

do {
    console.log(b)
    b++
} while(b < 10)
//////////
const dt1 = [null,[1,2,3],{band: 'iron Maiden'}]

for(item of dt1) {
    console.log(item)
}
//////////
const dt2 = {'band': 'Iron Maiden', 'album': 'killers', 'year': 1982}

for (const prop in dt2) {
    console.log(prop, dt2[prop])
}
