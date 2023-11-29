//para deixar o saldo atualizado, o transactions vai refletir o estado do banco, sem ficar chamando o fetch e deixa tudo mais rapido
//é melhor quando salva os dados no back-end mas também nesse array
let transactions = [];

function createTransactionContainer(id) {
  const container = document.createElement("div");
  container.classList.add("transaction");
  container.id = `transaction-${id}`;
  return container;
}

function createTransactionTitle(name) {
  const title = document.createElement("span");
  title.classList.add("transaction-title");
  title.textContent = name;
  return title;
}

function createTransactionAmount(amount) {
  //api - recurso de internacionalização, coisas que mudam em lugares diferentes ex: data, moeda, decimais
  const span = document.createElement("span");

  //cria um objeto que formata, o modelo que a gnt quer formatar e como a gnt quer
  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long", //nao vai abreviar
    currency: "BRL",
    style: "currency", //estilo de moeda
  }); //ou usa .formater.format(amount)
  const formatedAmount = formater.format(amount);

  //Entrada de dinheiro - credito
  //Saida de dinheiro - debito

  if (amount > 0) {
    span.textContent = `${formatedAmount} C`;
    span.classList.add("transaction-amount", "credit");
  } else {
    span.textContent = `${formatedAmount} D`;
    span.classList.add("transaction-amount", "debit");
  }

  return span;
}

//se a função existir, da pra editar o valor
function createdEditTransactionBtn(transaction) {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.textContent = "Editar";
  editBtn.addEventListener("click", () => {
    document.querySelector("#id").value = transaction.id;
    document.querySelector("#name").value = transaction.name;
    document.querySelector("#amount").value = transaction.amount;
  });

  return editBtn;
}

function createDeleteTransactionBtn(id) {
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.textContent = "Excuir";
  deleteBtn.addEventListener("click", async () => {
    await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
    });
    deleteBtn.parentElement.remove();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1);
    updateBalance();
  });
  //é ESSENCIAL retornar a função
  return deleteBtn;
}

//Função que vai renderizar as outras
function renderTransaction(transaction) {
  const container = createTransactionContainer(transaction.id);
  const title = createTransactionTitle(transaction.name);
  const amount = createTransactionAmount(transaction.amount);
  const editBtn = createdEditTransactionBtn(transaction);
  const deleteBtn = createDeleteTransactionBtn(transaction.id);

  container.append(title, amount, editBtn, deleteBtn);
  document.querySelector("#transactions").append(container);
}

//novas transicoes - função do botão submit
async function saveTransaction(ev) {
  ev.preventDefault();

  const id = document.querySelector("#id").value;
  const name = document.querySelector("#name").value;
  const amount = parseFloat(document.querySelector("#amount").value);

  if (id) {
    //editar a transicao com esse id
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const transaction = await response.json();
    const indexToRemove = transactions.findIndex((t) => t.id === id);
    transactions.splice(indexToRemove, 1, transaction);
    document.querySelector(`#transaction-${id}`).remove();
    renderTransaction(transaction);
  } else {
    //criar nova transacao
    const response = await fetch("http://localhost:3000/transactions", {
      method: "POST",
      body: JSON.stringify({ name, amount }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const transaction = await response.json();
    transactions.push(transaction);
    renderTransaction(transaction);
  }

  ev.target.reset(); //limpa formulario
  updateBalance(); //update o saldo
}

//fetch
async function fetchTransactions() {
  return await fetch("http://localhost:3000/transactions").then((res) =>
    res.json()
  );
}

//vai calcular o saldo total baseado no setup
function updateBalance() {
  const balanceSpan = document.querySelector("#balance");
  const balance = transactions.reduce(
    (sum, transaction) => sum + transaction.amount,
    0
  );
  const formater = Intl.NumberFormat("pt-BR", {
    compactDisplay: "long",
    currency: "BRL",
    style: "currency",
  });
  balanceSpan.textContent = formater.format(balance);
}

async function setup() {
  const results = await fetchTransactions();
  transactions.push(...results);
  transactions.forEach(renderTransaction);
  updateBalance();
}

document.addEventListener("DOMContentLoaded", setup);
document.querySelector("form").addEventListener("submit", saveTransaction);
