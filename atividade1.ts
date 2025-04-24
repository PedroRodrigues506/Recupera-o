/* (5 pontos)
1 - Crie um programa que peça um número ao usuário e armazene ele na variável x. Depois
peça outro número e armazene na variável y.
Mostre esses números. Em seguida, faça com que x passe a ter o valor de y, e que y passe a ter
o valor de x e mostre os números.
Nome Aluno: Renan Vinicius
*/ 
let teclado = require(`prompt-sync`)(); 

console.log(`=======================`);
console.log(`--  Variáveis x e y  --`);
console.log(`=======================`);


let x: number = parseFloat(teclado(`Digite o valor de x: `));
let y: number = parseFloat(teclado(`Digite o valor de y: `));


console.log(`O resultado deu x = ${y} e y = ${x}`);