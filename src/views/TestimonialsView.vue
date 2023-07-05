<template>
    <div>
        <h1>Testimonials</h1>
        <p>Some people have said some nice things about me...</p>
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
    margin-top: 8rem;
    width: 100%;
    text-align: center;
}
p{
    text-align:center;
    font-weight:bold;
    margin-top:1rem;
    font-size:1.2rem;
}

h2 {
    margin-top: 3rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;

}
</style>