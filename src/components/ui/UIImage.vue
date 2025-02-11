<template>
  <picture class="image-wrapper">
    <source v-if="webpSrcComputed" :srcset="webpSrcComputed" type="image/webp">
    <img
      :src="currentSrc"
      :alt="alt"
      :width="width"
      :height="height"
      :loading="loading"
      :class="rounded ? 'rounded' : ''"
      @error="onError"
    />
  </picture>
</template>

<script lang="ts" setup>
import { ref, computed } from "vue";

import  fallback from "@/assets/fallback.png"

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  webpSrc: {
    type: String,
    default: "",
  },
  fallbackSrc: {
    type: String,
    default: fallback,
  },
  alt: {
    type: String,
    default: "Image",
  },
  width: {
    type: [String, Number],
    default: "auto",
  },
  height: {
    type: [String, Number],
    default: "auto",
  },
  loading: {
    type: String as () => "lazy" | "eager",
    default: "lazy",
  },
  rounded: {
    type: Boolean,
    default: false,
  },
});

const isError = ref(false);
const images = import.meta.glob("/src/assets/**/*", { eager: true });

const resolvePath = (path: string) => {
  if (!path) return "";
  if (path.startsWith("/") || path.startsWith("http")) return path
  return (images[`/src/assets/${path}`] as any)?.default || path;
};

const currentSrc = computed(() => (isError.value ? props.fallbackSrc : resolvePath(props.src)));
const webpSrcComputed = computed(() => resolvePath(props.webpSrc));

const onError = () => {
  isError.value = false;
};
</script>

<style scoped>
.image-wrapper {
  display: block;
  max-width: 100%;
}
img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}
.rounded {
  border-radius: 50%;
}
</style>