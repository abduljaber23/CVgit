let nome = "Cristiano";
console.log(nome);

function addition(number1, number2) {
    const validNumber1 = Number(number1);
    const validNumber2 = Number(number2);
    return validNumber1 + validNumber2;
}
let number1 = "15";
let number2 = 20;
let result = addition(number1, number2);
console.log(result);






function division(num1 , num2){
    return num1 / num2;
}
let num1 = 100;
let num2 = 5;
let result2 = division(num1, num2);
console.log(result2);


let object = {
    name: "Cristiano",
    age: 25,
    city: "São Paulo"
}




const telecharger = document.querySelector("#downloadBtn");
telecharger.addEventListener("click", function(){
    alert("Téléchargement terminé");
});