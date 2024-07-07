document.getElementById('botaoCriptografar').onclick = function() {
    let texto = document.querySelector('.entrada').value;
    let textoCriptografado = criptografar(texto);
}

document.getElementById('botaoDescriptografar').onclick = function() {
    let texto = document.querySelector('.entrada').value;
    let textoDescriptografado = descriptografar(texto);
}

function geraNumero(codigo) {
    if(codigo === 32) {
        return codigo
    } else if (codigo >= 65 && codigo <= 90) {
        return ((codigo - 65 + 3) % 26) + 65
    } else if (codigo >= 97 && codigo <= 122) {
        return ((codigo - 97 + 3) % 26) + 97
    }

    return codigo
}

function criptografar(texto) {

    let array = []
    let textoEncriptado = ''
    for(let i = 0; i < texto.length; i++) {
        array.push(geraNumero(texto.charCodeAt(i)))
    }

    for(let i = 0; i < array.length; i++) {
        textoEncriptado += String.fromCharCode(array[i]) 
    }

    let imagem = document.getElementById('imagem-secundaria');
    let novoParagrafo = document.createElement('p');
    
    novoParagrafo.className = 'novo-paragrafo';
    novoParagrafo.textContent = textoEncriptado;

    imagem.parentNode.replaceChild(novoParagrafo, imagem);

    let section = document.querySelector('.apresentacao-secundaria')
    let botao = document.createElement('button');
    botao.textContent = 'Copiar'
    botao.className = 'botao3';
    botao.addEventListener('click', function(){
        navigator.clipboard.writeText(novoParagrafo.innerHTML)
    })
    section.appendChild(botao)

    limpaCampo()    
}

function geraNumeroInvertido(codigo) {
    if(codigo === 32) {
        return codigo
    } else if (codigo >= 65 && codigo <= 90) {
        return ((codigo - 65 - 3) % 26) + 65
    } else if (codigo >= 97 && codigo <= 122) {
        return ((codigo - 97 - 3) % 26) + 97
    }
    
    return codigo
}

function descriptografar(texto) {

    let array = []
    let textoEncriptado = ''
    for(let i = 0; i < texto.length; i++) {
        array.push(geraNumeroInvertido(texto.charCodeAt(i)))
    }

    for(let i = 0; i < array.length; i++) {
        textoEncriptado += String.fromCharCode(array[i]) 
    }   

    let paragrafo = document.querySelector('.novo-paragrafo');
    let novoParagrafo = document.createElement('p');
    
    novoParagrafo.className = 'novo-paragrafo';
    novoParagrafo.textContent = textoEncriptado;

    let elemento = paragrafo.parentNode

    elemento.replaceChild(novoParagrafo, paragrafo);

    limpaCampo()

}

function limpaCampo() {
    document.querySelector('.entrada').value = ''
}

// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1Letra
// ((codigoDaLetraASC - 65 + 3) % 26) + 65