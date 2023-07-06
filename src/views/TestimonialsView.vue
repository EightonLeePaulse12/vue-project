<template>
    <div class="background">
        <h1>Testimonials</h1>
        <h5>Some people have said some nice things about me...</h5>
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
    padding-top: 1rem;
    padding-bottom: 2rem;
    margin: 0;
    width: 100%;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    color: white;
    text-align: center;
}

.h5 {
    padding-bottom: 2rem;
    color: white;
}

@media (width > 991px) {
    h1 {
        margin-top: 6.4rem;
    }
}

.background {
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
}

h5 {
    text-align: center;
    font-weight: bold;
    margin-top: 1rem;
    color: white;
    font-size: 1.2rem;
}
</style>