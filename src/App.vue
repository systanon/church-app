<script lang="ts">
import { defineComponent } from 'vue';
import { useWindowResize } from '@/composables/useWindowResize';
import AppFooter from './components/AppFooter.vue';

export default defineComponent({
  name: 'App',
  components: {
    AppFooter
  },
  setup() {
    const { appHeight, appWidth } = useWindowResize();

    return { appHeight, appWidth };
  },
});
</script>

<template>
  <router-view />
  <AppFooter />
</template>

<style lang="scss">
html,
body,
#app {
  height: 100%;
}

body {
  font-family: 'Montserrat', sans-serif;
}
</style>
