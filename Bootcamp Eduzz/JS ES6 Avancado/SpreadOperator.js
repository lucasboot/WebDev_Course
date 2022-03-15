const multiply = (...args) => args.reduce((acc, value) => acc*value, 1);
function sumSpread(...args){
    return multiply(...args);//spread operator -> quebrou o vetor
    
    
}
//console.log(sumSpread(1 ,2, 2,2, 2, 2,2));

//O spread pode ser utilizado em strings, arrays, literal objects e objetos iteráveis
const str = 'Digital';
const arr = [1, 2, 3, 4];

function logArgs(...args){
    console.log(args);
}

function logArgs2(a, b, c){
    console.log(a, b, c);
}
//logArgs(...str);//quebrou a string em letras
//logArgs2(...arr); //cada indice do array passado

//Combinando arrays
const arr2 = [...arr, 5, 6, 7];
//console.log(arr2);
const arr3 = [...arr, ...arr2, 0, 0, 0, 1];
//console.log(arr3);

const obj = {
    test: 123
};
const obj2 ={
    ...obj,
    test2: 'hello'
}

//const arrT = [...obj]; não é iterável, logo n funciona
//Clonar objetos facilmente, sem linkar ponteiro
//Shallow clone, pode ter um subojeto no clonado que pode ter sido alterado

const obj3 = {...obj};