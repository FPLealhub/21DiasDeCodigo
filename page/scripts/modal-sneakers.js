const photo = document.querySelector('#dia15 .photos')
const swiperContainer = document.querySelector('#dia15 .swiper-container')

photo.addEventListener('click', () => {
  document.body.classList.add('active')
})

swiperContainer.addEventListener('click', () => {
  document.body.classList.remove('active')
})

/*contador de itens */
const quant = document.querySelector('#res')
const menos = document.querySelector('#menos')
const mais = document.querySelector('#mais')

let res = 1

mais.addEventListener('click', () => {
  quant.innerHTML = `${res++}`
})

menos.addEventListener('click', () => {
  quant.innerHTML = `${res--}`
})

/*Abrir modal do menu */
var openMenuSite = document.querySelector('#dia15 .open-menu')
var closeMenuSite = document.querySelector('#dia15 .close-menu')

openMenuSite.addEventListener('click', () => {
  document.body.classList.add('menu-expanded')
})

closeMenuSite.addEventListener('click', () => {
  document.body.classList.remove('menu-expanded')
})
