<template>
    <div v-if="skills">
        <h3>
            Skills
        </h3>

        <div class="container">
            <div class="row">
                <div class="col" id="colLeft">
                    <h5>Languages that I speak:</h5>
                    <ul>
                        <li> {{ skills[0]?.skill }} - Markup Language </li>
                        <li> {{ skills[1]?.skill }} - Style sheet </li>
                        <li> {{ skills[2]?.skill }} - Programming Language </li>
                    </ul>
                    <div class="row">
                        <div class="col"><img
                                :src="skills[0]?.image"
                                id="img" alt="HTML"></div>
                        <div class="col"><img
                                :src="skills[1]?.image"
                                id="img" alt="CSS"></div>
                        <div class="col"><img :src="skills[2]?.image"
                                id="img" alt="Javascript"></div>
                    </div>
                </div>
                <div class="col" id="colRight">
                    <h5>Tools that I use:</h5>
                    <ul id="list">
                        <li> {{ tools[0]?.name }} - {{ tools[0]?.type }} </li>
                        <li> {{ tools[1]?.name }} - {{ tools[1]?.type }} </li>
                    </ul>
                    <div class="row">
                        <div class="col"><img :src="tools[0]?.image" id="img" alt="HTML"></div>
                        <div class="col"><img :src="tools[1]?.image" id="img" alt="CSS"></div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h5>Hard Skills</h5>
                    <ul>
                        <li>Computer Programming</li>
                        <li>Software development knowledge</li>
                        <li>Writing Skills</li>
                        <li>Management Skills</li>
                        <li>Project Management Skills</li>
                    </ul>
                </div>
                <div class="col">
                    <h5>Soft Skills</h5>
                    <ul>
                        <li>Good Communication</li>
                        <li>Leadership</li>
                        <li>Problem Solving</li>
                        <li>Interpersonal Skills</li>
                        <li>Time management</li>
                    </ul>
                </div>
            </div>
            <div class="row" id="button">
                <a id="cv" href="../assets/Eighton-Lee CV.pdf" download="Eighton-Lee's CV">Download my resume  <i class="fa-solid fa-download"></i></a>
            </div>
        </div>
    </div>
    <div v-else-if="tools">
    </div>
    <div v-else>
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        skills() {
            return this.$store.state.skills
        },
        tools() {
            return this.$store.state.tools
        }
    },
    mounted() {
        this.$store.dispatch('displaySkills')
        this.$store.dispatch('displayTools')
    },

}
</script>

<style scoped>
h3 {
    text-align: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

#list {
    margin-bottom: 4.3rem;
}

#cv{
    text-decoration: none;
    color:black;
    font-weight:bold;
    color:red;
    font-size:1.4rem;
    margin-top:2rem;
}

#cv:hover{
    color:rgb(211, 0, 0);
    text-decoration: underline;
}

.row {
    text-align: center;
    margin-bottom: 2rem;
}

.col {
    text-align: center;
}

#colLeft {
    border-right: 2px solid black;
}

#img {
    width: 100%;
    height: 5rem;
    margin-bottom: 20px;
    margin-top: 20px;
    object-fit: contain;
}

h5 {
    margin-bottom: 20px;
}

li {
    list-style: none;
    padding:0;
    width:100%;
    text-align: center;
    font-weight: bold;
    margin: 1.4rem 0;
}
</style>