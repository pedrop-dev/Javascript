//Swich-case

function backToTheFuture(year) {
    let movieName = ''
    switch (year) {
        case 1985: {
            movieName = 'De volta para o futuro'
            break
        }
        case 1989: {
            movieName = 'De volta para o futuro 2'
            break
        }
        case 1990: {
            movieName = 'De volta para o futuro 3'
        }
        default: {
            movieName = 'Não tem de volta para o futuro'
        }
    }
}

console.log(backToTheFuture(1990))