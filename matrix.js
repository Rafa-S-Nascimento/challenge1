const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");

const w = tela.width = document.body.offsetWidth;
const h = tela.height = 1080;
const colunas = Math.floor(w / 20) + 1;
const posiçãoY = Array(colunas).fill(0);

pincel.fillStyle = "#000";
pincel.fillRect(0, 0, w, h);

function desenharMatrix() {
    pincel.fillStyle = "#0001";
    pincel.fillRect(0, 0, w, h);

    pincel.fillStyle = "#0f0";
    pincel.font = "15px monospace";

    posiçãoY.forEach((y, index) => {
        let text = String.fromCharCode(Math.random() * 128);
        let x = index * 20;        

        pincel.fillText(text, x, y);        

        if (y > 100 + Math.random() * 1000) {
            posiçãoY[index] = 0;
        }
        else {
            posiçãoY[index] = y + 20;
        }
    })
}

setInterval(desenharMatrix,50);


