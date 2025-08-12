<template>
  <router-link  to = "/signup"><button>sign up</button></router-link>
  <div class = "container">
    <Header @toggle-add-task = "toggleAddTask" title = "To Do List" :showAddTask = "showAddTask" v-if="showHeader"/>
    <router-view :showAddTask = "showAddTask"></router-view>
    <Footer @header-off = "headerOff"/>
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
        showHeader: true,
      }
    },
    methods:{
      toggleAddTask(){
        this.showAddTask = !this.showAddTask;
      },
      headerOn(){
        this.showHeader = true;
        setTimeout(() => {
          //reloads the main page when the main page loads. 
          location.reload();
        },1)
      },
      headerOff(){
        this.showHeader = false;
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
