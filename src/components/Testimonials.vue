<template>
    <div class="container" data-aos="fade-right" data-aos-duration="750" id="container">
        <div class="mb-3" v-for="item in testimonials" :key="item.id">
            <img :src="item.image" id="picture" class="card-img-top" alt="Image">
            <div class="card-body">
              <h5 class="card-title"> {{ item.name }} - {{ item.role }} </h5>
              <p class="card-text">" {{ item.testimonial }} "</p>
              <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
          </div>
    </div>
</template>

<script>
    export default {
        computed:{
            testimonials(){
                return this.$store.state.testimonials
            },
        },
            mounted(){
                this.$store.dispatch('displayTestimonials')
            }

        }
    
</script>

<style scoped>

#picture{
    height:30rem;
    object-fit: contain;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
}

.mb-3{
    padding:20px;
}

img{
    border-top-right-radius: 20px;
    border-top-left-radius:20px;
    border-radius:.1%;
}


.card-body{
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    color:white;
    padding:20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}



</style>