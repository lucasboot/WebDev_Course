* String
.length
.split('delimitador')
.replace('procurar', 'novo valor')
.slice(posição) // -1 -> último char
.slice(0, -1) //retira ultimo char
.slice(1) //segundo char até o último
.substr(começo, tamanho) 

* number 
toString()
toFixed(casas decimais)
parseFloat()
parseInt()


boolean, null, undefined

*Symbol
Código



*Object
>código
Object.keys(user) //chaves e valores
Object.values(user) //chaves e valores
Object.entries(user) //arrays com prop e valor
Object.assign(user,{novaProp: 'aaaaa'}) //adiciona propriedade

- Idealmente, não mudar o objeto com assign:
console.log(Object.assign({}, user, {age: 20});)

Object.freeze(user) //Não deixa alterar o objeto
Object.seal(user) //Não permite que crie ou delete, mas pode mudar o valor da propriedade



*Function
código

*Array
.length
Array.isArray(persons)
persons.forEach((person, index, arr) => {
    console.log('Nome: ${person.name} index: ${index}', arr);
});


//Filtrar
const mens = persons.filter(person => person.gender == gender.MAN);
console.log('Apenas homens:', mens );

//Retornar um novo array
const personsWithCourse = persons.map(person => {
    person.course = 'Introdução ao Javascript';
    return person;
});

//Transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += perosn.age;
    return age;
}, 0);
console.log('Soma: ', totalAge);


//Soma das idades de pessoas pares

const totalEvenAges = persons
.filter (person => person.age%2 ===0)
.reduce((age, person) => {
    age += perosn.age;
    return age;
}, 0);
console.log(totalEvenAges);
código