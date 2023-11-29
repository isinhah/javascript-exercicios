//3 - Função que renderiza as informações na tela
function createCountryCard(country) {
  const card = document.createElement("div");
  card.classList.add("country");

  //Nome do pais
  const countryName = country.name.common; //formato que a API usa
  const name = document.createElement("h2");
  name.textContent = countryName;

  //Bandeira do pais
  const flag = document.createElement("img");
  flag.src = country.flags.svg;
  flag.alt = countryName;

  card.append(name, flag);
  document.querySelector("#countries").append(card);
}

async function getCountries() {
  //1 - Fazendo a requisição
  //2 - Recebendo as informações
  //fetch: faz uma chamada para uma api externa (por padrão de solicitações GET)
  const response = await fetch("https://restcountries.com/v3.1/all");
  //tem que converter a requisição enviada pelo fetch de uma forma que de pra manipular no js
  const countries = await response.json(); //converteu o response em json, precisa usar o await para nao voltar uma promise

  //4 - Para cad pais, vai executar o código
  countries.forEach(createCountryCard);
}

getCountries();
