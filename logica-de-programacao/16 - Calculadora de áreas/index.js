function exibirMenu() {
  return prompt(
    "Cálculo de áreas geométricas\n" +
      "1 - Área do triângulo\n" +
      "2 - Área do retângulo\n" +
      "3 - Área do quadrado\n" +
      "4 - Área do trapézio\n" +
      "5 - Área do circulo\n" +
      "6 - Sair"
  );
}

function areaTriangulo() {
  const base = prompt("Base: ");
  const altura = prompt("Altura: ");
  return alert("A área é: " + (base * altura) / 2);
}

function areaRetangulo() {
  const base = prompt("Base: ");
  const altura = prompt("Altura: ");
  return alert("A área é: " + base * altura);
}

function areaQuadradado() {
  const lado = prompt("Lado: ");
  return alert("A área é: "(lado * lado));
}

function areaTrapezio() {
  const baseMaior = prompt("Base Maior: ");
  const baseMenor = prompt("Base Menor: ");
  const altura = prompt("Altura: ");
  return alert("A área é: "(baseMaior + baseMenor) * (altura / 2));
}

function areaCirculo() {
  const raio = prompt("Raio: ");
  return alert("A área é: "(3.14 * (raio * raio)));
}

function executar() {
  let opcoes = "";
  do {
    let opcoes = exibirMenu();
    let resultado;

    switch (opcoes) {
      case "1":
        resultado = areaTriangulo();
        break;
      case "2":
        resultado = areaRetangulo();
        break;
      case "3":
        resultado = areaQuadrado();
        break;
      case "4":
        resultado = areaTrapezio();
        break;
      case "5":
        resultado = areaCirculo();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Opção inválida...");
        break;
    }

    if (resultado) {
      //if resultado é true (tem um número)
      alert("O resultado é: " + resultado);
    }
  } while (opcoes !== "6");
}

executar();
