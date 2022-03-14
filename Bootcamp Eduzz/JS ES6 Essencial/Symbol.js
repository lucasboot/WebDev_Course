const symbol1 = Symbol();
const symbol2 = Symbol();

//Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1==symbol2);

//Previnir conflito entre nomes de propriedades

const nameSymbol1 = Symbol('name');
const nameSymbol2 = Symbol('name');

const user = {
    [nameSymbol1]: 'Guilherme',
    [nameSymbol2]: 'Outro nome',
    lastName: "Aaaaaa"
}

console.log(user);

//Symbol é uma propriedade não enumerável

for(const key in user){
    if(user.hasOwnProperty(key)){
        console.log('\nValor da chave ${key}: ${user[key]}');
    }
}
//nao aparecem aqui
console.log('Propriedades do objeto user: ', Object.keys(user));
console.log('Valores das pripriedades do objeto user: ', Object.values(user));

//Aparecem aqui
console.log(Object.getOwnPropertySymbols(user));

//Todas de uma vez

console.log(Reflect.ownKeys(user));

//criar enum

const directtions = {
    UP: Symbol('UP'),
    DOWN: Symbol('Down'),
    LEFT: Symbol('Left'),
    RIGHT: Symbol('Right')
};