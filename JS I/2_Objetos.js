function a(){
    return this.nome;
}

var objeto = {
    nome: "Lucas", 
    notas: [7.5, 5.0],
    media: function (){
        return (this.notas[0] + this.notas[1])/2;

    },
    funcao: a
}

console.log(objeto.nome);
console.log(objeto["nome"]);
console.log(objeto.notas[1]);
console.log(objeto["notas"][1]);

objeto.matricula = 12345;
objeto["sobrenome"] = "Figueredo";

console.log(objeto);

/*
var objeto = new Object();
objeto.nome = "Lucas";

var objeto = new Object({nome: "Lucas"});
*/

console.log(objeto.media());
console.log(objeto.funcao());