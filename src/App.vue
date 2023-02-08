<template>
  <header class="header">
    <h1>Check out the Blinkist app</h1>
  </header>
  <div class="header-border"></div>
  <div class="content">
    <img src="../images/hero_image.jpg" alt="Check out the Blinkist app" />
    <div class="variant-text">
      <div v-if="variationType === 'control'">
        Meet the app that revolutionized reading.
      </div>
      <div v-if="variationType === 'test'">
        Meet the app that has 18 million users.
      </div>
    </div>
  </div>

  <div class="cta">
    <p>Thanks a lot for reading the article!</p>
    <a href="#" @click="trackSignupClick" class="signup-link">SIGN UP</a>
    for Blinkist.
  </div>
</template>

<script>
import { trackPageview, trackEvent } from "./analytics-api";
import { generateRandomNumber, generateUniqueId } from "./helper";

export default {
  data() {
    return {
      visitorId: window.localStorage.getItem("visitorId"),
      variationType: window.localStorage.getItem("variationType"),
      pageViewCount: window.localStorage.getItem("pageViewCount"),
      signUpClickCount: window.localStorage.getItem("signUpClickCount"),
    };
  },
  mounted() {
    // Detect a new visitor by checking if visitorId exists.
    if (this.visitorId === null) {
      // Assign a unique id to the visitorId.
      this.visitorId = generateUniqueId();

      // Assign a random variaton type to new visitor.
      this.variationType =
        generateRandomNumber(0, 1) === 0 ? "control" : "test";

      // Count first page view for a new visitor.
      this.pageViewCount = 1;

      // Persist data in localStorage.
      window.localStorage.setItem("visitorId", this.visitorId);
      window.localStorage.setItem("variationType", this.variationType);
      window.localStorage.setItem("pageViewCount", this.pageViewCount);
    } else {
      // If it is the same visitor count up the page views.
      this.pageViewCount++;

      // Send payload for tracking page views to analytics-api.
      trackPageview({
        visitorId: this.visitorId,
        variationType: this.variationType,
        pageViewCounts: this.pageViewCount,
      });

      // Update total page views on local storage.
      window.localStorage.setItem("pageViewCount", this.pageViewCount);
    }
  },
  methods: {
    trackSignupClick() {
      // If signUpClickCount from localStorage does not exist yet, set 1 to signUpClickCount.
      if (!this.signUpClickCount) {
        this.signUpClickCount = 1;
      } else {
        // Count up every time the sign up button is clicked.
        this.signUpClickCount++;
      }

      // Send payload for tracking sign up click events to analytics.
      trackEvent({
        visitorId: this.visitorId,
        variationType: this.variationType,
        eventCounts: this.signUpClickCount,
        eventType: "signup-click",
      });

      // Update total sign up clicks on local storage.
      window.localStorage.setItem("signUpClickCount", this.signUpClickCount);
    },
  },
};
</script>

<style>
.header {
  color: var(--blinkist-blue-dark);
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-size: 1.2em;
  font-family: "CeraPRO-Bold", sans-serif, arial;
}

.header-border {
  width: 20rem;
  height: 0.4rem;
  margin: 1.5rem;
  background-color: var(--blinkist-blue-light);
}

.content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.content img {
  width: 50%;
  box-shadow: 0px 0px 20px darkgrey;
}

.variant-text {
  width: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  color: var(--blinkist-blue-dark);
  font-size: 1.2em;
}

.cta {
  background-color: var(--blinkist-green);
  box-shadow: 0px 0px 10px var(--blinkist-green);
  color: var(--blinkist-blue-dark);
  padding: 1rem;
  margin: 1.5rem;
  text-align: center;
  line-height: 150%;
  border-radius: 10px;
}

.cta p {
  margin: 0;
}

.signup-link {
  color: var(--blinkist-blue-dark);
  font-weight: bold;
}

.signup-link:hover {
  background-color: var(--blinkist-blue-dark);
  color: #fff;
  text-decoration: none;
  opacity: 1;
}

/* For smaller screens */
@media (max-width: 768px) {
  .content {
    flex-direction: column;
  }

  .content img {
    width: 100%;
    margin-bottom: 1.5rem;
    box-shadow: 0px 0px 20px darkgrey;
  }

  .variant-text {
    padding: 0;
    width: 100%;
  }
}
</style>
