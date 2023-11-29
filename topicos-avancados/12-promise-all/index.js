//aula de promise.all() com async e await

function waitFor(seconds) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, seconds * 1000);
  });
}

const numbers = [4, 5, 9, 13, 77];

async function execute() {
  const squares = await Promise.all(
    numbers.map(async (number) => {
      await waitFor(2);
      return number * number;
    })
  );
  console.log(squares);
}

execute();
