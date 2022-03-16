
console.warn('amarelo');
console.error('red');

console.trace(); //onde e o q está executando

console.group('Iniciando grupo');
console.log('dentro grupo');
console.groupEnd('fim do grupo');

//console.time('log time');

console.table(['Lucas', 'Eduzz']);
console.assert(1===1, 'Ops');

console.log('%c styled log', 'color: blue; font-size: 40px');
