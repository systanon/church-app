<script lang="ts">
import { defineComponent } from "vue";
import AppHeader  from "@/components/AppHeader.vue"
import { useInjectWindowResize } from "@/composables/useWindowResize";


export default defineComponent({
 components: {
  AppHeader
 },
 setup() {
    const { headerHeight } = useInjectWindowResize();
    return { headerHeight };
  },

})
</script>

<template>
 <div class="home-page" :style="{'top': `-${headerHeight}px`}">
  <div :style="{'padding-top': `${headerHeight}px`}">jopasdfasfasdfasdfsdaf</div>
  <!-- <AppHeader/> -->
 </div>
</template>

<style lang="scss" scoped>
.home-page {
  position: relative;
  height: 50%;
  max-width: 100%;
  background-image: url('@/assets/bg-images/home.png');
  z-index: -1;
}
</style>
