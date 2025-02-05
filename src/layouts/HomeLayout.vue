<script lang="ts">
import { defineComponent, ref, provide  } from "vue";
import AppHeader from '../components/AppHeader.vue';
export default defineComponent({
  name:"HomeLayout",
  components:{
    AppHeader
  },
  setup() {
    const isNavOpen = ref<boolean>(false);
    
    const toggleNav = () => {
      isNavOpen.value = !isNavOpen.value;
    };

    provide("isNavOpen", isNavOpen);
    provide("toggleNav", toggleNav);

    return {
      isNavOpen,
      toggleNav,
    };
  },
})
</script>

<template>
    <header class="app-header">
      <AppHeader/>
    </header>
    <main>
      <router-view />
    </main>
</template>
<style scoped>
.app-header {
  height: 50%;
  max-width: 100%;
  background-image: url('@/assets/bg-images/home.png');
}
</style>