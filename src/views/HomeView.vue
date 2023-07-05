<template>
  <div>
    <Home />
  </div>
</template>

<script>
import Home from '../components/Home.vue'
export default {
  components: {
    Home
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

<style scoped></style>
