let fila = [];
let opcao = [];

do {
  let pacientes = "";
  for (let i = 0; i < fila.length; i++) {
    pacientes += i + 1 + fila[i] + "\n";
  }

  opcao = prompt(
    "Pacientes:\n" +
      pacientes +
      "\n" +
      "Escolha uma ação\n" +
      "1) Novo paciente\n" +
      "2) Consultar paciente\n" +
      "3) Sair\n"
  );

  switch (opcao) {
    case "1":
      const novoPaciente = prompt("Nome do paciente: ");
      fila.push(novoPaciente);
      break;
    case "2":
      const pacienteConsultado = fila.shift();
      if (pacienteConsultado) {
        alert("Não há pacientes na fila!");
      } else {
        alert(pacienteConsultado + " foi removido da fila.");
      }
      break;
    case "3":
      alert("Encerrando");
    default:
      alert("opcao inválida");
  }
} while (opcao !== 3);
