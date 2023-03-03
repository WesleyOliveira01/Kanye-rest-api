
const getKanye = 'https://api.kanye.rest'

const div = document.createElement('div')
div.classList.add('citacao')






async function kanyeFunction (api){

    const kanyeQuote = await fetch(api)

    const quote = await kanyeQuote.json()

    const container = document.querySelector(".quote")

    console.log(quote.quote)

    div.innerHTML = quote.quote
    
    container.appendChild(div)

}
kanyeFunction(getKanye)



