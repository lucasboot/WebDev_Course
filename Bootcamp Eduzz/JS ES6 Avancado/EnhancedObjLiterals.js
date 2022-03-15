var prop2 = 'oiii';
var prop3 = 'teste';
function method1(){
    consolog.log('metodo called');
}
var obj ={
    prop1: 'Aaa',
    prop2, //sem repetir com prop2: prop2
    [prop3 + 'aaaaa']: 'valor', //direto no objeto
    method1,
    method2: function method2(a=1){ //antigo
        return a*a;
    },
    method3(b=1){ //atual
        return b*b;
    }

};

console.log(obj);