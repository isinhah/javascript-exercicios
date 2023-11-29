const turista = prompt("Qual é o seu nome?");
let cidades = ""; //para adicionar as cidades depois, que são strings
let quantidadeDeCidades = 0;

let visitouCidade = prompt("Já visitou alguma cidade? sim/nao");

while (visitouCidade === "sim") {
  let cidade = prompt("Digite o nome da cidade visitada:");
  cidades += " - " + cidade + "\n"; //aqui concatena as cidades
  quantidadeDeCidades++; //contagem que vai de 0 pra 1 quando adicionar a cidade
  visitouCidade = prompt("Você visitou alguma outra cidade? sim/nao");
}

alert(
  "Olá turista " +
    turista +
    "\nQuantidade de cidades visitadas: " +
    quantidadeDeCidades +
    "\nCidades visitadas: \n" +
    cidades
);
