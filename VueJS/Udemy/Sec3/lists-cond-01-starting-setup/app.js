const app = Vue.createApp({
  data() {
    return { 
      goals: [],
      userInput: '' };
  },
  methods: {
    addGoal(){
      this.goals.push(this.userInput);
    },
    removeGoal(index){
      this.goals.splice(index, 1);
    }
  }
});

app.mount('#user-goals');
