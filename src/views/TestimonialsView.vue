<template>
    <div>
        <div class="container">
            <h1>Testimonials</h1>
        </div>
        <Testimonials />
    </div>
</template>

<script>
import Testimonials from '../components/Testimonials.vue'
export default {
    components: {
        Testimonials  
    }
}
</script>

<style scoped>
h1 {
    margin-top: 6rem;
    margin-top:8rem;
    width: 100%;
    text-align: center;
}

h2 {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

}
</style>