function renderArticle(articleData) {
  const article = document.createElement("article");
  article.classList.add("article");
  article.id = `article-${articleData.id}`;

  const title = document.createElement("h3");
  title.classList.add("article-title");
  title.textContent = articleData.title;

  const content = document.createElement("div");
  content.classList.add("article-content");
  content.innerHTML = articleData.content;

  const author = document.createElement("div");
  author.classList.add("article-author");
  author.textContent = articleData.author;

  article.append(title, author, content);
  document.querySelector("#articles").appendChild(article);
}

async function fetchArticles() {
  const articles = await fetch("http://localhost:3000/articles").then((res) =>
    res.json()
  );
  articles.forEach(renderArticle);
}

document.addEventListener("DOMContentLoaded", () => {
  fetchArticles();
});

const form = document.querySelector("form");

form.addEventListener("submit", async (ev) => {
  ev.preventDefault; //pra nao mudar de pagina quando receber o requisito

  const articleData = {
    title: document.querySelector("#title").value,
    author: document.querySelector("#author").value,
    content: document.querySelector("#content").value,
  };

  //estrutura para enviar estrutura post
  const response = await fetch("http:://localhost:3000/articles", {
    method: "POST",
    headers: {
      //precisa avisar que tipo de conteudo estamos envianod
      "Content-Type": "application/json",
    },
    body: JSON.stringify(articleData), //vai converter o articledata em string json
  });

  const savedArticle = await response.json(); //converter response em objeto
  form.reset(); //limpa o formulario
  renderArticle(savedArticle); //vai renderizar o artigo

  console.log(savedArticle); //passando o article que foi salvo
});
