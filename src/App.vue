<script lang="ts">
import { defineComponent, ref  } from "vue";
import { useWindowResize } from "@/composables/useWindowResize";

import AppHeader  from "@/components/AppHeader.vue"
export default defineComponent({
 components: {
  AppHeader
 },
 setup() {
    const headerRef = ref<HTMLElement | null>(null);
    const { headerHeight, appHeight, appWidth } = useWindowResize(headerRef);

    return { headerRef, headerHeight, appHeight, appWidth };
  },


})
</script>

<template>
  <header ref="headerRef">
    <AppHeader/>

  </header>
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
