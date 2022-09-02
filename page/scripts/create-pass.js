function create() {
  var pass

  for (var i = 0; i < 6; i++) {
    i == 0
      ? (pass = Math.floor(Math.random() * 10).toString())
      : (pass += Math.floor(Math.random() * 10).toString())
  }

  document.querySelector('#dia18 span').innerHTML = pass
}
