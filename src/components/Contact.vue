<template>
    <div>
        <form action="https://formspree.io/f/mbjvrebv" id="form" method="POST" >
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >Name and Surname</label
              >
              <input
                type="text"
                name="name"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your Name and Surname" required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label"
                >E-mail</label
              >
              <input
                type="email"
                name="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter Your E-mail" required
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >Message</label
              >
              <textarea
                class="form-control"
                name="message"
                id="exampleFormControlTextarea1"
                placeholder="Send us a message"
                rows="3" required
              ></textarea>
            </div>
            <!-- your other form fields go here -->
            <div class="send d-flex justify-content-center align-items-center p-2">
              <button class="pressMe" type="submit">Submit</button>
            </div>
          </form>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>