<template>
    <div>
        <div class="container-fluid">
            <div class="color">

            </div>

            <!-- <div class="image-of-me">
                <img src="" alt="Pic of me">
            </div> -->
        </div>
        <div class="headings">
            <h2>Hello There</h2>
            <h3>I'm an aspiring full-stack web developer</h3>
            <h3>I also build stuff</h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid {
    padding: 0;
    background-color:black;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110vh;
    opacity:1;
    position:relative;
    box-shadow: inset 2px 2px 3px rgba(0, 0, 0, .6);
    background-attachment: fixed;
    background-repeat:no-repeat;
    background-position:center center;
    object-fit:cover;
    z-index:-1;
    background-image: url('https://i.postimg.cc/KzqLzXjv/e1943ea6477681592245aaae28401420.jpg')
}

.color{
    width:100%;
    height:110vh;
    background-color:black;
    opacity:.5;
}

.container-fluid::after {
    content: '';
    background: rgba(0, 0, 0, .6);
}


.headings {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position:absolute;
    top:0;
    width:100%;
    height:110vh;
    z-index:1;
}

h2{
    color:white;
    font-weight:bold;
    font-size:6rem;
    margin-bottom:20px;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 20px #ff2f00, 0 -18px 40px #F00;
}
h3{
    color:white;
    margin-bottom:2rem;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 20px #ff2f00, 0 -18px 40px #F00;
}
</style>