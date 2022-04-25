const app = Vue.createApp({
    data() {
        return { //return what should be stored
            courseGoal: 'Finish the course and learn VueJS', //any type
            courseGoalA: 'Learn Vue',
            courseGoalB: 'Master Vue',
            vueLink: 'https://vuejs.org/'
        };
    },

    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber<0.5){
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});
app.mount('#user-goal'); //connects to the html section
