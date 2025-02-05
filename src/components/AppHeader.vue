<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import NavigationMenu from './NavigationMenu.vue';
import NavigationMenuMobile from './NavigationMenuMobile.vue';
import { useInjectWindowResize } from '../composables/useWindowResize';


export default defineComponent({
  name: "AppHeader",
  components: {
    NavigationMenu,
    NavigationMenuMobile
  },
  setup() {
    const { appWidth } = useInjectWindowResize();
    return { appWidth };
  },

})
</script>

<template>
    <NavigationMenu v-if="appWidth > 780"/>
    <NavigationMenuMobile v-if="appWidth <= 780"/>
  
</template> 


<style scoped>
</style>