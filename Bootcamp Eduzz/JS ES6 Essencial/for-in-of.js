let arr = [3, 5, 7];

arr.foo = "hello";

for (let i in arr){ //indice
    console.log(i);
}

for(let i of arr){ //conteudo
    console.log(i);
}