const { createApp } = Vue;

createApp({
    data(){
        return{
            singolTask:'',
            listTasks: [],
        }
    },
    methods: {

        Aggiungi() {
            if (this.singolTask.trim() !== '') {
                this.listTasks.unshift(this.singolTask);
                this.singolTask= "";
            }
        }, 


    },

}).mount('#app');