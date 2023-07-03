<template>
    <div>

        <div class="container text-center">
            <div class="h5">
                Here are a few projects I worked on:
            </div>
        </div>
            <!-- <div class="card-group row row-cols-1 row-cols-md-3 mx-auto g-4" v-for="item in projects" id="container2" :key="projects.id">
                <div class="col">
                    <div class="card h-100 shadow">
                      <div class="card-body">
                        <h5 class="card-title fw-bold" id="title">${gimme.name}</h5>
                        <p class="card-text" id="description">${gimme.desc}</p>
                        <p class="card-text" id="price">${gimme.price}</p>
                      </div>
                    </div>
                    </div>
            </div> -->
            <div class="container-fluid">
                <div class="card-group row row-cols-1 row-cols-md-2 mx-auto g-4">
                    <div class="col" id="project" v-for="item in projects" :key="item.id">
                        <div class="card h-100 shadow">
                            <div class="card-body">
                                <h5 class="card-title fw-bold" id="title"> {{ item.name }} </h5>
                                <img id="picture" :src="item.image" alt="Project">
                                <p class="card-text" id="description"> {{ item.description }} </p>
                                <div class="media-buttons">
                                    <a class="button" target="_blank" :href="item.github">Github</a>
                                    <a class="button" target="_blank" :href="item.host">Go Live</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col" id="git">
                        <a id="hub" href="">Check out my Github</a>
                    </div>
                </div>
            </div>
    </div>
</template>

<script>
    export default {
        computed:{
            projects() {
            return this.$store.state.projects
        }
    },
    mounted() {
        this.$store.dispatch('displayProjects')
    },
    }
</script>

<style scoped>
h3 {
    text-align: center;
    margin-top: 2rem;
}

.media-buttons{
    width:100%;
    height:100%;
    display:flex;
    height:2.7rem;
    width:100%;
    justify-content: space-evenly;
}

.button{
    height:2.7rem;
    width:8rem;
    color:black;
    background: red;
    font-weight:bold;
    text-align:center;
    text-decoration: none;
    border:2px solid black;
    border-radius:10px;
}

#git{
    display: flex;
    justify-content: center;
    align-items:center;
}
#hub{
    text-decoration: none;
    color:red;
    border:2px solid black;
    border-radius:10px;
    background-color:black;
    width:11rem;
    text-align: center;
    height:2.5rem;
    padding:.2rem;
    margin-bottom:2rem;
}

#hub:hover{
    color:white;
    background: red;
}

.button:hover{
    color:red;
    background: black;
}

#description{
    font-weight:bold;
    font-size:1.2rem;
}

#title{
    text-align: center;
}
#picture{
    height:23rem;
    object-fit:contain;
    width:100%;
}

#div{
    margin-bottom:2rem;
    height:20rem;
    border-radius: 20px;
    width:100%;
}

#project{
    margin-bottom:2rem;
}
</style>