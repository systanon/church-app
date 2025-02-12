<template>
  <swiper :pagination="{
    type: 'fraction',
  }" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide v-for="image of images">
      <UIImage :src="image" :width="width" :height="height"/>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import UIImage from './UIImage.vue';

import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';


import { Pagination, Navigation } from 'swiper/modules';

export default {
  name: "UIImageSwiper",
  components: {
    Swiper,
    SwiperSlide,
    UIImage
  },
  props: {
    images: {
      type: Array,
      default: []
    },
    width: {
      type: [Number, String],
      default: ''
    },
    height: {
      type: [Number, String],
      default: ''
    }
  },
  setup() {
    return {
      modules: [Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;

}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
