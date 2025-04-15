let metroQuadrado = prompt("Informe o metro quadrado da área: ");
let litrosDeTinta = metroQuadrado / 3;
let lataDeTinta = Math.ceil(litrosDeTinta / 18);
let precoLata = 80.00;
let valorTotal = precoLata * lataDeTinta;

metroQuadrado = parseFloat(metroQuadrado);

console.log("Quantidades de latas de tinta a serem compradas = ", lataDeTinta);
console.log("Preço total " , valorTotal.toFixed(2));