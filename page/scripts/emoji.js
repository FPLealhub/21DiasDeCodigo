function copyAngel() {
  let copyText = document.querySelector('#angel')
  copyText.select()
  document.execCommand('copy')
  alert('Texto copiado')
}

document.querySelector('#copyAngel').addEventListener('click', copyAngel)

function copyCute() {
  let copyText = document.querySelector('#cute')
  copyText.select()
  document.execCommand('copy')
  alert('Texto copiado')
}

document.querySelector('#copyCute').addEventListener('click', copyCute)

function copyRir() {
  let copyText = document.querySelector('#rir')
  copyText.select()
  document.execCommand('copy')
  alert('Texto copiado')
}

document.querySelector('#copyRir').addEventListener('click', copyRir)

function copyHappy() {
  let copyText = document.querySelector('#happy')
  copyText.select()
  document.execCommand('copy')
  alert('Texto copiado')
}

document.querySelector('#copyHappy').addEventListener('click', copyHappy)
