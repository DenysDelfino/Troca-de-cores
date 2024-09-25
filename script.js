function trocaCor(cor) {
    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = cor;
}

function corAleatoria() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    document.body.style.backgroundImage = 'none';
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function aplicaCorPersonalizada() {
    const corInput = document.querySelector('.input-cor').value;
    if (isValidColor(corInput)) {
        trocaCor(corInput);
    } else {
        alert('Por favor, insira um valor de cor válido (nome da cor ou código HEX).');
    }
}

function isValidColor(strColor) {
    const s = new Option().style;
    s.color = strColor;
    return s.color !== '';
}

function escolherImagem(imagem) {
    const reader = new FileReader();

    reader.onload = function (evento) {
        const urlImagem = evento.target.result;
        document.body.style.backgroundImage = `url(${urlImagem})`;
    };

    reader.readAsDataURL(imagem);
}