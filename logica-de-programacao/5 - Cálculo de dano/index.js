const atacante = prompt("Insira o nome do atacante:");
const poderDeAtaque = prompt("Insira a quantidade de poder de ataque:");

const defensor = prompt("Insira o nome do defensor:");
let pontosDeVida = prompt("Insira a quantidade de pontos de vida:");
const poderDeDefesa = prompt("Insira a quantidade de poder de defesa:");
const possuiEscudo = prompt("O personagem possui um escudo? (sim/nao)");

let danoCausado = 0;

if (poderDeAtaque > poderDeDefesa && possuiEscudo === "nao") {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "sim") {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor);
alert(
  atacante +
    "\nPoder de ataque: " +
    poderDeAtaque +
    "\n\n" +
    defensor +
    "\nPontos de vida: " +
    pontosDeVida +
    "\nPoder de defesa: " +
    poderDeDefesa +
    "\nPossui escudo: " +
    possuiEscudo
);
