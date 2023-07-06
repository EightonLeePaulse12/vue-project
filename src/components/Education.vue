<template>
    <div v-if="education">
        <h3>
            Education
        </h3>
        <div class="container" id="primary" data-aos="fade-left" data-aos-duration="750">
            <div class="row">
                <div class="col">
                    <h4>{{ education[0]?.type }}</h4>
                    <img :src="education[0]?.image" loading="lazy" alt="">
                    <p id="years">Years: {{ education[0].years }}</p>
                    <p id="desc"> {{ education[0].description }} </p>

                </div>
            </div>
        </div>
        <div class="container" id="secondary" data-aos="fade-right" data-aos-duration="750">
            <div class="row">
                <div class="col">
                    <h4>
                        {{ education[1]?.type }}
                    </h4>
                    <img :src="education[1]?.image" loading="lazy" alt="">
                    <p id="years">Years: {{ education[1].years }}</p>
                    <p id="desc"> {{ education[1].description }} </p>

                </div>
            </div>
        </div>
        <div class="container" id="tertiary" data-aos="fade-left" data-aos-duration="750">
            <div class="row">
                <div class="col">
                    <h4>
                        {{ education[2]?.type }}
                    </h4>
                    <img :src="education[2]?.image" loading="lazy" alt="">
                    <p id="years">Years: {{ education[2].years }}</p>
                    <p id="desc"> {{ education[2].description }} </p>
                </div>
            </div>
        </div>
    </div>
    <div v-else>
        <div id="spinner" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
// import aos
export default {
    computed: {
        education() {
            return this.$store.state.education
        }
    },
    mounted() {
        this.$store.dispatch('displayEducation')
    }
}
</script>

<style scoped>

h3 {
    margin-top: 6rem;
    padding: 20px;
    width: 100%;
    font-weight: bold;
    text-align: center;
}

#spinner {
    padding: 30px;
    margin: 30px;
}

#years {
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
}

#desc {
    font-size: 1.99rem;
    font-weight: bold;
}

img {
    object-fit: contain;
    display: inline-block;
    width: 100%;
    height: 7rem;
}

#primary {
    color: white;
    padding: 1rem;
    text-align: center;
    height: 25rem;
    border: 2px solid black;
    margin-top: 3rem;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    border-radius: 20px;
    /*transform:translateX(100%);
    transition: transform .4s ease; */
}

#secondary {
    padding: 1rem;
    text-align: center;
    margin-top: 3rem;
    height: 25rem;
    border-radius: 20px;
    margin-bottom: 3rem;
    border: 3px solid black;
}

#tertiary {
    color: white;
    padding: 1rem;
    text-align: center;
    height: 25rem;
    border-radius: 20px;
    border: 2px solid black;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    margin-bottom: 3rem;
}

@media (width < 1200px) {
    #desc {
        font-size: 1.66rem;
    }
}

@media (width < 992px) {
    #desc {
        font-size: 1.5rem;
    }
}

@media (width < 768px) {
    #desc {
        font-size: 1.4rem;
    }
}

@media (width < 520px) {
    #desc {
        font-size: 1.3rem;
    }
}

@media (width < 485px) {
    #desc {
        font-size: 1.2rem;
    }
}

@media (width < 354px) {
    #desc {
        font-size: 1.1rem;
    }
}

@media (width < 327px) {
    #desc {
        font-size: 1rem;
    }
}

@media (width < 274px) {
    #desc {
        font-size: .9rem;
    }
}

@media (width < 227px) {
    #desc {
        font-size: .8rem;
    }
}

@media (width < 198px) {
    #desc {
        font-size: .7rem;
    }
}
</style>