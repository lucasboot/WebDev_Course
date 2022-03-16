
/*function soma(a: number, b:number){
    return a+b;
}

console.log(soma(1, 2));*/

//Interfaces CONTRATOS
/*
interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    executarRugido(altura: number): void;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}
const animal: IAnimal= {
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (altura) => (`${altura}dB`)
}

console.log(animal.executarRugido(20));
const felino: IFelino = {
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
    executarRugido: (altura) => (`${altura}dB`)

}
*/
//Types JUNTAR DIFERENTES INTERFACES

interface IAnimal{
    nome: string;
    tipo: 'terrestre' | 'aquático';
    domestico: boolean;
}

interface IFelino extends IAnimal{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal{
    porte: 'pequeno' | 'medio' | 'grande';
}
type IDomestico = IFelino | ICanino;

const animal: IDomestico= {
    nome: 'Leão',
    tipo: 'terrestre',
    domestico: false,
    porte: 'medio' //ICanino

}