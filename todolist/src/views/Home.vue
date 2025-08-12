<template>
    <div v-if = "showAddTask">
        <AddTask @add-task = "addTask"/>
    </div>
    <Tasks @delete-task="deleteTask" @complete-task="completeTask" @toggle-reminder="reminder" :tasks = "tasks" @send-reminder="send"/>
    
    
</template>

<script>
    import Tasks from "@/components/Tasks.vue";
    import AddTask from "../components/AddTask.vue"
    
    export default{
        name: "Home-main",
        props: {
            showAddTask: Boolean,
        },
        components: {
            AddTask,
            Tasks,
        },
        data(){
            return {
                tasks:[]
            }
        },
        methods: {
            async addTask(task){
                const response = await fetch("api/tasks", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",

                    },
                    body: JSON.stringify(task)
                })
                const data = await response.json()
                this.tasks = [...this.tasks, data]
            },
            async deleteTask(id){
                if(confirm("Are you sure you want to delete the task?")){
                    const response = await fetch(`api/tasks/${id}`, {
                        method: "DELETE"
                    })
                    response.status == 200 ? (this.tasks = this.tasks.filter((task) => task.id!=id)):alert("error deleting task")
                }
            },
            async fetchTasks(){
                const response = await fetch("api/tasks")
                const data = await response.json()
                return data
            },
            async fetchTask(id){
                const response = await fetch(`api/tasks/${id}`)
                const data = await response.json()
                return data
            },

            async completeTask(id){
                const taskToToggle = await this.fetchTask(id)
                const updatedTask = {...taskToToggle,done: !taskToToggle.done}
                const response = await fetch(`api/tasks/${id}`,{
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(updatedTask)
                })
                const data = await response.json()
                this.tasks = this.tasks.map((task) => task.id == id ? {...task,done:data.done}:task)
            },

            async reminder(id){
                const taskToToggle = await this.fetchTask(id)
                const updatedTask = {...taskToToggle,reminder: !taskToToggle.reminder}
                const response = await fetch(`api/tasks/${id}`,{
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(updatedTask)
                })
                const data = await response.json()
                this.tasks = this.tasks.map((task) => task.id == id ? {...task,reminder:data.reminder}:task)
            },
            async send(id){
                const taskToToggle = await this.fetchTask(id)
                const updatedTask = {...taskToToggle,sent: !taskToToggle.sent}
                const response = await fetch(`api/tasks/${id}`,{
                    method: "PUT",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify(updatedTask)
                })
                const data = await response.json()
                this.tasks = this.tasks.map((task) => task.id == id ? {...task,sent:data.sent}:task)
            }
            
        },
        async created(){
            this.tasks = await this.fetchTasks()
            console.log(this.tasks)
        },
        
        }
</script>

<style>

</style>