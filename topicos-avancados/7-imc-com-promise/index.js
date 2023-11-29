function calculateImc(weight, height) {
  return new Promise((resolve, reject) => {
    //verificação se é um número
    if (typeof weight !== "number" || typeof height !== "number") {
      reject("argumento precisa ser um numero");
    } else {
      resolve(weight / height ** 2);
    }
  });
}

function showImc(weight, height) {
  calculateImc(weight, height)
    .then((result) => {
      console.log(`o resultado do imc foi de ${result}`);

      if (result < 18.5) console.log("situação: MAGREZA");
      else if (result < 25) console.log("situação: NORMAL");
      else if (result < 30) console.log("situação: SOBREPESO");
      else if (result < 40) console.log("situação: OBESIDADE");
      else console.log("situação: OBESIDADE GRAVE");
    })
    .catch((err) => {
      console.log(err);
    });

  console.log(`calculando o peso ${weight} e altura ${height}`);
}

showImc(50, 1.6);
showImc(48, 1.75);
