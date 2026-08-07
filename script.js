const reiniciar = document.getElementById("reiniciar");
const textoFinal = document.getElementById("textoFinal");

const abrirPresente = document.getElementById("abrirPresente");
const presente = document.getElementById("presente");

const abrirCarta = document.getElementById("abrirCarta");
const carta = document.getElementById("carta");

const fotos = document.getElementById("fotos");
const fotoAtual = document.getElementById("fotoAtual");
const proximaFoto = document.getElementById("proximaFoto");

const contador = document.getElementById("contador");
const tempo = document.getElementById("tempo");

const final = document.getElementById("final");
const coracoes = document.getElementById("coracoes");


// ABRIR PRESENTE

abrirPresente.addEventListener("click", () => {

    document.getElementById("inicio").classList.add("oculto");

    presente.classList.remove("oculto");

});


// ABRIR CARTA

abrirCarta.addEventListener("click", () => {

    presente.classList.add("oculto");

    carta.classList.remove("oculto");

    document.getElementById("textoCarta").innerHTML = `

    Vida ❤️<br><br>

    Hoje é um dia muito especial,<br>
    porque é o dia da pessoa mais incrível e especial do mundo pra mim.<br><br>

    Tentei fazer esse simples presente para mostrar um pouco do amor que sinto por você.<br><br>

    Espero que você goste.<br><br>

    Eu Te Amo Thiff ❤️

    `;


    setTimeout(() => {

        carta.classList.add("oculto");

        fotos.classList.remove("oculto");

    }, 10000);

});


// FOTOS

let foto = 1;

proximaFoto.addEventListener("click", () => {

    foto++;

    if (foto > 4) {

        fotos.classList.add("oculto");

        contador.classList.remove("oculto");

        iniciarContador();

        return;

    }

    fotoAtual.src = `imagem/foto${foto}.jpg`;

});


// CONTADOR

function iniciarContador() {

    const inicioNamoro = new Date("2023-09-04T19:00:00");

    const contadorAtual = setInterval(() => {

        const agora = new Date();

        const diferenca = agora - inicioNamoro;


        const dias = Math.floor(
            diferenca / (1000 * 60 * 60 * 24)
        );


        const horas = Math.floor(
            (diferenca / (1000 * 60 * 60)) % 24
        );


        const minutos = Math.floor(
            (diferenca / (1000 * 60)) % 60
        );


        const segundos = Math.floor(
            (diferenca / 1000) % 60
        );


        tempo.innerHTML = `

        ${dias} dias ❤️<br>

        ${horas} horas<br>

        ${minutos} minutos<br>

        ${segundos} segundos

        `;

    }, 1000);


    // DEPOIS DE 8 SEGUNDOS VAI PARA A TELA FINAL

    setTimeout(() => {

        clearInterval(contadorAtual);

        contador.style.display = "none";

        final.style.display = "flex";

        escreverFinal();

        iniciarCoracoes();

    }, 8000);

}


// TEXTO FINAL

function escreverFinal() {

    const titulo = document.querySelector(".mensagemFinal h1");

    const texto = "Eu Te Amo ❤️";

    titulo.innerHTML = "";

    let i = 0;


    const escrever = setInterval(() => {

        titulo.innerHTML += texto[i];

        i++;


        if (i >= texto.length) {

            clearInterval(escrever);

            animarMensagem();

        }

    }, 200);

}


// ANIMAÇÃO DA MENSAGEM FINAL

function animarMensagem() {

    const mensagem = document.querySelector(".mensagemFinal p");

    mensagem.style.opacity = "0";

    mensagem.style.transform = "translateY(30px)";


    setTimeout(() => {

        mensagem.style.transition = "1s";

        mensagem.style.opacity = "1";

        mensagem.style.transform = "translateY(0)";

    }, 500);

}


// CORAÇÕES

function iniciarCoracoes() {

    setInterval(() => {

        const coracao = document.createElement("span");

        coracao.innerHTML = "❤️";

        coracao.classList.add("coracao");


        coracao.style.left =
            Math.random() * 100 + "vw";


        coracao.style.animationDuration =
            (Math.random() * 3 + 3) + "s";


        coracoes.appendChild(coracao);


        setTimeout(() => {

            coracao.remove();

        }, 6000);


    }, 300);

}


// BOTÃO RECOMEÇAR

reiniciar.addEventListener("click", () => {

    location.reload();

});