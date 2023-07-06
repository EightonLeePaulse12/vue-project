<template>
    <div class="background">
        <h1>Some people have said some nice things about me...</h1>
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
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
    margin: 0;
    width: 100%;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    color: white;
    text-align: center;
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