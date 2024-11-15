alert('Boas vindas ao jogo do número secreto!'); //entre aspas é um texto
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numero secreto
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');

    // se o chute for igual ao numero secreto, ai executa uma mensagem
    if (chute == numeroSecreto) {
        alert(`Parabéns! Você descobriu o número secreto (${numeroSecreto}) com ${tentativas} tentativa(s).`);
        }

    //caso o chute não seja igual ao numero secreto, outra coisa será executado.
    else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } 
        else {
            alert(`O número secreto é menor que ${chute}`);
        }
        //tentativas = tentativas + 1;
        tentativas++;
                  
    }   
}