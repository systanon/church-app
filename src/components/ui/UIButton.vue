<template>
  <button class="ui-button">{{ text }}</button>
</template>
<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
  name: "UIButton",
  props: {
    text: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.ui-button {
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  background-color: $btn-bg-color;
  color: $primary-color;
  padding: 1rem 2.563rem;
}
</style>
