const vagas = []; //lista de inscritos
let opcao = "";

//função 1 - listar vagas

function listarVagas() {
  const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
    // 1. nome, x  candidatos
    textoFinal += indice + ". ";
    textoFinal += vaga.nome;
    textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
    return textoFinal;
  }, "");

  alert(vagasEmTexto);
}

//função 2 - criar uma nova vaga

function novaVaga() {
  const nome = prompt("Nome inteiro: ");
  const descricao = prompt("Insira uma descrição sobre você: ");
  const dataLimite = prompt("Data limite: (dd/mm/aa)");

  const confirmacao = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}

// funcao 3 - exibir informacoes da nova vaga

function exibirVaga() {
  const indice = prompt("Informe o indice da vaga que deseja exibir:");

  if (indice >= vagas.length || indice < 0) {
    alert("Indice inválido!");
    return; //se a condição entrar nesse if, encerra a função e não lê o resto dessa função
  }

  const vaga = vagas[indice]; //vai referenciar o indice dentro das vagas

  const candidatosEmTexto = vaga.candidatos.reduce(function (
    textoFinal,
    candidato
  ) {
    return textoFinal + "\n - " + candidato;
  },
  "");

  alert(
    "Vaga n " +
      indice +
      "\nNome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length
  ) +
    "\nCandidatos inscritos: " +
    candidatosEmTexto;
}

// funcao 4 - inscrever candidato
function inscreverCandidato() {
  const candidato = prompt("Informa o nome do candidato: ");
  const indice = prompt(
    "informe o indice da vaga para qual o candidato deseja se increver: "
  );
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja inscrever o candidato " +
      candidato +
      " na vaga " +
      indice +
      "\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    vaga.candidatos.push(candidato);
    alert("inscrição realizada!");
  }
}

// funcao 5 - excluir vaga
function excluirVaga() {
  const indice = prompt("informe o indice da vaga que você deseja excluir: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "tem certeza que deseja excuir a vaga " +
      indice +
      "?\n" +
      "Nome: " +
      vaga.nome +
      "\nDescrição: " +
      vaga.descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    vaga.splice(indice, 1); //indice da vaga, remover 1 vaga
    alert("vaga excluida!");
  }
}

// exibir o menu
function exibirMenu() {
  const opcao = prompt(
    "Cadastro de vagas de empresa.\n" +
      "1) Listar vagas disponiveis.\n" +
      "2) Criar uma nova vaga.\n" +
      "3) Visualizar uma vaga.\n" +
      "4) Inscreva-se para vaga.\n" +
      "5) Excluir sua vaga.\n" +
      "6) Sair do programa.\n"
  );

  return opcao;
}

//funcao de executar o menu e suas opções
function executar() {
  let opcao = "";
  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        inscreverCandidato();
        break;
      case "5":
        excluirVaga;
        break;
      case "6":
        alert("Encerrando o sistema...");
        break;
      default:
        alert("Opção inválida!");
    }
  } while (opcao !== 6);
}

executar();
