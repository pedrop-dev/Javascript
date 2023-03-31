var msg = document.querySelector('#msg')
var img = document.querySelector('#imagem')

var hora = new Date()
var hr =  hora.getHours()

msg.innerHTML = `Agora são ${hr} horas.`

function carregar() {
    if (hr > 0 && hr < 12) {
        //BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#FEC99A'

    } else if(hr >= 12 && hr <= 18 ) {
        //BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#FC6C5F'

    } else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#2D3A49'

    }
}