/* (5 pontos)
2 - Escreva um programa que receba três números inteiros e mostre eles em ordem
decrescente.
Nome Aluno:Pedro Henrique rodrigues dos santos
*/
let teclado = require(`prompt-sync`)();

console.log(`-----------------------------`);
console.log(`-- Ordem decrescente 3 números --`);
console.log(`-----------------------------`);

let num1: number = parseInt(teclado(`Digite o primeiro número: `));
let num2: number = parseInt(teclado(`Digite o segundo número: `));
let num3: number = parseInt(teclado(`Digite o terceiro número: `));

let maior: number, meio: number, menor: number;

if (num1 >= num2 && num1 >= num3) {
    maior = num1;
    if (num2 >= num3) {
    meio = num2;
    menor = num3;
} else {
    meio = num3;
    menor = num2;
}
} else if (num2 >= num1 && num2 >= num3) {
    maior = num2;
    if (num1 >= num3) {
        meio = num1;
        menor = num3;
    } else {
        meio = num3;
        menor = num1;
    }
} else {
    maior = num3;
    if (num1 >= num2) {
        meio = num1;
        menor = num2;
    } else {
        meio = num2;
        menor = num1;
    }
}
console.log(`Ordem decrescente: ${maior}, ${meio}, ${menor}`);   