alert('Boas vindas ao jogo do número secreto!'); //entre aspas é um texto
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');

// se o chute for igual ao numero secreto, ai executa uma mensagem
if (numeroSecreto == chute) {
    alert('Parabéns! Você descobriu o número secreto (29)');
}

//caso o chute não seja igual ao numero secreto, outra coisa será executado.
else {
    alert('ERRRRRRRROOOOOU :)');
}