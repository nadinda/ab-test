<template>
  <h1>Check out the Blinkist app</h1>

  <img
    width="300"
    src="../images/hero_image.jpg"
    alt="Check out the Blinkist app"
  />

  <div v-if="variationType === 'control'">
    Meet the app that revolutionized reading.
  </div>

  <div v-if="variationType === 'test'">
    Meet the app that has 18 million users.
  </div>

  <div>
    Thanks a lot for reading the article! <a href="/signup">SIGN UP</a> for
    Blinkist.
  </div>
</template>

<script>
export default {
  data() {
    return {
      visitorId: window.localStorage.getItem("visitorId"),
      variationType: window.localStorage.getItem("variationType"),
    };
  },
  mounted() {
    function generateUniqueId() {
      return Math.floor(Math.random() * Date.now());
    }

    function generateRandomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }

    // Check if it is a new visitor.
    if (this.visitorId === null) {
      // Assign a unique id to the visitorId.
      this.visitorId = generateUniqueId();

      // Assign a random variaton type to new visitor.
      this.variationType =
        generateRandomNumber(0, 1) === 0 ? "control" : "test";

      // Persist data in localStorage.
      window.localStorage.setItem("visitorId", this.visitorId);
      window.localStorage.setItem("variationType", this.variationType);
    }
  },
};
</script>
