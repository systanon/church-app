<script lang="ts">
import { defineComponent  } from "vue";
import { useWindowResize } from "@/composables/useWindowResize";

export default defineComponent({
  name:"App",
 setup() {
    const { appHeight, appWidth } = useWindowResize();

    return { appHeight, appWidth };
  },


})
</script>

<template>
  <router-view/>
</template>

<style lang="scss">
html, body, #app {
  height: 100%;
}
body {
  font-family: 'Montserrat', sans-serif;
}
</style>
