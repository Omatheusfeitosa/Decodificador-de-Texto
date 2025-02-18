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
    let novaArea = document.createElement('textarea');
    
    novaArea.className = 'nova-area';
    novaArea.setAttribute('disabled', '');
    novaArea.textContent = textoEncriptado;

    imagem.parentNode.replaceChild(novaArea, imagem);

    let section = document.querySelector('.apresentacao-secundaria')
    let botao = document.createElement('button');
    botao.textContent = 'Copiar'
    botao.className = 'botao3';
    botao.addEventListener('click', function(){
        navigator.clipboard.writeText(novaArea.innerHTML);
        limpaCampo('.nova-area')
    })

    section.appendChild(botao)

    limpaCampo('.entrada')    
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

    let paragrafo = document.querySelector('.nova-area');
    let novaArea = document.createElement('textarea');
    
    novaArea.className = 'nova-area';
    novaArea.setAttribute('disabled', '');
    novaArea.textContent = textoEncriptado;

    let elemento = paragrafo.parentNode

    elemento.replaceChild(novaArea, paragrafo);

    limpaCampo('.entrada')

}

function limpaCampo(classe) {
    document.querySelector(`${classe}`).value = ''
}

// ((codigoDaLetraASC - cod1aLetra + desloc) % tamDoAlfabeto) + cod1Letra
// ((codigoDaLetraASC - 65 + 3) % 26) + 65