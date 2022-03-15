var sumOld = function(a,b){
    return a+b;
};

//Arrow functions, hoist nao funciona

var sum = (a,b) => a+b;
var expo = a => a*a;

var createObj = () => ({test: 123});
console.log(createObj());

//Com funções construtoras

//Utilizando this sem precisar guardar contexto
var obj = {
    showContext: function showContext(){
        setTimeout(() => {
            this.log('after 1000ms');
        }, 1000);
    },
    log: function log(value){
        console.log(value);
    }
};
obj.showContext();