$(document).ready(function() {

    ScrollReveal({ reset: true });

    animaDireita();
    animaEsquerda(); 
});

function animaDireita(){
    ScrollReveal().reveal('.animaDireita', {
        origin: 'right',
        duration: 2200,
        distance: '20%'
    })
}

function animaEsquerda(){
    ScrollReveal().reveal('.animaEsquerda', {
        origin: 'left',
        duration: 2200,
        distance: '20%'
    })
}