/* 10 pontos
9 – Pedir ao usuário dois números e imprimir nesse intervalo os números ímpares.
Nome aluno:Pedro Henrique rodrigues dos santos
*/
var teclado = require('prompt-sync')();
var numeroUm = parseInt(teclado('Digite o primeiro número: '));
var numeroDois = parseInt(teclado('Digite o segundo número: '));
var atual = numeroUm;
if (numeroUm > numeroDois) {
    atual = numeroDois;
    numeroDois = numeroUm;
}
console.log('Números ímpares no intervalo:');
while (atual <= numeroDois) {
    if (atual % 2 !== 0) {
        console.log(atual);
    }
    atual++;
}
