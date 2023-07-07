<template>
  <div>
    <div class="container-fluid headings">
      <h1>Hi, I'm Eighton-Lee Paulse</h1>
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
  padding: 20px 20px 0 20px !important;
  padding-bottom:0;
  width: 100%;
  font-weight: bold;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
  color: white;
  text-align: center;
}

.headings {
  padding: 0;
}

@media (width < 992px) {
  h1 {
    padding-top: 110px;
    margin-top: 8rem;
  }

  h2 {
    margin-top: 1rem;
    padding-top: 110px;

  }
}
</style>
