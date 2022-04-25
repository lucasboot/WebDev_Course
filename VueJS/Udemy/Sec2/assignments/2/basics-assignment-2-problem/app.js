const app = Vue.createApp({
    data(){
        return {
            text: '',
            text2: ''
        }
    },
    methods: {
        pressedButton(){
            alert('O botão foi pressionado');
        },
        setText(event){
            this.text = event.target.value;
        },
        setText2(event){
            this.text2 = event.target.value;
        }
    }

});

app.mount('#assignment');