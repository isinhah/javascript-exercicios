function sum(a, b) {
  const firstNumber = Number(a);
  const secondNumber = Number(b);

  //se retornar NaN (numero invalido)
  if (isNaN(firstNumber) || isNaN(secondNumber)) {
    throw new Error("arguments must be two numbers"); //lançar erro
  }

  //senão retorna o calculo mesmo
  return firstNumber + secondNumber;
}

//tenta executar esse codigo, se der algum erro, faça outra coisa
try {
  console.log(sum(2, 9));
  console.log(sum(true, 14));
  console.log(sum(undefined, 22));
  console.log(sum(18, "0"));
  console.log(sum(39, null));
  console.log(sum(13, "zero"));
} catch {
  //se o erro ocorrer, faça isso
  console.log("um erro ocorreu");
} finally {
  console.log("calculations finished");
}
