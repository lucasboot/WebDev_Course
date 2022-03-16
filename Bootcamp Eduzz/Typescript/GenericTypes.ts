//Generic types
function adicionaApendiceLista<T>(array: any[], valor: T){
    return array.map(item => item+valor);
}

adicionaApendiceLista([1, 2, 3], 1);