<template>
  <section class="app-ministry">
    <UIImage class="app-ministry__image" src="home-about/bg_5.png" />
    <div class="app-ministry__content">
      <h4 class="app-ministry__content-title">
        <span class="bold-text">Youth ministry - </span>Students & teenagers
      </h4>
      <div class="app-ministry__content-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur debitis, natus, culpa
          magni ut odio hic iste aperiam, itaque aliquid dolorem laborum veritatis beatae officiis?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam velit ea expedita! Totam
          vitae voluptate error nesciunt, autem, esse fugit cum omnis excepturi temporibus at
          assumenda itaque ad odit est? Iure laborum quae iste nobis assumenda expedita odio, suscipit
          provident. Quam non impedit dignissimos excepturi.
        </p>
      </div>
      <UIButton :text="$t('btn-text')" class="app-ministry__content-action" />
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import UIButton from '../ui/UIButton.vue';
import UIImage from '@/components/ui/UIImage.vue';

export default defineComponent({
  name: 'YouthMinistry',
  components: {
    UIButton,
    UIImage,
  },
});
</script>

<style lang="scss" scoped>
.app-ministry {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.875rem;

  &__content-description p:not(:last-child) {
    padding-bottom: 1rem;
  }

  &__content-title {
    padding-bottom: 2.813rem;
  }

  &__content-action {
    margin-top: 2.813rem;
  }
}

@include media-query('tablet') {
  .app-ministry {
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: 'description image';

    &__image {
      grid-area: image;
      grid-column: 8/-1;
    }

    &__content {
      grid-area: description;
      grid-column: 1/8;
    }
  }
}
</style>
