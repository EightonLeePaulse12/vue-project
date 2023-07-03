<template>
    <div>
        <div class="container">
            <div class="row" id="image">
                <img id="picOfMe" src="https://i.postimg.cc/wjRndzxs/C12-C2-Eighton-Lee-Paulse-2.jpg" alt="Picture of me">
            </div>
            <div class="row">
                <div class="col">
                    <p>Nice to meet you</p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <h3>A little about myself...</h3>
                </div>
                <div class="row" id="paraRow">
                    <div class="col" id="parCol">
                        <p id="para">
                            Since 2019, I have been extremely passionate about coding. My journey started one random day when
                            I was playing ROBLOX. On this particular day I searched how to make games and once I started
                            learning, I immediately fell in love with it and I instantly knew what I wanted to do in life. I
                            am now 18 years old and my passion continues to burn, I want to write code every opportunity
                            that I get. I also do Karate and I like gaming, anime and noodles.
                        </p>
                    </div>
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

#parCol{
    padding:0;
    justify-content: center;
}

#picOfMe {
    width: 100%;
    object-fit: contain;
    height: 20rem;
}

p {
    font-weight: bold;
    margin-top: 20px;
    text-align: center;
}

#paraRow{
    padding:0;
    justify-content: center;
}

#para{
    font-size:1.2rem;
    padding:0;
}

h3 {
    text-align: center;
}</style>