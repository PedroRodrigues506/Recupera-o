/*10 pontos
7 - Desenvolva um programa que leia números até que a soma dos valores
digitados seja maior que 100.
Nome aluno:
*/
let teclado = require(`prompt-sync`)();

console.log(`------------------------------`);
console.log(`---- SOMANDO ATÉ PASSAR 100 ----`);
console.log(`------------------------------`);

let soma: number = 0;

while (soma <= 100) {
    let numero: number = parseFloat(teclado(`Digite um número: `));
    soma += numero;
}
console.log(`A soma passou de 100! Total: ${soma}`);