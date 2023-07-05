    <template>
    <div v-if="skills">
        <h3>
            Skills
        </h3>

        <div class="container-fluid" v-if="tools">
            <div class="row" id="roww">
                <div class="col" id="colLeft">
                    <h5>Languages that I speak:</h5>
                    <ul>
                        <li> {{ skills[0]?.skill }} - Markup Language </li>
                        <li> {{ skills[1]?.skill }} - Style sheet </li>
                        <li> {{ skills[2]?.skill }} - Programming Language </li>
                    </ul>
                    <div class="row">
                        <div class="col"><img loading="lazy" :src="skills[0]?.image" id="img" alt="HTML"></div>
                        <div class="col"><img :src="skills[1]?.image" id="img" loading="lazy" alt="CSS"></div>
                        <div class="col"><img loading="lazy" :src="skills[2]?.image" id="img" alt="Javascript"></div>
                    </div>
                </div>
                <div class="col" id="colRight">
                    <h5>Tools that I use:</h5>
                    <ul id="list" v-if="tools">
                        <li> {{ tools[0]?.name }} - {{ tools[0]?.type }} </li>
                        <li> {{ tools[1]?.name }} - {{ tools[1]?.type }} </li>
                    </ul>
                    <ul v-else>
                        <div class="d-flex justify-content-center">
                            <div class="spinner-border" role="status">
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          </div>
                    </ul>
                    <div class="row">
                        <div class="col"><img loading="lazy" :src="tools[0]?.image" id="img" alt="HTML"></div>
                        <div class="col"><img loading="lazy" :src="tools[1]?.image" id="img" alt="CSS"></div>
                    </div>
                </div>
            </div>
            <div class="row" id="roww">
                <div class="col" id="colLeft">
                    <h5>Hard Skills</h5>
                    <ul id="ul">
                        <li>Computer Programming</li>
                        <li>Software development knowledge</li>
                        <li>Writing Skills</li>
                        <li>Management Skills</li>
                        <li>Project Management Skills</li>
                    </ul>
                </div>
                <div class="col" id="colRight">
                    <h5>Soft Skills</h5>
                    <ul id="ul">
                        <li>Good Communication</li>
                        <li>Leadership</li>
                        <li>Problem Solving</li>
                        <li>Interpersonal Skills</li>
                        <li>Time management</li>
                    </ul>
                </div>
            </div>
            <div class="row" id="button">
                <a id="cv" target="_blank" href="https://drive.google.com/file/d/1J0YpeZ8CNJwd-jj-CvyNHzn33DhEO-TM/view?usp=sharing">Check out my resume <i
                        class="fa-solid fa-download"></i></a>
            </div>
        </div>
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
    padding:0;
}

#cv {
    text-decoration: none;
    color: black;
    font-weight: bold;
    color: red;
    font-size: 1.4rem;
    margin-top: 2rem;
}

#ul{
    padding:0;
}

#cv:hover {
    color: rgb(211, 0, 0);
    text-decoration: underline;
}

#colRight{
    padding:0;
    width:100% !important;
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
    padding:0;
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

.container-fluid{
    padding:0;
}

li {
    list-style: none;
    padding: 0;
    width: 100% !important;
    text-align: center;
    font-weight: bold;
    margin: 1.4rem 0;
}

@media (max-width:768px){
    #row {
        margin-right:1rem;
    }
}

@media (max-width:637px){
    #list li:nth-child(2){
        margin-bottom:5.8rem;
    }

    #colLeft{
        padding:20px;
        padding-top:0;
    }
    .container-fluid{
        padding:0;
    }
}

@media (max-width:369px){
    .col{
        padding:0;
    }
}

@media (max-width:480px){
    #list li:nth-child(2){
        margin-bottom:1rem;
    }

    #list{
        margin-bottom:2rem;
    }

    #row{
        flex-direction:column;
    }

    #colLeft{
        border-right:none;
        padding:0;
        margin-bottom:20px;
    }

    #row{
        margin:0;
    }

    #roww{
        flex-direction:column;
        margin-bottom:0;
    }

    h5{
        font-weight:bold;
    }

    #ul{
        margin-bottom:4rem;
    }

    ul{
        padding:0;
    }
}
</style>