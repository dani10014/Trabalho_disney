export function iniciarMudancaDeSlide() {

    document.addEventListener("DOMContentLoaded", function() {
        const secaoBackground = document.querySelector(".banner");
        
        // Verificação: se a página não tiver banner, o código não dá erro
        if (!secaoBackground) return;

        const imagens = [
            "../../src/imagens/dois-hmens.webp",
            "../../src/imagens/batman.webp",
            "../../src/imagens/zootopia.webp",
            "../../src/imagens/futebol.webp",
            "../../src/imagens/jogadores.webp"
        ];
        
        let indiceAtual = 0;

        function mudarSlide() {
            indiceAtual = (indiceAtual + 1) % imagens.length;
            secaoBackground.style.backgroundImage = `url(${imagens[indiceAtual]})`;
        }
        setInterval(mudarSlide, 5000);
    });
}