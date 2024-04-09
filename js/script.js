const { createApp } = Vue;

createApp({
    data(){
        return{
            singolTask:'',
            listTasks: [],
        }
    },
    methods: {

        aggiungi() {
            if (this.singolTask.trim() !== '') {
                this.listTasks.unshift(this.singolTask);
                this.singolTask= "";
            }
        }, 

        elimina(index){
            this.listTasks.splice(index, 1);
        }

    },

}).mount('#app');