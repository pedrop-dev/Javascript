//objects

const band = {
    name: 'Iron Maiden',
    albuns: [
        {
            title: 'Iron Maiden',
            year: 1980
        },
        {
            title: 'Killers',
            year: '1981'
        },
        {
            title: 'The Number Of The Beast',
            year: 1982
        }
    ] ,
    car: 'Fusca',
    instrument: 'Violão',
}

delete band.car

const item = 'instrument'
const result = band[item]

console.log(result)
console.log(band.albuns[3].year)