//Generators, funcoes com pausa e retorno

function* hello() {
    console.log('hello');
    yield 1; //valor retornado no value de saida
    console.log('from');
    yield 5;
    console.log('function');
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next());

const obj ={
    values: [1, 2, 3, 4],
    *[Symbol.iterator]() { //n precisou criar o metodo next
        for (let i =0; i<this.values.length;i++){
            yield this.values[i];
        }
    }
};
for (let value of obj){
    console.log(value);
}