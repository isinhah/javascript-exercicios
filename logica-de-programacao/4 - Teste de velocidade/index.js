const primeiroVeiculo = prompt("Insira a velocidade do primeiro carro:");
const segundoVeiculo = prompt("Insira a velocidade do segundo carro:");

if (primeiroVeiculo > segundoVeiculo) {
  alert("O primeiro carro é o mais rápido.");
} else if (segundoVeiculo > primeiroVeiculo) {
  alert("O segundo carro é o mais rápido.");
} else if (primeiroVeiculo === segundoVeiculo) {
  alert("A velocidade dos dois veiculos são iguais.");
}
