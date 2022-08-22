'use strict'

var mm = 25
var ss = 0

var tempo = 1000 //Quantos milésimos valem 1segundo
var cron

function start() {
  cron = setInterval(timer, tempo)
}

function stop() {
  clearInterval(cron)
}

function reset() {
  clearInterval(cron)

  mm = 25
  ss = 0

  document.querySelector('#counter').innerText = '25:00'
}

function timer() {
  ss--

  if (ss == -1) {
    ss = 59
    mm--

    if (mm == -1) {
      clearInterval(cron)
      var audio = document.querySelector('audio')
      audio.play()
      alert('O tempo acabou!')
      reset()
    }
  }
  var format = (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss)
  document.querySelector('#counter').innerText = format
}
