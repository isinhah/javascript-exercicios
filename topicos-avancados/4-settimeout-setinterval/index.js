console.log("programa iniciado");

let seconds = 0;
const intervalId = setInterval(() => {
  seconds += 3;
  console.log(`se pssaram ${seconds} segudnos`);
  if (seconds > 10) {
    clearInterval(intervalId);
    console.log("tempo esgotado.. encerrando");
  }
}, 1000 * 3);
