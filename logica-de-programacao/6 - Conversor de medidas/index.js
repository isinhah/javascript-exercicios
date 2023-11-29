const valor = prompt("Insira um valor em metros:");
const medida = prompt(
  "Qual medida você quer converter os metros?" +
    "\n1. mm" +
    "\n2. cm" +
    "\n3. dm" +
    "\n4. dam" +
    "\n5. hm" +
    "\n6. km"
);

/*
const milimetro = valor * 1000;
const centimetro = valor * 100;
const decimetro = valor * 10;
const decametro = valor / 10;
const hectometro = valor / 100;
const kilometro = valor / 1000;
*/

switch (medida) {
  case "1":
    alert(
      "O valor " + valor + " metros, em milimetros é: " + valor * 1000 + " mm"
    );
    break;
  case "2":
    alert(
      "O valor " + valor + " metros, em centimetros é: " + valor * 100 + " cm"
    );
    break;
  case "3":
    alert(
      "O valor " + valor + " metros, em decimetros é: " + valor * 10 + " dm"
    );
    break;
  case "4":
    alert(
      "O valor " + valor + " metros, em decametros é: " + valor / 10 + " dam"
    );
    break;
  case "5":
    alert(
      "O valor " + valor + " metros, em hectometros é: " + valor / 100 + " hm"
    );
    break;
  case "6":
    alert(
      "O valor " + valor + " metros, em kilometros é: " + valor / 1000 + " km"
    );
    break;
  default:
    alert("Opção inválida!");
}
