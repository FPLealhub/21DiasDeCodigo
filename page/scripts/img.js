const botaoPesquisar = document.querySelector('#dia19 #botaoPesquisar')
const resultado = document.querySelector('#dia19 #resultado')

botaoPesquisar.addEventListener('click', () => {
  const pesquisa = document.querySelector('#dia19 #pesquisa').value

  resultado.innerHTML = `<img src="https://source.unsplash.com/320x240/?${pesquisa}">`
})
