//modo antigo

function sumold(a, b){
    //arguments é um object
    let value = 0;
    for (let i=0; i<arguments.length; i++){
        value += arguments[i];
    }
    return value;
}
//console.log(sumold(5, 1, 2,2 , 4, 6, 6));

//Rest -> transformou em array
function sum(...args){
    //args é um Array
    return args.reduce((acc, value) => acc+value, 0);
    
}

//console.log(sum(1, 2, 3, 4, 65, 6, 6));

