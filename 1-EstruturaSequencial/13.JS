let sexo = prompt("informe o seu sexo(M/F): ");
let altura = prompt("Informe a sua altura: ");
altura = parseFloat(altura);

if(sexo === "F"){
    let pesoIdeal = (62.1 * altura) - 44.7;
    console.log("peso ideal é = ",  pesoIdeal.toFixed(2));
}else{
    let pesoIdeal = (72.7 * altura) - 58;   
    console.log("Peso ideal é = ", pesoIdeal.toFixed(2));
}