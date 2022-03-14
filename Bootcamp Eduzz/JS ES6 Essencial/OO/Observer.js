class Observable {
    constructor() {
        this.observers = [];
    }
    subscribe(f){
        this.observers.push(f);
    }
    unsubscribe(f){
        this.observers = this.observers.filter(subscriber => subscriber!==f);

    }
    notify(data){
        this.observers.forEach(observer => observer(data));
    }
}

const o = new Observable();
const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);
o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');

o.unsubscribe(logData2);

o.notify('notified 2');