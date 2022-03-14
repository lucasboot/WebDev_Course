const arr = [1, 2, 3];
const arr2 = new Array(1, 2, 3);
const arr3 = Array.of(1, 2, 3);
const arr4 = Array(3); //empty 3x
const arr5 = Array (3, 2); //[3, 2]
//Array.from() transforma em array, node list -> array

const frutas = ['melancia', 'banana'];
frutas.push('laranja');
let removido = frutas.pop(); //retira do fim
console.log(removido);
console.log(frutas);

frutas.unshift("Morango");
console.log(frutas);
removido = frutas.shift(); //retira primeiro
console.log(removido);
console.log(frutas);

//concat, merge de arrays

const salgados = ['coxinha', 'kibe', 'empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos);


//Slice - fatia o array a partir de uma posicao

const num = [1, 2, 3, 4, 5];
num.slice(0,2);
//[1, 2]

num.slice(2);
//[3, 4, 5]

num.slice(-1);
//[5]

num.slice(-3);
//[3, 4, 5]

//Splice
num.splice(2);
//[3, 4, 5] -> num fica [1,2]

num.splice(0, 0, 'first');
//primeira posicao, retira 0 elementos, adicionar na primeira
//num = ['first', 1, 2]

