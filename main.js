const getKanye = "https://api.kanye.rest";

const div = document.createElement("div");
div.classList.add("citacao");

async function kanyeFunction(api) {
  const kanyeQuote = await fetch(api);

  const quote = await kanyeQuote.json();

  const container = document.querySelector(".quote");
  const box = document.querySelector(".container");

  console.log(quote.quote);

  div.innerHTML = quote.quote;

  container.appendChild(div);

  box.addEventListener("click", function () {
    location.reload();
  });
}
kanyeFunction(getKanye);
