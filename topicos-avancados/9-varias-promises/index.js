const numbers = [4, 8, 9, 5, 13, 77];

function asyncSquare(x) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number") {
      reject(false);
    } else {
      resolve(x * x);
    }
  });
}

//o map, por padrão, vai devolver um array e nesse caro o numero vai para o asyncsquare (promise), então o map vai devover um array de promises
Promise.all(numbers.map((number) => asyncSquare(number))).then((squares) => {
  console.log(squares);
});
