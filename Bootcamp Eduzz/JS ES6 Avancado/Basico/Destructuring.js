var arr = ['Apple', 'Banana', 'Orange'];
var apple1 = arr[0];//verbose

//Destructuring

var [apple, banana, orange, [tomato]] = ['Apple', 'Banana', 'Orange', ['tomato']];
//console.log(apple, banana, orange, tomato);

//objects

var obj = {
    name: 'Lucas',
    props: {
        age: 23,
        colors: ['black', 'purple']
    }
};
//var name = obj.name; antigo
//var age = obj.props.age; antigo

var {name: name2} = obj; //destru, procura name e atribui a name2
var {props: {age: age2, colors: [color1, color2]}} = obj;

console.log(color1, color2);

//functions
function sumOld(arr){
    return arr[0]+arr[1];
}


function sum([a, b] = [0, 0]){
    return a+b;
}
