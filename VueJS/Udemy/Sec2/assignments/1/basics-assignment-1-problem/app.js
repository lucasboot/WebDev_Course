const app = Vue.createApp({
    data() {
        return {
            name: 'Lucas Figueredo Varela Alves',
            age: 23,
            favImage: 'https://blog.uvahealth.com/wp-content/uploads/2017/02/poisonousmushrooms.slideshow.jpg',
            defaultInput: 'Lucas FV Alves'
        };
    },
    methods: {
        outputRandom(){
            return Math.random();
        }
    }

});





app.mount('#assignment');