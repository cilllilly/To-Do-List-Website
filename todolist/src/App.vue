<template>
  <div class = "container">
    <Header title = "To Do List"/>
    <router-view></router-view>
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
