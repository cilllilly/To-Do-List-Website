<template>
    <div @dblclick="$emit('toggle-reminder', task.id)" :class = "[task.reminder ? 'reminder': '', 'task']" :id = "task.done ? 'task-complete': ''" ref = "target"> 
        <h3>
            <i @click = "$emit('complete-task', task.id)" :class = "[task.done ? 'fa fa-check-square': 'fa fa-square','task-icon']" :id = "task.done ? 'icon-complete': ''"></i>
            <p :class = "task.done ? 'text-done': ''">{{ task.text }}</p> 
            <i @click ="$emit('delete-task',task.id)" class="fa fa-trash trash-icon" :id = "task.done ? 'trash-icon-complete': ''"></i>
        </h3>
        <p>{{task.date.day}} {{task.date.month}} {{task.date.year}}</p>
    </div>
    <form ref="form" @submit.prevent="sendEmail">
        <input type="text" name="task" :value="task.text">
        <input type = "text" name="date" :value="`${task.date.day} ${task.date.month} ${task.date.year}`">
        <input type="email" name="email" value="moore.cillian@gmail.com">
        <input type="submit" value="Send">
    </form>
    
</template>

<script>
    import emailjs from "@emailjs/browser"
    export default{
        name: "Task-main",
        props:{
            task: Object
        },
        data(){
            
            return {
                today: new Date(),
                months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                intervalID: null,
            }

        },
        mounted(){
           this.intervalID = setInterval(() => {
            this.remindUser()
           },3600000) 
        },
        beforeUnmount(){
            if(this.intervalID){
                clearInterval(this.intervalID)
            }
        },
        methods: {
        sendEmail() {
            emailjs
                .sendForm('service_2fwjefj', 'template_u59xghn', this.$refs.form, {
                publicKey: 'Z5p-7zFZrpwZqU4S_',
               
                })
                .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
                );
        },
        remindUser(){
            const currentMonth = this.months[this.today.getMonth()]
            if(this.today.getFullYear() == this.task.date.year  && currentMonth == this.task.date.month && this.today.getDate() == this.task.date.day && this.task.reminder && !this.task.done && !this.task.sent){
                this.$emit('send-reminder', this.task.id)
                const form = this.$refs.form
                form.dispatchEvent(new Event("submit"))
            }
        }
    }
    }
    
</script>

<style scoped>
    .task{
        background-color: rgb(113, 179, 255);
        padding: 20px 30px;
        margin: 5px;
        cursor: pointer;
        border-radius: 10px;

    }
    .task.reminder{
        border: 5px solid rgb(0, 225, 255);
    }
    .task-icon:hover{
        color: aquamarine;
    }
    .trash-icon:hover{
        color: red;
    }
    .task h3{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    #task-complete{
        background-color: rgb(6, 52, 105);    
    }
    #icon-complete{
        color: rgb(27, 221, 27);
    }
    #trash-icon-complete{
        color: red;
    }
    .text-done{
        text-decoration: line-through;
        text-decoration-color: rgb(125, 174, 247);
    }
    form{
        visibility: hidden;
    }
</style>