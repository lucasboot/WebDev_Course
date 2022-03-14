var SETTINGS = {
    api: 'http://localhost',
    trackJsToken: '12345'
}

function Pessoa(){
    if(!Pessoa.instance){
        Pessoa.instancia = this;
    }
    return Pessoa.instance;
}
const p = Pessoa.call({name: 'Lucas'});
const p2 = Pessoa.call({name: 'Custom Name'});
console.log(p);
console.log(p2);

//Sempre retorna  a mesma instância