<template>
    <div>
        <h1>Contact Me</h1>
        <Contact/>
    </div>
</template>

<script>
import Contact from '../components/Contact.vue'
    export default {
        components:{
            Contact
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