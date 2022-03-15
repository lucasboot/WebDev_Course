//Identificador único

const uniqueId = Symbol('Hello');

const obj ={
    [uniqueId]: 'Hello'
};
console.log(Object.keys(obj));

//well known symbols
Symbol.iterator
Symbol.split
Symbol.toStringTag

const arr = [1, 2, 3, 4];
const str = 'Digital aaa';

//const it = arr[Symbol.iterator]();
const obj2 = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i= 0;
        return {
            next: () => {
                i++;
                return {
                    value:  this.values[i-1],
                    done: i> this.values.length
                };
            }
        };
    }
};
const it = obj2[Symbol.iterator]();
const arr2 = [...obj2];
for (let value of obj2){
    console.log(value);
}