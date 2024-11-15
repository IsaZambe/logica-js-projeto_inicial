alert('Boas vindas ao jogo do número secreto!'); //entre aspas é um texto
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute = prompt('Escolha um número entre 1 e 30');
console.log('Valor do chute:', chute); //aparece o valor do chute do jogador

// console.log('Resultado da comparação:', chute == numeroSecreto); < mostra se o chute foi verdadeiro ou falso

// se o chute for igual ao numero secreto, ai executa uma mensagem
if (numeroSecreto == chute) {
    alert(`Parabéns! Você descobriu o número secreto ${numeroSecreto}`);
}

//caso o chute não seja igual ao numero secreto, outra coisa será executado.
else {
    // console.log('Valor do número secreto:', numeroSecreto); > mostra no console o valor do numero secreto novamente, deve ser escrito antes do alerta.
    alert('ERRRRRRRROOOOOU :)');
    
}
