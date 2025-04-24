/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:Pedro henrique rodrigues dos santos
*/
var teclado = require("prompt-sync")();
console.log("------------------------------");
console.log("-- C\u00C1LCULO DE M\u00C9DIA SIMPLES --");
console.log("------------------------------");
var soma = 0;
var contador = 0;
var continuar = "s";
while (continuar === "s" || continuar === "S") {
    var numero = parseFloat(teclado("Digite um n\u00FAmero: "));
    soma += numero;
    contador++;
    continuar = teclado("Deseja digitar outro n\u00FAmero? (s/n): ");
}
if (contador > 0) {
    var media = soma / contador;
    console.log("A m\u00E9dia dos n\u00FAmeros digitados \u00E9: ".concat(media));
}
else {
    console.log("Nenhum n\u00FAmero foi digitado.");
}
