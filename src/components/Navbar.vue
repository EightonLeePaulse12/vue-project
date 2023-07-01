<template>
  <div class="container-fluid" id="main-container">
    <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/"><img id="logoImage" src="https://i.postimg.cc/43ctDYXQ/logo-color-removebg-preview.png" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav mx-auto p-2">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/about">About Me</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/projects">My Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/testimonials">Testimonials</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/contact">Contact Me</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style scoped>
  div{
    background-color:white !important;
    padding:0 !important;

  }

  #main-container{
    margin-bottom:9rem;
    height:1rem;
  }
  nav{
    background-color:white !important;
    padding:0 !important;
    height:2rem;
  }

  #logoImage{
    width:100%;
    height:7.5rem;
    object-fit:contain;
  }

  .nav-link{
    font-size:1.3rem;
  }

  .nav-link:hover{
    color:rgb(255, 0, 0) !important;
    border-bottom:2px solid red;
  }

</style>