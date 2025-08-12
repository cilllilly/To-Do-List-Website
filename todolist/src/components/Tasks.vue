<template>
    <div :key="task.id" v-for = "task in tasks">
        <Task :task = "task" @delete-task = "$emit('delete-task',task.id)" @complete-task = "$emit('complete-task', task.id)" @toggle-reminder = "$emit('toggle-reminder', task.id)" @send-reminder = "$emit('send-reminder', task.id)"/>
    </div>
</template>

<script>
    import Task from "./Task.vue"
    export default{
        name: "Tasks_Main",
        props:{
            tasks: Array
        },
        components:{
            Task,
        },
        emits:["delete-task", "complete-task","reminder", "send-reminder"],
    }
</script>

<style scoped>

</style>