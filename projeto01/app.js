let listaNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

function exibirMensagemInicial(){
exibirTextoNaTela(`h1`, `Jogo do número secreto`);
exibirTextoNaTela(`p`, `Escolha um número entre 1 e 10`);
}

function exibirTextoNaTela(tag, texto){ //compactamos para quando se tem várias variaveis
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.1});
}

exibirMensagemInicial();

function verificarChute(){ //dar uma função para o botão e colocar nomes descritivos
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
        exibirTextoNaTela(`h1`, `Acertou`);
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentivas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela(`p`, mensagemTentivas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto){
            exibirTextoNaTela(`p`, `O número secreto é menor`);
        }else{
            exibirTextoNaTela(`p`,`O número secreto é maior`);
        }
    tentativas++;
        limparCampo();
    }
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}


/*let titulo = document.querySelector('h1'); // let é uma var, cocument é oq puxa do html e query seleciona qual vc vai usar
titulo.innerHTML = 'Jogo do número secreto'; //dentro do html

let paragrafo = document.querySelector('p'); //selecionamos a propriedade p
paragrafo.innerHTML = 'Escolha um número entre 1 e 10'; //declara o texto igual o primeiro*/

function gerarNumeroAleatorio (){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //parseInt para tranformar em n° inteiro, return atribui o valor à var
    let qntElementosListas = listaNumerosSorteados.length;
    
    if(qntElementosListas == numeroLimite){
        listaNumerosSorteados = [];
    }

    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }else{
        listaNumerosSorteados.push(numeroEscolhido);
        console.log(listaNumerosSorteados);
        return numeroEscolhido;
    }
}
