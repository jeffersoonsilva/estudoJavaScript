let numInteiro1 = prompt("Informe um número inteiro:  ");
let numInteiro2 = prompt("Informe outro número inteiro:  ");
let numReal1 = prompt("Informe um número real:  ");

numInteiro1 = parseInt(numInteiro1);
numInteiro2 = parseInt(numInteiro2);
numReal1 = parseInt(numReal1);

console.log("o produto do dobro do primeiro com metade do segundo = " + numInteiro1 * 2 * (numInteiro2 / 2) );
console.log(" a soma do triplo do primeiro com o terceiro = " , (numInteiro1 * 3) + (numInteiro2 * 3));
console.log("o terceiro elevado ao cubo = " + numReal1 ** 3 );