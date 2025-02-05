<template>
  <div class="page-not-found">
    <div class="page-not-found__container">
      <h2 class="page-not-found__header">Page not found</h2>
      <div class="page-not-found__main">
        <div class="page-not-found__actions">
          <button
            class=""
            @click="$router.push({ name: 'PageHome' })"
          >To home page</button>
        </div>
        <div class="page-not-found__content">
          After {{ seconds }} seconds you will be redirected to the home page.
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { delay } from "@/helpers/delay";
import { defineComponent } from "vue";

const DELAY_SECONDS = 10;
const DELAY_MILLISECONDS = DELAY_SECONDS * 1000;
const DELAY_REFRESH_MILLISECONDS = 1000;

export default defineComponent({
  name: "PageNotFound",
  data: () => {
    return {
      seconds: DELAY_SECONDS,
      intervalID: 0,
    };
  },
  methods: {
    async redirect() {
      this.intervalID = setInterval(
        () => (this.seconds -= 1),
        DELAY_REFRESH_MILLISECONDS
      );
      await delay(DELAY_MILLISECONDS);
      const { path } = this.$route;
      console.log(`Redirect from: ${path}`);
      clearInterval(this.intervalID);
      this.$router.push("/");
    },
  },
  mounted() {
    this.redirect();
  },
});
</script>

<style lang="scss" scoped>
.page-not-found {
  align-items: center;
  display: flex;
  flex-direction: column;
  &__container {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    gap: 8px;
    max-width: 400px;
    width: 100%;
  }
  &__header {
    flex: 0 0;
  }
  &__main {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    gap: 8px;
  }
  &__content {
    flex: 1 1;
    position: relative;
  }
}
</style>
