function execute() {
  //faz algo
  return new Promise((resolve, reject) => {
    console.log("a promise esa sendo executada");
    setTimeout(() => {
      console.group("resolvendo a proimse...");
      resolve("resultado");
    }, 1000);
  });
}

const p = execute();

console.log(p);

setTimeout(() => {
  console.log(p);
}, 2000);
