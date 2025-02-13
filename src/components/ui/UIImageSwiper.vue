<template>
  <swiper :pagination="{
    type: 'fraction',
  }" :navigation="isDesktop || isLargeDesktop" :modules="modules">
    <swiper-slide v-for="image of images">
      <slot :item="image"></slot>
    </swiper-slide>
  </swiper>
</template>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useInjectWindowResize } from '@/composables/useWindowResize';
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

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  @include swiper-button;
}

:deep(.swiper-button-next:hover),
:deep(.swiper-button-prev:hover) {
  @include swiper-button-hover;
}

:deep(.swiper-button-next::after),
:deep(.swiper-button-prev::after) {
  @include swiper-button-icon;
}

:deep(.swiper-pagination-fraction) {
  color: $primary-color;
}
</style>
