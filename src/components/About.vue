<template>
    <div>
        <div class="container-fluid" id="container">
            <div class="row" id="image">
                <img loading="lazy" id="picOfMe" src="https://i.postimg.cc/wjRndzxs/C12-C2-Eighton-Lee-Paulse-2.jpg"
                    alt="Picture of me">
            </div>
            <div class="row">
                <div class="col">
                    <p class="nice">Nice to meet you</p>
                </div>
            </div>
            <div class="row" id="row">
                <div class="col">
                    <h3>A little about myself...</h3>
                </div>
                <div class="row" id="paraRow">
                    <div class="col" id="parCol">
                        <p id="para">
                            Since 2019, I have been extremely passionate about coding. My journey began on a random day
                            while playing ROBLOX, when I decided to search for tutorials on how to make these games that I
                            was playing. Once I started
                            learning, I immediately fell in love with coding and knew that it was my true calling. <br> Now,
                            at
                            18 years old, my passion continues to burn, and I take every opportunity I get to write code. My
                            dream is to become a game developer someday. Apart from coding, I also practice Karate and enjoy
                            gaming, anime, and noodles.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row" id="likess">
                <div class="col" id="likes">
                    <h5>
                        Likes
                    </h5>
                    <ul>
                        <li>Watching Anime</li>
                        <li>Gaming</li>
                        <li>Doing Karate</li>
                        <li>Going to Water Parks</li>
                        <li>Going Swimming</li>
                    </ul>
                </div>
                <div class="col" id="dislikes">
                    <h5>
                        Hobbies
                    </h5>
                    <ul>
                        <li>Taking long walks</li>
                        <li>Practising Karate</li>
                        <li>Keeping up with new technologies</li>
                        <li>Coding</li>
                        <li>Camping</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#image {
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

h3 {
    color: white;
}

#likes {
    text-align: center;
    margin-bottom: 20px;
    padding: 0;
}

ul {
    padding: 0;
    margin-bottom: 0;

}

h5 {
    display: flex;
    height: 3rem;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
    color: white;
    margin-bottom: 0;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid black;
    font-size: 1.5rem;
    font-weight: bold;
}

#dislikes {
    text-align: center;
    padding: 0;
    border-left: 2px solid black;
}

#row {
    justify-content: center;
}



#parCol {
    padding: 0;
    justify-content: center;
}

@media (width < 790px) {
    #para {
        padding: 3rem !important;
    }
}

@media (width < 301px){
    li:nth-child(5){
        margin-bottom:20px;
    }
}

@media (width < 507px) {
    #para {
        font-size: 1.1rem !important;
    }
}

@media (width < 389px) {
    #para {
        padding: 1rem !important;
    }
}

@media (width < 328px) {
    #para {
        padding: 10px !important;
        font-size: .9rem !important;
    }
}

#picOfMe {
    border-radius: 50%;
    margin-top: 1.5rem;
    object-fit: cover;
    object-position: center top;
    width:12rem;
    height:12rem;
    border-radius: none !important;
}

.nice {
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
    color: white;
}

p {
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
}


#paraRow {
    padding: 0;
    justify-content: center;
}

#para {
    font-size: 1.2rem;
    padding: 200px;
    padding-top: 10px;
    padding-bottom: 20px;
    color: white;
}

h3 {
    text-align: center;
    margin: 0;
}

li {
    list-style: none;
    font-weight: bold;
    line-height: 3rem;
    font-size: 1.4rem;
    color: white;
}



@media (width < 321px) {
    #para {
        font-size: .9rem;
    }
}

@media(width <=421px) {
    #likess {
        flex-direction: column;
    }
}
</style>