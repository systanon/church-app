<template>
  <div class="image-wrapper">
    <UIImage :src="src" :alt="alt" />
    <h4 class="image-wrapper__text text">{{ title }}</h4>
    <div class="image-wrapper__figure figure"></div>
  </div>
</template>

<script lang="ts" setup>
import UIImage from './UIImage.vue';
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: 'Image',
  },
  width: {
    type: [String, Number],
    default: 'auto',
  },
  height: {
    type: [String, Number],
    default: 'auto',
  },
  title: {
    type: String,
    default: '',
  },
});
</script>

<style lang="scss" scoped>
.image-wrapper {
  position: relative;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: $backdrop-bg;
  }

  &__text {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: $primary-color;
  }

  &__figure {
    width: 40px;
    height: 40px;
    background: rgba(255, 255, 255, 0);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 20%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    z-index: 0;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background-color: #333;
      opacity: 0;
    }

    &::before {
      width: 50%;
      height: 4px;
    }

    &::after {
      width: 4px;
      height: 50%;
    }
  }

  &:hover {
    .image-wrapper:after {
      content: '';
      top: 0;
      left: 0;
      transform: scale(0.95);
      position: absolute;
      width: 100%;
      height: 100%;
      border: 1px solid $frame;
    }

    .figure {
      background: rgba(255, 255, 255, 0.3);
      opacity: 1;
      z-index: 1;

      &::before,
      &::after {
        opacity: 1;
      }
    }
  }
}
</style>
