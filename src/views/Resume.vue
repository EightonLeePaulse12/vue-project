<template>
    <div>
        <Education />
        <Skills />
    </div>
</template>

<script>
import Education from '../components/Education.vue'
import Skills from '../components/Skills.vue'
export default {
    components: {
        Education,
        Skills
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
</style>