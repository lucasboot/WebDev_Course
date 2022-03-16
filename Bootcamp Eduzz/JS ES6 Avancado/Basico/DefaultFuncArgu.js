//Lazy evaluation, só vai ser executada no momento certo
function randomNumber(){
    return Math.random()*10;
}

//Pode referenciar um valor de entrada, ou valores fixos

function multiply (a, b=randomNumber()){
    return a*b;
}
console.log(multiply(5));
