<template>
  <div class="app-gallery">
    <UIGalleryImage    
      v-for="({preview_image, title}, index) in gallery"
      :key="index"
      :src="preview_image"
      :title="title"
      class="gallery-image"
      @click="openPopup(index)"/>
    <div v-if="isPopupOpen" class="popup-overlay" @click="closePopup">
      <UIButtonIcon class="close-button" @click="closePopup" iconName="close-square" />
      <div class="popup-content" @click.stop>
       
        <UIImageSwiper :images="gallery[currentIndex].images" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UIImageSwiper from "@/components/ui/UIImageSwiper.vue";
import UIGalleryImage from "./UIGalleryImage.vue";
import UIButtonIcon from '@/components/ui/UIButtonIcon.vue';
import {type TizerGalleryItem} from "@/config/tizerGallery"


defineProps<{ gallery: TizerGalleryItem[] }>();


const isPopupOpen = ref(false);
const currentIndex = ref(0);

const openPopup = (index: number) => {
  currentIndex.value = index;
  isPopupOpen.value = true;
};
const closePopup = () => {
  isPopupOpen.value = false;
};
</script>

<style lang="scss" scoped>
.app-gallery {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  width: 100%;
  flex-wrap: wrap;
  gap: 1px;

  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $overlay;
    z-index: 10;
  }
  .popup-content {
    height: 100%;
    display: flex;
  }
  
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    color: $primary-color;
    z-index: 10;
  }
} 

@include media-query('desktop') {
  .app-gallery {
    grid-template-columns: repeat(3,1fr);
  }
}
</style>