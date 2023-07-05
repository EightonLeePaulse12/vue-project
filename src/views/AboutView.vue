<template>
  <div>
    <h1>About Me</h1>
    <h2>Hi, I'm Eighton-Lee</h2>
    <About />
  </div>
</template>

<script>
import About from '../components/About'
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
export default {
  components: {
    About,
    Education,
    Skills
  },
  computed: {
    skills() {
      return this.$store.state.skills
    }
  },
  mounted() {
    this.$store.dispatch('displayData')
  }
}
</script>

<style scoped>
h1 {
  margin-top: 6rem;
  padding: 20px;
  width: 100%;
  font-weight: bold;
  text-align: center;
}

h2 {
  margin-top: 3rem;
  color: white;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

}

@media (max-width:992px) {
  h1 {
    padding: 30px;
  }

  h2 {
    margin-top: 1rem;
  }
}
</style>
