<template>
    <header>
        <h1>{{ title }}</h1>
        <Button @btn-click = "$emit('toggle-add-task')" :text = "showAddTask ? 'Close' : 'Add Task'" :color = "showAddTask ? 'red' : 'blue'"/>
    </header>
</template>

<script>
import Button from "./Button.vue"
    export default{
        name: "Header-main",
        props: {
            title: String,
            showAddTask: Boolean,
        },
        components: {
            Button
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }
</style>