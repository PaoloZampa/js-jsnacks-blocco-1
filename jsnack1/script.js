//inserisco 2 prompt

let number1 = Number(prompt('numero1'));

let number2 = Number(prompt('numero2'));

if (number1 > number2) {
    console.log(number1)
} if (number2 > number1) {
    console.log(number2)
} if (number2 === number1) {
    console.log('pareggio')
} else {
    console.log('Devi inserire solo numeri')
}