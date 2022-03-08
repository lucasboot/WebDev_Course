/*
Tipos
Boolean true/false
null vazio
undefined inicialização
number = 1 1.5
string = "texto\n" "a"+"a" = "aa"

Operadores
+, -, *, /, %, ++, --

Atribuições
=, +=, -=, *=, /=, %=

Comparação
==, !=, >, < >=, <=
=== compara valor e tipo, "3" e 3
!== diferente valor e tipo

Lógico
&&, || e !
*/
var str = "Valor 'texto com aspas' qualquer" + 8;

//Parsing
var a = "3";
var b = "6";
var c = a+b;
console.log(c);
c = parseInt(a) + parseInt(b);
console.log(c);

//Comandos básicos
//var nome = parseInt(prompt("Qual sua idade?"));
//alert("Sua idade é: " + nome);

//Ternário
var idade = 13;
var pode = idade >= 18 ? true : false;

/*
switch(){
    case "a" :
        break;
    default:
        break;
} 

for (var i=0; i<idade; i++){ }
for(var i in array){} índice
for(var i of aluno){} elem

while(){}

function nome(){
    return;
}

var variavel = function nome(){
    return b;
}

var n = nome();
*/