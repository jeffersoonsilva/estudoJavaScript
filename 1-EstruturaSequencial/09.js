let grausFahrenheit = prompt("Informe a temperatura em graus Fahrenheit: ")
grausFahrenheit = parseFloat(grausFahrenheit)
let grausCelsius = 5 * (grausFahrenheit - 32) / 9

console.log("O valor em graus Celsius é = " , grausCelsius.toFixed(2))