<template>
    <div v-if = "showAddTask">
        <AddTask/>
    </div>
    <Task/>
    <h1>home</h1>

</template>

<script>
    import AddTask from "../components/AddTask.vue"
    import Task from "../components/Task.vue"
    export default{
        name: "Home-main",
        props: {
            showAddTask: Boolean,
        },
        components: {
            AddTask,
            Task,
        }
    }
</script>

<style>

</style>