const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            taskText: '',
            show: true
        };
    },
    computed: {
        buttonCaption(){
            return (this.show ? 'Hide' : 'Show');
        }
    },
    methods: {
        addTask(){
            this.tasks.push(this.taskText)
            this.taskText='';
        },
        removeTask(index){
            this.tasks.splice(index, 1);
        },
        toggleButton(){
            this.show = !this.show;
        }
    }


});
app.mount('#assignment');