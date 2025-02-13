<template>
  <swiper :pagination="{
    type: 'fraction',
  }" :navigation="isDesktop || isLargeDesktop" :modules="modules" class="mySwiper">
    <swiper-slide v-for="image of images">
      <UIImage :src="image" :width="width" :height="height"/>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useInjectWindowResize } from '@/composables/useWindowResize';
import UIImage from './UIImage.vue';
//TODO: fix in ts config import css
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
    const { isDesktop, isLargeDesktop } = useInjectWindowResize();
    return {
      isDesktop,
      isLargeDesktop,
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
