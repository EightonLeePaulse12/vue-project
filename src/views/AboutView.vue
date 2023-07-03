<template>
  <div>
    <h1>About Me</h1>
    <h2>Hi, I'm Eighton-Lee</h2>
    <TopOfAbout/>
    <AboutPage/>
  </div>
</template>

<script>
import TopOfAbout from '../components/TopOfAbout'
import AboutPage from '../components/AboutPage.vue'
  export default {
    components:{
      TopOfAbout,
      AboutPage
    },
    computed:{
      skills(){
        return this.$store.state.skills
      }
    },
    mounted(){
      this.$store.dispatch('displayData')
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
