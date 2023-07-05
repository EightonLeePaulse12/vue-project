<template>
  <Navbar />
  <router-view />
  <Footer />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  text-align: center;
  font-family: 'Poppins', sans-serif;
}

</style>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>
