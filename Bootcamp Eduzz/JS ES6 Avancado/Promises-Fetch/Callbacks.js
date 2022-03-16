//Utilizando promises
const doSomethingPromise = () => new Promise((resolve, reject) =>{
    //throw new Error('Something went wrong');
    setTimeout(function(){
        resolve('First data');
    }, 1000);
} );

const doOtherThingPromise = () => new Promise((resolve, reject) =>{
    setTimeout(function(){
        resolve('Second data');
    }, 1000);
} );

//Execução em paralelo
Promise.all([doSomethingPromise(), doOtherThingPromise()]).then((data) =>{
    console.log(data[0].split(''));
    console.log(data[1].split(''));

}).catch();
/*
doSomethingPromise()
.then(data => {console.log(data.split('')); return doOtherThingPromise();})
.then(data2 => console.log(data2.split('')))
.catch(); //error => console.log('Ops', error)

//Pending, fulfilled, rejected estados



//old
/*
function doSomething(callback){
    setTimeout(function(){
        callback('First data');
    }, 1000);
}

function doOtherThing(callback){
    setTimeout(function(){
        callback('Second data');
    }, 1000);
}

function doAll(){
    doSomething(function(data){
        var processedData=  data.split('');
        doOtherThing(function(data2){
            var processedData2=  data2.split('');
            setTimeout(function(){
                console.log(processedData, processedData2);
            }, 1000);

        });

    });
} //isso ainda faltando adicionar try catches
doAll();
*/
