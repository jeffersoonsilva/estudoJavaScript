let valorHora = prompt("Infome quanto você ganha por hora: ");
let horasTrabalhadaMes = prompt("Informe quantas horas trabalhadas no mês: ");

valorHora = parseFloat(valorHora);
horasTrabalhadaMes = parseFloat(horasTrabalhadaMes);

let salarioBruto = valorHora * horasTrabalhadaMes;
let valorInss = salarioBruto * 0.08;
let valorIr = salarioBruto * 0.11;
let valorSindicato = salarioBruto * 0.05;
let salarioLiquido = salarioBruto - valorInss - valorIr - valorSindicato;

console.log("Salario bruto = ", salarioBruto);
console.log("INSS = ", valorInss);
console.log("IR = ", valorIr);
console.log("Sidicato = ", valorSindicato);
console.log("Salario liquido = ", salarioLiquido);