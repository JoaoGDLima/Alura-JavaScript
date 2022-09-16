
const apresentar = (nome) => `meu nome é ${nome}`
const some = (num1, num2) => num1 + num2

const somaNumerosPequenhos = (num1, num2) => {
    if (num1 > 10 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return num1 + num2
    }
}

