/* 10 pontos
8 - Leia a idade e o sexo de 50 pessoas e mostre a média de idade para
cada sexo.
Nome aluno:
*/
var teclado = require("prompt-sync")();
var somaMasculino = 0;
var somaFeminino = 0;
var contadorMasculino = 0;
var contadorFeminino = 0;
var contador = 1;
while (contador <= 50) {
    console.log("Pessoa ".concat(contador));
    var idade = parseInt(teclado("Digite a idade: "));
    var sexo = teclado("Digite o sexo (M para masculino, F para feminino): ");
    if (sexo === 'M') {
        somaMasculino += idade;
        contadorMasculino++;
    }
    else if (sexo === 'F') {
        somaFeminino += idade;
        contadorFeminino++;
    }
    else {
        console.log("Sexo inv\u00E1lido!");
    }
    console.log("--------------------------");
    contador++;
}
var mediaMasculino = contadorMasculino > 0 ? somaMasculino / contadorMasculino : 0;
var mediaFeminino = contadorFeminino > 0 ? somaFeminino / contadorFeminino : 0;
console.log("M\u00E9dia de idade dos homens: ".concat(mediaMasculino));
console.log("M\u00E9dia de idade das mulheres: ".concat(mediaFeminino));
