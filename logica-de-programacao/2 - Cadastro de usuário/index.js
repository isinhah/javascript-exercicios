const primeiroNome = prompt("Insira o seu nome: ");
const sobrenome = prompt("Insira seu sobrenome:");
const campoDeEstudo = prompt("Campo de estudo:");
const anoDeNascimento = prompt("Ano de nascimento:");

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();
const idadeAtual = anoAtual - anoDeNascimento;

alert(
  "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " +
    primeiroNome +
    " " +
    sobrenome +
    "\nCampo de estudo: " +
    campoDeEstudo +
    "\nIdade: " +
    idadeAtual +
    " Anos"
);
