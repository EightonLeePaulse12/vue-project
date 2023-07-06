<template>
    <div>
        <h1>My Projects</h1>
        <Projects />
    </div>
</template>

<script>
import Projects from '../components/Projects.vue'
export default {
    components: {
        Projects
    }
}
</script>

<style scoped>
h1 {
    padding-top: 7rem;
    padding-bottom: 3rem;
    margin: 0;
    width: 100%;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    color: white;
    text-align: center;
}


h2 {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

}
</style>