alert("Boas vindas ao jogo do número secreto!");
let numMax = 100;
let numberSorteado = parseInt(Math.random() * numMax + 1); 
let numSecreto = numberSorteado;
let chute;
let tentativas = 1;



while(chute != numSecreto){
    chute = prompt(`Escolha um número entre 1 e ${numMax}`);

   {if(numSecreto == chute){
        break;
    }else{
            if(numSecreto > chute){
                alert(`O número secreto é maior que ${chute}`);
                }else{
                    alert(`O número secreto é menor que ${chute}`);
            }   
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(`Isso aí, você descobriu o número secreto ${numberSorteado} com ${tentativas} ${palavraTentativa}`);


