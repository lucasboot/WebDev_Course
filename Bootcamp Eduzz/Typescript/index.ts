interface Cachorro {
    nome: string;
    idade: number;
    parqueFavorito?: string
}

type CachorroRead = {
    readonly[K in keyof Cachorro]: Cachorro[K];

}
class MeuCachorro implements Cachorro{
    idade;
    nome;
    constructor(idade, nome){
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14);
cao.idade=15;
console.log(cao.idade);