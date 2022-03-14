const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

const novo = arr.map(value => value*2);//retorna um novo array

console.log(novo);
const idades = [10, 20 ,[15, 24,[21, 32]]];
const teste = idades.flat(2);
console.log(teste);

//flatMap executa um map junto de um flat nivel 1

const arrIterator = arr.keys();

arrIterator.next(); //{0, false} até {4, true}

const arrIntVal = arr.values();
arrIntVal.next(); //{1, false} até {5, true}

const arrEntries = arr.entries();
arrIntVal.next(); //{[0, 1], false} até {[4, 5], true}

//Buscar

const firstGreaterthanTwo = arr.find(value => value>2);
const firstGreaterthanTwoIndex = arr.findIndex(value => value>2);

//Novo array que satisfazem a condição
const allgreater = arr.filter(value => value>2);

//Primeiro index de determinado elemento encontrado no array
const firstIndexOfItem = arr.indexOf(3); // 2
const lasttIndexOfItem = arr.lastIndexOf(3); // 2

//Pertencer a um array
const hasItem = arr.includes(1); //true

//Algum item satisfaz a condição?
const hasAnyEven = arr.some(value=>value%2 ===0); //true

//Todos satisfazem?
const allEven = arr.every(value => value%2 ===0); //false

//Ordenar
arr.sort(); //crescente

//Reverter ordem
arr.reverse();

//Juntar elementos com um delimitador
arr.join('-'); //1-2-3-4-5

//Transformar em um tipo especifico algum operacao
arr.reduce((total, value) => total = total+value, 0); //15
