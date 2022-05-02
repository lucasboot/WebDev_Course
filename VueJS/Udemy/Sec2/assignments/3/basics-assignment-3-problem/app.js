const app = Vue.createApp({
    data(){
        return {
            result: 0,
            message: ''
    };
    },
    computed: {
        sendMsg(){
            if(this.result === 37){
                return this.result;
            } else if (this.result < 37){
                return 'Not there yet';
            } else {
                return 'Too much!';
            }
        }
    },
    watch: {
        sendMsg(value){
            const that = this;
            if(value != 'Not there yet'){
                setTimeout(() => {that.result = 0;}, 5000);}
        }
    },
    methods: {
        addNum(n){
            this.result = this.result + n;
        }
    }



});
app.mount('#assignment');