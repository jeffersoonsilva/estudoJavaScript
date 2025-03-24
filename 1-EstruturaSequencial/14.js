let pesoPeixe = prompt("Informe o peso do peixe: ");
let pesoMaximo = 50.0;
let multaExcessoPeso = 4.0;

pesoPeixe = parseFloat(pesoPeixe);

if(pesoPeixe > 50){
    let excessoPeso = pesoPeixe - pesoMaximo;
    console.log("Excedeu o peso")
    console.log("Excesso de peso = ", excessoPeso, ("KG"))
    console.log("Multa por peso = ", multaExcessoPeso * excessoPeso.toFixed(2)) 
}else{
    console.log("Não houve excesso de peso")
}