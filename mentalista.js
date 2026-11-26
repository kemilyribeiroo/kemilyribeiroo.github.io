let slideAtual = 0;

const slides = document.querySelectorAll(".slide");
const indicadores = document.querySelectorAll(".indicador");


function mostrarSlide(numero) {

    slides.forEach(function(slide) {
        slide.classList.remove("ativo");
    });

    indicadores.forEach(function(indicador) {
        indicador.classList.remove("ativo");
    });

    slides[numero].classList.add("ativo");

    indicadores[numero].classList.add("ativo");
}


function mudarSlide(direcao) {

    slideAtual += direcao;

    if (slideAtual >= slides.length) {
        slideAtual = 0;
    }

    if (slideAtual < 0) {
        slideAtual = slides.length - 1;
    }

    mostrarSlide(slideAtual);
}


function irParaSlide(numero) {

    slideAtual = numero;

    mostrarSlide(slideAtual);
}


setInterval(function() {

    mudarSlide(1);

}, 5000);