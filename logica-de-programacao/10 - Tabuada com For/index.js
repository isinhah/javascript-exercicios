// inicializacao, condicao (vai ficar executando até o limite), finalizacao
const numero = prompt("Escolha o numero da tabuada que você deseja calcular:");

let resultado = "";

for (let fator = 1; fator <= 20; fator++) {
  resultado += " -> " + numero + " x " + fator + " = " + numero * fator + "\n";
}

alert("Resultado da tabuada de " + numero + ":\n\n" + resultado);
