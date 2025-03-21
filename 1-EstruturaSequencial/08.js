let valorHora = prompt("Informe quanto você ganha por hora: ")
let horaTrabalhada = prompt("Informe a quantidade de horas trabalhada no mês: ")
valorHora = parseFloat(valorHora)
horaTrabalhada = parseFloat(horaTrabalhada)
let valorSalario = valorHora * horaTrabalhada


console.log("Seu sálario é = " , valorSalario)