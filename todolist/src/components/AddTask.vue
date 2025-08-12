<template>
    <form @submit="onSubmit" action="add-form">
        <div class = "form-control">
            <label for="task-name">Add Task Name</label>
            <input type="text" v-model="text" name = "task-name" placeholder="">
        </div>
        <div class = "form-control">
            <label for="time-date">Add Task Time and Date</label>
            <VueDatePicker v-model="date" class = "date" placeholder = "3/22/2025" :enable-time-picker="false" />
            <!--<input type="date" v-model="date" name = "time-date" placeholder="">-->
        </div>
        <div class = "form-control form-control-check">
            <label for="check">Reminder</label>
            <input type="checkbox" v-model="reminder" name="reminder">
        </div>
        <input type="submit" value = "save" class = "btn">
    </form>
</template>

<script>
    import VueDatePicker from "@vuepic/vue-datepicker";
    import "@vuepic/vue-datepicker/dist/main.css";
    export default{
        name: "Add_Task",
        components: {
            VueDatePicker
        },
        data(){
            return {
                text: "",
                date: null,
                reminder: false,
                sent: false,
                done: false
            }
        },
        methods: {
            onSubmit(e){
                e.preventDefault()
                if(this.text == ""){
                    console.log(this.text)
                    alert("Please add task")
                    return
                }
                if(!this.date){
                    alert("Please add date")
                    return
                }
                
                const year = this.date.getFullYear();
                const day = this.date.getDate();
                console.log(day);
                const months = ["", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                const month = months[this.date.getMonth()+1];
                console.log(month);

                const newTask = {
                    text: this.text,
                    date: {
                        day: day,
                        month: month,
                        year: year
                    },
                    reminder: this.reminder,
                    done: false,
                    sent: false
                }
                this.$emit("add-task", newTask)
                this.text = ""
                this.date = null
            }
        }
    }
</script>

<style scoped>
    .btn{
        color: rgb(255, 255, 255);
        background-color: rgb(85, 85, 241);
        border-color: rgb(85, 85, 241);
        width: 20%;
        padding: 10px 20px;
        font-size: 20px;
        margin: 0 20px;
    }
    .form-control{
        margin: 20px 0px;
        
    }
    .form-control label{
        display: block;
        font-size: 25px;
        color: rgb(103, 103, 180);
    }
    .form-control input{
        width: 50%;
        height: 30px;
        margin: 20px;
        font-size: 17px;
    }
    .date{
        width: 50%;
        height: 30px;
        margin: 20px;
        font-size: 17px;
        border-color: black;
    }
    .form-control-check{
        display: flex;
        align-items: center;
        justify-content: space-between;

    }
    .form-control-check label{
        flex:1;
    }
    .form-control-check input{
        flex:4;
        margin-right: 80%;
    }
    
</style>