<template>
  <div>
    <h1>Let's get in touch!</h1>
    <form action="https://formspree.io/f/mbjvrebv" id="form" method="POST">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name and Surname</label>
        <input type="text" name="name" class="form-control" id="exampleFormControlInput1"
          placeholder="Enter Your Name and Surname" required />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">E-mail</label>
        <input type="email" name="email" class="form-control" id="exampleFormControlInput1"
          placeholder="Enter Your E-mail" required />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" name="message" id="exampleFormControlTextarea1" placeholder="Send me a message"
          rows="3" required></textarea>
      </div>
      <!-- your other form fields go here -->
      <div class="send d-flex justify-content-center align-items-center p-2">
        <button class="pressMe" type="submit">Submit</button>
      </div>
    </form>
    <div class="container-fluid text-center">
      <h5>Reach out to me!</h5>
      <h6><i class="fa-solid fa-phone"></i> +27 67 990 6093</h6>
      <h6><i class="fa-solid fa-envelope"></i> eightonleepaulse@gmail.com</h6>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
h1 {
  margin-top: 6rem;
  padding: 20px;
  width: 100%;
  text-align: center;
  margin-bottom: 0;
  color: white;
}

h5{
  padding:20px;
  margin:0;
  text-shadow: 0 -1px 4px #FFF, 0 -2px 10px rgb(255, 38, 0), 0 -10px 9px #ff2f00, 0 1px 10px #F00 !important;
  color:white;
}

h6{
  color:white;
  margin:0;
  padding:20px;
}

#exampleFormControlInput1 {
  color: rgb(0, 0, 0);
}

label {
  color: white;
}

form {
  padding: 16rem;
  padding-bottom: 2rem;
  padding-top: 2rem;

}

.pressMe {
  width: 5rem;
  height: 3rem;
  color: white;
  background-color: rgb(166, 5, 5);
  border: 2px solid rgb(249, 242, 242);
  font-weight: bold;
  border-radius: 10px;
}

.pressMe:hover {
  color: rgb(226, 15, 15);
  background: white;
  border: 2px solid rgb(11, 11, 11);
}


@media (width < 719px) {
  form {
    padding: 5rem;
  }
}

@media (width < 424px) {
  form {
    padding: 3rem;
  }
}

@media (width <=342px) {
  form {
    padding: 1rem;
  }
}

@media (width < 992px){
  h1{
    margin-top:7rem;
    padding-top:110px;

  }
}
</style>