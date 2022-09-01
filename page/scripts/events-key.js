function myFunction(event) {
  var key = event.key

  document.querySelector('.key span').textContent = `${key}`

  document.querySelector('.event span').textContent = `${event.type}`
}
