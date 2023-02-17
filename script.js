// ----------------- Biblioteca ScrollReveal -------------------

window.sr = ScrollReveal({ reset: true });

//banner - ScrollReveal
ScrollReveal().reveal('.h1-banner',{duration: 1500});

//chamada pra ação - ScrollReveal
ScrollReveal().reveal('.content2-btn-display',{duration: 2000});
ScrollReveal().reveal('.img-lottie',{duration: 1000});

// -----------------------------------------------------------

// ---------------------- Menu responsivo

document.querySelector('.list-header');
document.querySelector('.button-header-r');

var headerButton = document.querySelector('.button-header-r');

var listaDoHeader = document.querySelector('.list-header');

var btnSairHeader = document.querySelector("#btn-sair-header");

// Abrir o Menu Responsivo
headerButton.addEventListener("click", function(){
    listaDoHeader.style.display = "block"
});

// Fechar o Menu Responsivo
btnSairHeader.addEventListener("click", function(){
    listaDoHeader.style.display = "none"
});