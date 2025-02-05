<script lang="ts">
import { defineComponent } from 'vue'
import NavigationMenu from './NavigationMenu.vue';
import NavigationMenuMobile from './NavigationMenuMobile.vue';


export default defineComponent({
  name: "AppHeader",
  emits: ['updateHeight'],
  components: {
    NavigationMenu,
    NavigationMenuMobile
  },
})
</script>

<template>
  <!-- <header class="app-header" > -->
    <!-- <NavigationMenu/> -->
    <NavigationMenuMobile/>

  <!-- </header> -->
  
</template> 


<style scoped>
</style>