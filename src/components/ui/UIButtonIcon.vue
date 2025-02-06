<template>
  <button
    class="ui-button-icon"
  >
    <UIIcon :name="iconName" />
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import UIIcon from "@/components/ui/UIIcon.vue";


export default defineComponent({
  components: { UIIcon },
  name: "UIButtonIcon",
  props: {
    iconName: {
      type: String,
    },
  },
});
</script>

<style lang="scss" scoped>
.ui-button-icon {
  border: none;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
}
</style>
