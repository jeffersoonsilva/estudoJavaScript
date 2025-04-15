let grausCelsius = prompt("Informe a temperatura em graus grausCelsius: ");
grausCelsius = parseFloat(grausCelsius);
let grausFahrenheit = (grausCelsius * 9 / 5) + 32;

console.log("O valor em graus Fahrenheit é = " + grausFahrenheit.toFixed(2));