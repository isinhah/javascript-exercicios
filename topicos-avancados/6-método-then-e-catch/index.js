function execute() {
  //faz algo
  return new Promise((resolve, reject) => {
    //comportamento que a gente quer:
    console.log("a promise esta sendo executada");
    setTimeout(() => {
      if (true) {
        reject("a promise deu erro");
      } else {
        console.group("resolvendo a promise...");
        resolve(42); //chama o resolve e bota como parametro o resultado que a gnt quer
      }
    }, 1000);
  });
}

//pra saber quando a promise vai terminar
//then serve para lidar com uma promise resolvivda quando a promise é resolvida
//essa callback é importante pois vai receber o resultado

execute()
  .then((result) => {
    console.log(`a promise foi resolvida, o resultado foi ${result}`); //faz o que quiser com o resultado
  })
  .catch((err) => {
    console.log(`a promise foi rejeitada. motivo: ${err}`);
  })
  .finally(() => {
    console.log("a promise foi finalizada");
  });

//o catch serve para tratar os erros da promise, ou seja, quando ela é rejeitada
//finally: se a promisse foi resolvida, rejeitada ou não, executa tal codigo
