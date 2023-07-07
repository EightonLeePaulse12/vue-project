<template>
  <div class="container-fluid fixed-top " id="main-container">
    <nav class="navbar navbar-expand-lg" id="navbar">
      <div class="container-fluid navbaar" id="nav">
        <router-link class="navbar-brand" to="/"><img loading="lazy" id="logoImage"
            src="https://i.postimg.cc/43ctDYXQ/logo-color-removebg-preview.png" alt="Logo"></router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse show" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto p-2">
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/about">About</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/resume">Resume</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/projects">Projects</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/testimonials">Testimonials</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" to="/contact">Contact</router-link>
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
div {
  padding: 0 !important;
}


#main-container {
  height: 1rem;
}

nav {
  padding: 0 !important;
  height: 2rem;
}

#logoImage {
  width: 100%;
  height: 7.5rem;
  object-fit: contain;
}

#nav {
  display: flex !important;
  align-items: center !important;
  padding-top: 3rem !important;
  background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);

}

ul{
  height:100%;
}

router-link {
  cursor: pointer;
}

.nav-link {
  font-size: 1.3rem;
  cursor: pointer;
  color: white !important;
}

.nav-link:hover {
  cursor: pointer;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 20px #ff2f00, 0 -18px 40px #F00 !important;
}

.nav-link:active{
  text-shadow: 0 -1px 4px #eaf20c, 0 -2px 10px rgb(225, 255, 0), 0 -10px 20px #eeff00, 0 -18px 40px rgb(242, 255, 0) !important;
}

span {
  color: white !important;
  border: 2px solid black;
  border-radius: 5px;
}

@media (width < 992px) {
  #nav {
    padding: 0 !important;
  }
}
</style>