/*10 pontos
10 – Crie um programa que receba os dados de dez pessoas e calcule a média de altura das
pessoas maiores de idade.
Nome aluno:Pedro henrique rodrigues dos santos
*/
var teclado = require('prompt-sync')();
var somaAlturas = 0;
var contadorMaiores = 0;
var contador = 1;
while (contador <= 10) {
    console.log("Pessoa ".concat(contador, ":"));
    var idade = parseInt(teclado('Digite a idade: '));
    var altura = parseFloat(teclado('Digite a altura (em metros): '));
    if (idade >= 18) {
        somaAlturas += altura;
        contadorMaiores++;
    }
    contador++;
}
if (contadorMaiores > 0) {
    var media = somaAlturas / contadorMaiores;
    console.log("A m\u00E9dia de altura das pessoas maiores de idade \u00E9: ".concat(media.toFixed(2), " metros"));
}
else {
    console.log("Nenhuma pessoa maior de idade foi cadastrada.");
}
