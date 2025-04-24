/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno:Pedro henrique rodrigues dos santos
*/
var teclado = require("prompt-sync")();
console.log("-----------------------------");
console.log("-     CONJUNTO DE NOTAS     -");
console.log("-----------------------------");
var maiorNota = 0;
var menorNota = 10;
var somaNotas = 0;
var i = 1;
while (i <= 5) {
    var nota = parseFloat(teclado("Digite a ".concat(i, "\u00AA nota: ")));
    if (nota > maiorNota) {
        maiorNota = nota;
    }
    if (nota < menorNota) {
        menorNota = nota;
    }
    somaNotas += nota;
    i++;
}
var media = somaNotas / 5;
console.log("Maior nota: ".concat(maiorNota));
console.log("Menor nota: ".concat(menorNota));
console.log("M\u00E9dia das notas: ".concat(media));
