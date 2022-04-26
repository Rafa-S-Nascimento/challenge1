const criptografia = ["enter", "imes", "ai", "ober", "ufat"];
const descriptografia = ["e", "i", "a", "o", "u"];

const inputText = document.getElementById("inputText");
const msgP = document.getElementById("msgP");

const bCriptografar = document.getElementById("bCriptografar");
const bDescriptografar = document.getElementById("bDescriptografar");
const copia = document.querySelector("#copia");

bCriptografar.addEventListener("click", criptografar);
bDescriptografar.addEventListener("click", descriptografar);
copia.addEventListener("click", copiar);

inputText.addEventListener("keypress", function (e) {
    if (!validacao(e)) {
        e.preventDefault();
    }
});

msgP.addEventListener("change", function () {
    copia.style.color = "darkblue";
});

let msgPLength = 0;

function criptografar() {
    let texto = inputText.value;
    let resultado = "";

    if (texto != "") {
        resultado = texto.replace(/e|i|a|o|u/g, function (x) {
            if (x == descriptografia[0]) {
                return criptografia[0];
            } else if (x == descriptografia[1]) {
                return criptografia[1];
            } else if (x == descriptografia[2]) {
                return criptografia[2];
            } else if (x == descriptografia[3]) {
                return criptografia[3];
            } else if (x == descriptografia[4]) {
                return criptografia[4];
            }
        });

        exibirResultado(resultado);
        mudarCorButtonCopiar();
        limparInput();
    }
}

function descriptografar() {
    let texto = inputText.value;
    let resultado = "";

    if (texto != "") {
        resultado = texto.replace(/enter|imes|ai|ober|ufat/g, function (x) {
            if (x == criptografia[0]) {
                return descriptografia[0];
            } else if (x == criptografia[1]) {
                return descriptografia[1];
            } else if (x == criptografia[2]) {
                return descriptografia[2];
            } else if (x == criptografia[3]) {
                return descriptografia[3];
            } else if (x == criptografia[4]) {
                return descriptografia[4];
            }
        });

        exibirResultado(resultado);
        mudarCorButtonCopiar();
        limparInput();
    }
}

function exibirResultado(texto) {
    let divImg = document.querySelector(".divImg");

    divImg.style.display = "none";

    msgP.textContent = texto;

    copia.style.display = "block";
}

async function copiar() {
    let msgP = document.querySelector("#msgP").textContent;
    await navigator.clipboard.writeText(msgP);

    copia.style.color = "green";
    copia.style.borderColor = "green";

    msgPLength = msgP.length;
}

window.onload = function () {
    limparInput();
};

function limparInput() {
    inputText.value = "";
}

function mudarCorButtonCopiar() {
    let msgPAtual = msgP.textContent.length;

    if (msgPAtual != msgPLength) {
        copia.style.color = "darkblue";
        copia.style.borderColor = "darkblue";
    }
}

function validacao(e) {
    const caracter = String.fromCharCode(e.keyCode);

    const regEx = "[a-z0-9 ]";

    if (caracter.match(regEx)) {
        return true;
    } else {
        return false;
    }
}
