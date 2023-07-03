<template>
    <div>
        <h1>My Projects</h1>
        <Projects/>
    </div>
</template>

<script>
import Projects from '../components/Projects.vue'
    export default {
        components:{
            Projects
        }
    }
</script>

<style scoped>
h1{
    margin-top:6rem;
    width:100%;
    text-align:center;
  }
  h2{
      margin-top:3rem;
      width:100%;
      text-align:center;
      margin-bottom:2rem;
    
  }
</style>