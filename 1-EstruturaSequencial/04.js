let nota1 = prompt("Digite a primeira nota: ");
let nota2 = prompt("Digite a Segunda nota: ");
let nota3 = prompt("Digite a Terceira nota: ");
let nota4 = prompt("Digite a Quarta nota: ");

nota1 = parseFloat(nota1);
nota2 = parseFloat(nota2);
nota3 = parseFloat(nota3);
nota4 = parseFloat(nota4);

let soma = nota1 + nota2 + nota3 + nota4;
console.log("Media = ", soma / 4);