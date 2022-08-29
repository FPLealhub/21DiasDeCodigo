const erradaDois = document.querySelectorAll('input')

erradaDois.forEach(button => {
  button.addEventListener('click', () => {
    if (button.value == 4) {
      alert('Parabéns, você acertou esta questão')
    } else {
      alert('Errado!, Por favor tente novamente.')
    }
  })
})
