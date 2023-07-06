<template>
  <div>
    <div class="container-fluid headings">
      <h1>About Me</h1>
      <h2>Hi, I'm Eighton-Lee Paulse</h2>
    </div>
    <About />
  </div>
</template>

<script>
import About from '../components/About'
export default {
  components: {
    About
  }
}
</script>

<style scoped>
h1 {
  margin-top: 6rem;
  margin-bottom: 0 !important;
  padding: 20px !important;
  width: 100%;
  font-weight: bold;
  color: white;
  text-align: center;
}

.headings {
  background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
  padding: 0;
}

h2 {
  margin-top: 0 !important;
  color: white;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  padding: 13px;

}

@media (width < 992px) {
  h1 {
    padding: 30px;
  }

  h2 {
    margin-top: 1rem;
  }
}
</style>
