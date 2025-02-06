<template>
  <svg class="ui-icon">
    <use :xlink:href="localHref" height="100%" width="100%"></use>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";
const DEFAULT_ICON_NAME = "none";
export default defineComponent({
  name: "UIIcon",
  props: {
    href: { type: String },
    name: { type: String },
  },
  computed: {
    localHref() {
      return this.href || `#${this.name || DEFAULT_ICON_NAME}`;
    },
  },
});
</script>

<style lang="scss" scoped>
.ui-icon {
  cursor: pointer;
  height: 2rem;
  width: 2rem;
}
</style>
