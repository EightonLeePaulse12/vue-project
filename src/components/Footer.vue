<template>
    <div class="width">
        <div class="container-fluid" id="footer-container">
            <div class="statement">
                <h3>Interested in working together?</h3>
                <h4>Let's do it!</h4>
            </div>
            <div class="Logo">
                <img id="footerImg" src="https://i.postimg.cc/wj8d8M5q/logo-no-background.png" loading="lazy" alt="Image">
                <h5 class="mt-5">Developing greatness.</h5>
            </div>
            <div class="socials">
                <div class="circle">
                    <a target="_blank" href="https://github.com/EightonLeePaulse12"><i id="fa"
                            class="fas fa fa-brands fa-github"></i></a>
                </div>
                <div class="circle">
                    <a target="_blank" href="https://www.linkedin.com/in/eighton-lee-antonio-paulse-502b96275/"><i id="fa"
                            class="fas fa fa-brands fa-linkedin"></i></a>
                </div>
                <div class="circle">
                    <a target="_blank" href="mailto:eightonleepaulse@gmail.com"><i id="fa"
                            class="fa-solid fa-envelope"></i></a>
                </div>
                <div class="circle">
                    <a target="_blank" href="https://www.reddit.com/user/EightonLeePaulse"><i id="fa"
                            class="fas fa fa-brands fa-reddit"></i></a>
                </div>

            </div>

            <div class="final-part">
                <p>All Rights Reserved to Eighton-Lee Paulse &copy; 2023</p>
                <p>Made in VueJS</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.container-fluid {
    height: 29rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.statement {
    height: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 5rem;
    margin-bottom: 1rem;
    border-radius: 10px;
}

#footerImg {
    height: 8rem;
    width: 100%;
    object-fit: contain;
}

h4 {
    text-align: center;
    color: rgb(239, 231, 231);
}

.mt-5 {
    color: white;
    margin-top: 16px !important;
}

#footer-container {
    padding: 25px;
}

h3 {
    color: rgb(255, 255, 255);
}

h5 {
    text-align: center;
}

#fa {
    color: white;
}

#fa:hover {
    color: red;
}

.socials {
    width: 14rem;
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
}

.circle {
    border: 2px solid white;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
}

i {
    color: white !important;
    background-color: white;
}

.circle:hover {
    background-color: white;
}

i:hover {
    color: red !important;
}

.final-part {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
}

h3 {
    text-align: center;
}

p {
    text-align: center;
}

.width {
    margin-top: auto;
}

@media (width < 242px) {
    #footer-container {
        padding: -30px;
    }
}
</style>