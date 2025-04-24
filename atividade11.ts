/*10 pontos
11 – Simule a compra de um carro com as seguintes condições:
Exiba no prompt uma lista com 4 modelos de carros, cada um com um valor fixo.
O usuário deve escolher um dos carros disponíveis e selecionar a forma de pagamento:
 À vista: aplicar um desconto de 15% sobre o valor do carro.
 Parcelado: aplicar um acréscimo de 13% sobre o valor do carro.
Ao final, exiba o valor final da compra de acordo com a escolha do usuário.
Nome Aluno:
*/
let teclado = require(`prompt-sync`)();

console.log('-------------------------');
console.log('------CONCESSIONÁRIA-----');
console.log('-------------------------');

console.log(`Modelos disponíveis:`);
console.log(`1 - BMW (R$ 405000)`);
console.log(`2 - HB20 (R$ 90000)`);
console.log(`3 - I30 (R$ 68000)`);
console.log(`4 - CAMARO (R$ 65000)`);

let modelo: number = parseInt(teclado('Escolha o número do modelo desejado: '));

let valorCarro: number = 0;

if (modelo === 1) {
    valorCarro = 405000;
} else if (modelo === 2) {
    valorCarro = 90000;
} else if (modelo === 3) {
    valorCarro = 68000;
} else if (modelo === 4) {
    valorCarro = 65000;
} else {
    console.log('Modelo inválido.');
}