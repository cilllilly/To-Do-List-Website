<template>
    <div id = "About-Text">
        <h1>To Do List</h1>
        <h4>In this app, you can keep track of all of your tasks and toggle reminders!</h4>
        <router-link @click = "headerOn" to = "/"><button>Main Page</button></router-link>
    </div>
</template>

<script>
    import App from "../App.vue"
    export default{
        name: "About-main",
        props:{
            email: String
        },
        methods:{
            headerOn(){
                App.methods.headerOn()
            },
        }
    }
</script>

<style>
    #About-Text{
        text-align: center;

    }
</style>