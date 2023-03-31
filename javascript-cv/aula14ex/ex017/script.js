function tabuada() {
    var number = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')

    if(number.value.length == 0) {
        alert('[ERRO] Digite um valor válido!')

    } else {
        var n = Number(number.value)

        var c = 1  

        while (c <= 10) {
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
































/*
function tabuada() {
    var num = document.querySelector('#txtn')
    var tab = document.querySelector('#seltab')
    
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)

        let c = 1

        tab.innerHTML  = ''

        while(c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/