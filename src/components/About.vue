<template>
    <div>
        <div class="container">
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
                            learning, I immediately fell in love with coding and knew that it was my true calling. Now, at
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
                        <li>Anime</li>
                        <li>Gaming</li>
                        <li>Karate</li>
                        <li>Water Parks</li>
                        <li>Swimming</li>
                    </ul>
                </div>
                <div class="col" id="dislikes">
                    <h5>
                        Dislikes
                    </h5>
                    <ul>
                        <li>Marmite</li>
                        <li>Cauliflower</li>
                        <li>Being sick</li>
                        <li>Rugby</li>
                        <li>Dogs</li>
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
    display: flex;
    justify-content: center;
    align-items: center;
}


#likes{
    text-align:center;
    padding:0;
}

ul{
    padding:0;
}

h5{
    margin-top:2rem;
    margin-bottom:2rem;
    font-size:1.5rem;
    font-weight:bold;
}

#dislikes{
    text-align: center;
    padding:0;
}

#row {
    justify-content: center;
}


#parCol {
    padding: 0;
    justify-content: center;
}

#picOfMe {
    width: 100%;
    object-fit: contain;
    height: 20rem;
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
    padding: 10px;
}

h3 {
    text-align: center;
}

li{
    list-style:none;
    font-weight:bold;
    line-height:3rem;
    font-size:1.4rem;
}



@media (max-width:321px) {
    #para {
        font-size: .9rem;
    }
}

@media(max-width:421px){
    #likess{
        flex-direction:column;
    }
}
</style>