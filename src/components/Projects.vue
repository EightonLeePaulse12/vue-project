<template>
    <div>

        <div class="container-fluid text-center" id="back">
            <div class="h5">
                Here are a few projects I worked on:
            </div>
        </div>
        <div class="container-fluid" id="fluid" v-if="projects">
            <div class="card-group row row-cols-1 row-cols-md-2 mx-auto g-4">
                <div class="col" id="project" v-for="item in projects" :key="item.id">
                    <div class="card h-100 shadow">
                        <div class="card-body">
                            <h5 class="card-title fw-bold" id="title"> {{ item.name }} </h5>
                            <iframe id="picture" :src="item.source" alt="Project"></iframe>
                            <p class="card-text" id="description"> {{ item.description }} </p>
                            <div class="media-buttons">
                                <a class="button" target="_blank" :href="item.github"><i class="fa-brands fa-github"></i>
                                    Github</a>
                                <a class="button" target="_blank" :href="item.host"><i class="fa-solid fa-globe"></i> Go
                                    Live</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col" id="git">
                    <a id="hub" target="_blank" href="https://github.com/EightonLeePaulse12"> <i
                            class="fa-brands fa-github"></i> Check out my Github </a>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
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
.h5 {
    padding-top: 7rem;
    padding-bottom: 3rem;
    margin: 0;
    width: 100%;
    color: white;
    text-align: center;
}
.card{
    border:1px solid white;

    background: transparent !important;
}
.card-body{
    background: transparent !important;
    color:white !important;
}
#project{
    background: transparent !important;
}
.container-fluid{
    background: transparent !important;
}

.card-body {
    padding: 0;
}

.media-buttons {
    width: 100%;
    height: 100%;
    display: flex;
    height: 2.7rem;
    width: 100%;
    padding-bottom: 20px;
    padding-top: auto;
    justify-content: space-evenly;
    align-items: center;
}



.h5 {
    padding-bottom: 2rem;
    color: white;
}

.button {
    height: 2.7rem;
    width: 8rem;
    color: black;
    background: rgb(166, 5, 5);
    font-weight: bold;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    text-decoration: none;
    border: 2px solid black;
    border-radius: 10px;
}

#git {
    display: flex;
    justify-content: center;
    align-items: center;
}

#hub {
    text-decoration: none;
    border: 2px solid black;
    border-radius: 10px;
    color: black;
    background: rgb(166, 5, 5);
    width: 12rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    height: 3.7rem;
    padding: .2rem;
    margin-bottom: 2rem;
}

#hub:hover {
    color: rgb(226, 15, 15);
    background: white;
    border: 2px solid rgb(11, 11, 11);
}

.button:hover {
    color: rgb(226, 15, 15);
    background: white;
    border: 2px solid rgb(11, 11, 11);
}

.card:hover{
    transform:scale(1.05);
    transition:.6s;
}

#description {
    font-weight: bold;
    font-size: 1.2rem;
    padding: 10px;
}

#title {
    text-align: center;
    padding: 10px;
}

#picture {
    height: 23rem;
    object-fit: contain;
    width: 100%;
}

#div {
    margin-bottom: 2rem;
    height: 20rem;
    border-radius: 20px;
    width: 100%;
}

#project {
    margin-bottom: 2rem;
}

@media (width < 350px) {
    #project {
        padding: 0;
    }
}

@media (width < 992px) {
    .h5 {
        margin-top: 50px;
    }
}

@media (width < 360px) {
    #picture {
        height: 20rem;
    }

    #description {
        font-size: 1rem;
        padding-top: 10px;

    }
}
</style>