const imoveis = []; // lista de imóveis
let opcao = ""; // sem opção até agora

do {
  opcao = prompt(
    "Total de imóveis cadastrados: " +
      imoveis.length +
      "\nEscolha uma opção: " +
      "\n1. Novo imóvel" +
      "\n2. Lista de imóveis salvos" +
      "\n3. Sair"
  );

  switch (opcao) {
    case "1":
      const imovel = {}; //objeto, vai armazenar várias informações

      imovel.proprietario = prompt("Insira seu nome:");
      imovel.quantidadeDeQuartos = prompt("Quantos quartos possui o imóvel? ");
      imovel.quantidadeDeBanheiros = prompt(
        "Quantos banheiros o imóvel possui?"
      );
      imovel.garagem = prompt("O imóvel possui garagem? sim/nao");

      const confirmacao = confirm(
        "Salvar este imóvel?\n" +
          "\nNome do usuário: " +
          imovel.proprietario +
          "\nQuantidade de quartos do imóvel: " +
          imovel.quantidadeDeQuartos +
          "\nQuantidade de banheiros do imóvel: " +
          imovel.quantidadeDeBanheiros +
          "\nPossui garagem? " +
          imovel.garagem
      );

      if (confirmacao) {
        imoveis.push(imovel); //manda o imovel pra lista de imoveis
        alert("Imóvel salvo com sucesso.");
      } else {
        alert("Voltando ao menu");
      }

      break;
    case "2":
      for (let i = 0; i < imoveis.length; i++) {
        alert(
          "Imóvel " +
            (i + 1) +
            "\nProprietário: " +
            imoveis[i].proprietario +
            "\nQuartos: " +
            imoveis[i].quantidadeDeQuartos +
            "\nBanheiros: " +
            imoveis[i].quantidadeDeBanheiros +
            "\nGaragem: " +
            imoveis[i].garagem
        );
      }
      break;
    case "3":
      alert("Encerrando...");
      break;
    default:
      alert("opcao invalida...");
  }
} while (opcao !== "3");
