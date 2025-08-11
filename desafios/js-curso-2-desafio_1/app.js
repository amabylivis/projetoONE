let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do desafio';

function clicarBotao (){
    console.log('O botão foi clicado')
};

function mensagem (){
    alert('Eu amo JS')
};

function mensInterativa(){
    let nomeCidade = prompt('Digite o nome da sua cidade: ')
    alert('Estive em '+ nomeCidade + ' e lembrei de você')
};
function soma() {
    let primeiroNumero = parseInt(prompt('Digite o primeiro número'));
    let segundoNumero = parseInt(prompt('Digite o segundo número'));
    let resultado = primeiroNumero + segundoNumero;
    alert(`${primeiroNumero} + ${segundoNumero} = ${resultado}`)
}