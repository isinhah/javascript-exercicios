let opcoes = "";

do {
  opcoes = prompt(
    "Escolha uma das opções abaixo:" +
      "\n1 - Mudar usuário" +
      "\n2 - Mudar senha" +
      "\n3 - Esqueci a senha" +
      "\n4 - Reclamar" +
      "\n5 - Encerrar"
  );

  switch (opcoes) {
    case "1":
      alert("você escolheu a opção 1");
      break;
    case "2":
      alert("você escolheu a opção 2");
      break;
    case "3":
      alert("você escolheu a opção 3");
      break;
    case "4":
      alert("você escolheu a opção 4");
      break;
    case "5":
      alert("você escolheu encerrar");
      alert("encerrando...");
      break;
    default:
      alert("opção inválida");
  }
} while (opcoes !== "5");
