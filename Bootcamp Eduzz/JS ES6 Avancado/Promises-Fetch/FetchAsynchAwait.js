/*
import fetch from '../../../node_modules/formdata-polyfill';
//Requests
fetch('/data.json').then(respondeStream => respondeStream.json())
.then(data => {
    console.log(data);
})
.catch(err => {
    console.log('erro: ', err);
});

*/
//ES7 - Async / Await
const asyncTimer = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Esperei');
        resolve(12345);
    }, 1000);
});
const simpleFunction = async() => {//retorna uma promise
    console.log('Entrei');
    const data = await asyncTimer();
    console.log(data);
    const dataJSON = await fetch('/data.json').then (reStream => reStream.json());
    return dataJSON;
}
/*
const simpleFunction = async() => {//retorna uma promise
    console.log('Entrei');
    const data = await asyncTimer();
    return 12345;
}
*/
simpleFunction().then(data => {
    console.log(data);
}).catch();