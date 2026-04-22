import {iniciarMudancaDeSlide} from "./components/mudanca-de-imagen-principal.js";

iniciarMudancaDeSlide();

$(window).on('load', function() {
    $(".base-bloco-imagens-canais").slick({
        slidesToShow: 5.2,
        slidesToScroll: 4,
        infinite:false,
        arrows:false,
    })
    $(".cards-filmes-top-10").slick({
        slidesToShow: 5,
        slidesToScroll:1,
        infinite:false,
        arrows:false,
    })
});