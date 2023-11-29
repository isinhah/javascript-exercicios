let dinheiroInicial = prompt("Quantidade inicial de dinheiro disponivel:");
dinheiroInicial = parseFloat(dinheiroInicial);
let opcoes = "";

do {
  opcoes = prompt(
    "Saldo Disponivel: " +
      dinheiroInicial +
      "\n1 - Adicionar dinheiro" +
      "\n2- Diminuir dinheiro" +
      "\n3 - Encerrar o programa"
  );

  switch (opcoes) {
    case "1":
      dinheiroInicial += parseFloat(
        prompt("Quanto de dinheiro você deseja adicionar?")
      );
      break;
    case "2":
      dinheiroInicial -= parseFloat(
        prompt("Quanto de dinheiro você deseja retirar?")
      );
      break;
    case "3":
      alert("Encerrando o programa...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcoes !== "3");
