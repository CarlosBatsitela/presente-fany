console.log("Projeto Iniciado ❤️");

const botao = document.getElementById("abrirPresente");

const inicio = document.getElementById("inicio");

const presente = document.getElementById("presente");

const abrirCarta = document.getElementById("abrirCarta");

const carta = document.getElementById("carta");

const textoCarta = document.getElementById("textoCarta");

const fotos = document.getElementById("fotos");

const proximaFoto = document.getElementById("proximaFoto");

const fotoAtual = document.getElementById("fotoAtual");

const tempo = document.getElementById("tempo");

const contador = document.getElementById("contador");

const musica = document.getElementById("musica");


let numeroFoto = 1;

const inicioNamoro = new Date("2023-09-04T19:00:00");


const listaFotos = [

    "imagem/foto1.jpg",
    "imagem/foto2.jpg",
    "imagem/foto3.jpg",
    "imagem/foto4.jpg"

];

botao.addEventListener("click", () => {
    inicio.classList.add("oculto");
    presente.classList.remove("oculto");
    musica.play().catch(() => {

    console.log("Navegador bloqueou o áudio");
    });
});

abrirCarta.addEventListener("click", () => {
    presente.classList.add("oculto");
    carta.classList.remove("oculto");
textoCarta.innerHTML = `
Vida <br><br>
Hoje é um dia muito especial, porque é o dia da pessoa mais incrível e especial do mundo pra mim.<br><br>
Tentei fazer esse simples presente digital para mostrar um pouco do amor que sinto por você.<br><br>
Espero que você goste. Eu Te Amo Thiff ❤️
`;
setTimeout(() => {

    carta.classList.add("oculto");

    fotos.classList.remove("oculto");


    setTimeout(() => {

        fotos.classList.add("oculto");

        contador.classList.remove("oculto");

    }, 15000);


}, 8000);

});

proximaFoto.addEventListener("click", () => {

    numeroFoto++;

    if(numeroFoto > listaFotos.length){

        numeroFoto = 1;

    }

    fotoAtual.style.animation = "none";

setTimeout(() => {

    fotoAtual.style.animation = "trocarFoto .6s ease";

}, 10);


fotoAtual.src = listaFotos[numeroFoto - 1];

});

function atualizarContador(){

    const agora = new Date();

    const diferenca = agora - inicioNamoro;


    const segundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(segundos / 86400);

    const horas = Math.floor((segundos % 86400) / 3600);

    const minutos = Math.floor((segundos % 3600) / 60);

    const segundosRestantes = segundos % 60;


    tempo.innerHTML = `
    ${dias} dias ❤️<br>
    ${horas} horas ❤️<br>
    ${minutos} minutos ❤️<br>
    ${segundosRestantes} segundos
    `;

}


setInterval(atualizarContador,1000);

atualizarContador();