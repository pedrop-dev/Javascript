//FUNCTION: Trecho de código reutilizável

function sayGoodMorning(nome) {
    console.log('Bom dia ' + nome + '!')
}

sayGoodMorning('Pedro');
sayGoodMorning('Karen');


function sum(numero1, numero2) {
    console.log('Número 1 é: ' + numero1)
    console.log('Número 2 é: ' + numero2)
    const soma = numero1 + numero2

    //Tudo depois do return será ignorado
    return console.log('A soma dos valores é: ' + soma)
}

const total = sum(10, 5)
console.log(total)