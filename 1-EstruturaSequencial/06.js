let raio = prompt("Digite a medida do raio de um circulo");
raio = parseInt(raio);
let area = (2 * raio * Math.PI);

console.log("A area do circulo de raio ", raio, " é =", area.toFixed(2));