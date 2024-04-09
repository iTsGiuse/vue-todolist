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
                this.listTasks.push(this.singolTask);
                singolTask= "";
            }
        }
    },

}).mount(app);