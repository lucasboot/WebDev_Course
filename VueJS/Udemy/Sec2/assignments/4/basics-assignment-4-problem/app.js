const app = Vue.createApp({
    data() {
        return {
            classin: '',
            pVisible: true,
            color: ''
        }
    },
    methods: {
        changeVisi(){
            this.pVisible = !this.pVisible;
        }
    },
  
    computed: {
        changeClass(){
            return {
                user1: this.classin==='user1',
                user2: this.classin==='user2',
                visible: this.pVisible,
                hidden: !this.pVisible
            }
        }
       
    }


});
//  inline   <div class="demo" v-bind:style="{borderColor: boxASelected ?'red':'#ccc'}" @click="boxSelected('A')"></div>

app.mount('#assignment');