alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 100;

// Padrão de escrita; -> Comentarios
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto);

let chute;
let tentativas = 1;

// Enquanto o chute != de numero secreto repita
while(chute != numeroSecreto){
    chute = prompt(`Escolha um numero entre 1 e ${numeroMaximo}`);
    
    if (numeroSecreto == chute) {
        break;
    } else {
        if(numeroSecreto > chute){
            alert(`O numero secreto é maior que ${chute}`);
        } else {
            alert(`O numero secreto é menor que ${chute}`);
        }
        tentativas++;
    } 
}
// Operadores logicos
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";

alert(`Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
