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
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 110vh;
    opacity: 1;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    object-fit: fill;
    z-index: -1;
    background-image: url('https://i.postimg.cc/bvjJQjzf/fiedgz3v3na41.jpg');
}

.color {
    width: 100%;
    height: 110vh;
    background-color: black;
    opacity: .6;
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
    position: absolute;
    top: 0;
    width: 100%;
    height: 110vh;
    z-index: 1;
}

h2 {
    color: white;
    font-weight: bold;
    font-size: 6rem;
    margin-bottom: 20px;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 20px #ff2f00, 0 -18px 40px #F00;
}

h3 {
    color: white;
    margin-bottom: 2rem;
    text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 20px #ff2f00, 0 -18px 40px #F00;
}
</style>