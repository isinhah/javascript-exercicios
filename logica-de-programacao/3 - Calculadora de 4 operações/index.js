const primeiroNumero = prompt("Insira o primeiro número:");
const segundoNumero = prompt("Insira o segundo número:");

const x = parseFloat(primeiroNumero);
const y = parseFloat(segundoNumero);

//Passar uma string para número
const soma = x + y;
const subtracao = x - y;
const multiplicacao = x * y;
const divisao = x / y;

alert(
  "Resultado dos cálculos!\n" +
    "\nA soma é: " +
    soma +
    "\nA subtração é: " +
    subtracao +
    "\nA multiplicação é: " +
    multiplicacao +
    "\nA divisão é: " +
    divisao
);
