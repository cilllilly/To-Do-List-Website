<template>
  <div class = "container">
    <Header @toggle-add-task = "toggleAddTask" title = "To Do List" :showAddTask = "showAddTask"/>
    <router-view :showAddTask = "showAddTask"></router-view>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
  export default {
    name: 'App',
    components: {
      Header, 
      Footer,
    },
    data(){
      return {
        showAddTask: false,
      }
    },
    methods:{
      toggleAddTask(){
        this.showAddTask = !this.showAddTask;
      }
    }
  }
</script>

<style>
  .container{
    width: 800px;
    min-height: 300px;
    margin: 100px auto;
    border: 10px solid blue;
    border-radius: 10px;
    padding: 80px;
    overflow: auto;

  }
</style>
