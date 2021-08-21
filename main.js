// ABRIR MENU NO MOBILE

let hamburger = document.querySelector('.hamburger')
let mobileMenu = document.querySelector('.mobile-menu')

hamburger.onclick = function() {
  mobileMenu.classList.toggle('visible');
}

// FECHANDO MENU EM CASO DE REAJUSTE DO TAMANHO DE TELA COM MENU ABERTO

window.addEventListener('resize', function() {
  if(window.matchMedia("(min-width: 701px)").matches) {
    mobileMenu.classList.remove('visible')
  }
})

// FECHANDO MENU MOBILE SE UMA OPÇÃO FOI SELECIONADA

let mobileMenuItem = mobileMenu.querySelector('ul')

mobileMenuItem.onclick = function() {
  mobileMenu.classList.remove('visible')
}