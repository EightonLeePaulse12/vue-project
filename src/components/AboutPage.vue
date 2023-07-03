<template>
    <div>
        <h3>
            Education
        </h3>
        <div class="container" id="primary" data-aos="fade-right">
            <div class="row">
                <div class="col">
                    <h4>Primary School</h4>
                </div>
            </div>
        </div>
        <div class="container" id="secondary">
            <div class="row">
                <div class="col">
                    <h4>
                        High School
                    </h4>
                </div>
            </div>
        </div>
        <div class="container" id="tertiary">
            <div class="row">
                <div class="col">
                    <h4>Tertiary Education</h4>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import aos
export default {
    methods: {
        checkBoxes: function () {
            console.log("HI")
        }
    },
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
    text-align: center;
    margin-top: 2rem;
}

#primary {
    color:white;
    padding:1rem;
    text-align:center;
    height: 25rem;
    border:2px solid black;
    margin-top: 3rem;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    border-radius: 20px;
    /*transform:translateX(100%);
    transition: transform .4s ease; */
}

#secondary {
    padding:1rem;
    text-align:center;
    margin-top: 3rem;
    height: 25rem;
    border-radius: 20px;
    margin-bottom: 3rem;
    border: 3px solid black;
}

#tertiary {
    color:white;
    padding:1rem;
    text-align:center;
    height: 25rem;
    border-radius: 20px;
    border:2px solid black;
    background: linear-gradient(98.3deg, rgb(0, 0, 0) 10.6%, rgb(255, 0, 0) 97.7%);
    margin-bottom: 3rem;
}
</style>