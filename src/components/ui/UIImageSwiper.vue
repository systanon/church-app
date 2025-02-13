<template>
  <swiper :pagination="{
    type: 'fraction',
  }" :navigation="isDesktop || isLargeDesktop" :modules="modules">
    <swiper-slide v-for="image of images">
      <UIImage :src="image" :width="width" :height="height" />
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

<style lang="scss" scoped>
.swiper {
  width: 100%;

}

.swiper-slide {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

:deep(.swiper-button-next) {
  color: grey;
  background-color: $swiper-btn-color;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
}

:deep(.swiper-button-prev) {
  color: grey;
  background-color: $swiper-btn-color;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: background-color 0.3s, transform 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  cursor: pointer;
}

:deep(.swiper-button-next:hover) {
  background-color: $swiper-btn-hover;
  transform: scale(1.1);
}

:deep(.swiper-button-prev:hover) {
  background-color: $swiper-btn-hover;
  transform: scale(1.1);
}

:deep(.swiper-button-next::after) {
  font-size: 1.5rem;
}

:deep(.swiper-button-prev::after) {
  font-size: 1.5rem;
}

:deep(.swiper-pagination-fraction) {
  color: $primary-color;
}
</style>
