<template>
    <div class="container" id="container">
        <div class="car container" data-aos="fade-right" data-aos-duration="750" v-for="item in testimonials"
            :key="item.id">
            <img loading="lazy" :src="item.image" id="picture" class="card-img-top" alt="Image">
            <div class="card-body">
                <h5 class="card-title"> {{ item.name }} - {{ item.role }} </h5>
                <p class="card-text">"{{ item.testimonial }}"</p>
                <p class="card-text"><small class="text-body-secondary"></small></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        testimonials() {
            return this.$store.state.testimonials
        },
    },
    mounted() {
        this.$store.dispatch('displayTestimonials')
    }

}

</script>

<style scoped>
#picture {
    height: 30rem;
    object-fit: contain;
    background: transparent;
}

.car{
    margin-bottom:20px;
}

.container {
    border-radius: 20px;
}



.car {
    margin-top: 2rem;
    border: 2px solid white;
}

.car:hover{
    transform:scale(1.05);
}

img {
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-radius: .1%;
}

@media (width > 992px) {
    .car {
        width: 65%;
    }
}

@media (width < 400px) {
    .car {
        padding: 0;
    }
}

@media (width < 532px) {
    #picture {
        object-fit: cover;
        width: 100%;
        border-radius: 20px;
    }

    .car {
        padding: 0;
    }
}

.card-body {
    color: rgb(255, 255, 255);
    padding: 20px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
}
</style>