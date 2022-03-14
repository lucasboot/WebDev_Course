/*function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde){
    Animal.call(this, 4);
    this.morde = morde;
}

const pug = new Cachorro(false);
console.log(pug);
*/
function Animal(){}
Animal.prototype.qtdePatas=0;
Animal.prototype.movimentar = function(){}

function Cachorro(morde){
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function(){
    console.log('Au! au!');
}