//refatorando com as funções async

async function imc(weight, height) {
  if (typeof weight !== "number" || typeof height !== "number") {
    return Promise.reject("argumento precisa ser um numero");
  }
  return weight / height ** 2;
}

async function showImc(weight, height) {
  try {
    const result = await imc(weight, height);

    console.log(`o resultado do imc foi de ${result}`);

    console.log(`calculando o peso ${weight} e altura ${height}`);

    if (result < 18.5) console.log("situação: MAGREZA");
    else if (result < 25) console.log("situação: NORMAL");
    else if (result < 30) console.log("situação: SOBREPESO");
    else if (result < 40) console.log("situação: OBESIDADE");
    else console.log("situação: OBESIDADE GRAVE");
  } catch (error) {
    console.log(error);
  }
}

showImc(50, 1.6);
showImc(48, 1.75);
