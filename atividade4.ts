/*10 pontos
4 - Desenvolva um programa que calcule a média de uma sequência de números informados
pelo usuário. O programa deve continuar solicitando números até que o usuário indique que
não deseja mais continuar. Ao final, exiba a média dos valores digitados.
Nome aluno:Pedro henrique rodrigues dos santos
*/
let teclado = require(`prompt-sync`)();


console.log(`------------------------------`);
console.log(`-- CÁLCULO DE MÉDIA SIMPLES --`);
console.log(`------------------------------`);

let soma: number = 0;
let contador: number = 0;
let continuar: string = `s`;


while (continuar === `s` || continuar === `S`) {
    let numero: number = parseFloat(teclado(`Digite um número: `));
    soma += numero;
    contador++;
    continuar = teclado(`Deseja digitar outro número? (s/n): `);
}

 if (contador > 0) {
    let media: number = soma / contador;
    console.log(`A média dos números digitados é: ${media}`);
} else {
    console.log(`Nenhum número foi digitado.`);
}