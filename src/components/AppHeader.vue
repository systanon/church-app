<script lang="ts">
import { defineComponent } from 'vue'
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
    const { isTablet, isMobile } = useInjectWindowResize();
    return { isTablet, isMobile};
  },

})
</script>

<template>
  <NavigationMenuMobile v-if="isMobile || isTablet"/>
  <NavigationMenu v-else/>
  
</template> 


<style scoped>
</style>