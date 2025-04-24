/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/
var teclado = require("prompt-sync")();
console.log("------------------------------");
console.log("---- SOMANDO AT\u00C9 PASSAR 100 ----");
console.log("------------------------------");
var soma = 0;
while (soma <= 100) {
    var numero = parseFloat(teclado("Digite um n\u00FAmero: "));
    soma += numero;
}
console.log("A soma passou de 100! Total: ".concat(soma));
