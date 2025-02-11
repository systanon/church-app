<script lang="ts">
import { defineComponent, ref, type PropType } from "vue";

import { useInjectWindowResize } from '../composables/useWindowResize';

export interface TabItem {
  title: string;
  key: string;
}

export default defineComponent({
  name: "TabMenu",
  props: {
    tabs: {
      type: Array as PropType<TabItem[]>,
      required: true,
    },
  },
  setup(props) {
    const { isMobile } = useInjectWindowResize();
    const activeTab = ref(props.tabs[0]?.key || "");

    const selectTab = (key: string) => {
      activeTab.value = key;
    };
    const toggleTab = (key: string) => {
      activeTab.value = activeTab.value === key ? "" : key;
    };

    return {
      activeTab,
      selectTab,
      isMobile,
      toggleTab
    };
  },
});
</script>

<template>
  <div class="tab-menu">

    <div v-if="!isMobile" class="tab-menu__header">
      <button class="tab-menu__header-btn" v-for="tab in tabs" :key="tab.key"
        :class="{ _active: activeTab === tab.key }" @click="selectTab(tab.key)">
        {{ tab.title }}
      </button>
    </div>
    <div v-if="!isMobile" class="tab-menu__content">
      <slot :name="activeTab" :activeTab="activeTab"></slot>
    </div>
    <div class="tab-menu__accordion" v-else>
      <div v-for="tab in tabs" :key="tab.key" class="tab-menu__accordion-item">
        <button class="tab-menu__accordion-header" @click="toggleTab(tab.key)">
          {{ tab.title }}
          <span :class="{ rotated: activeTab === tab.key }">▼</span>
        </button>
        <div v-show="activeTab === tab.key" class="tab-menu__accordion-content">
          <slot :name="tab.key" :activeTab="tab.key"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tab-menu {
  width: 100%;
  margin: auto;

  &__header {
    background-color: $primary-color;
    padding: 1.5rem 0;
    display: flex;
    justify-content: center;
    gap: 2rem;
    width: 100%;
  }

  &__header-btn {
    border: none;
    background: none;
    cursor: pointer;

    &._active {
      color: $active-btn;
    }
  }

  &__content {
    padding-top: 3.75rem;
  }

  &__accordion {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__accordion-item {
    overflow: hidden;
  }

  &__accordion-header {
    width: 100%;
    padding: 1.5rem;
    text-align: left;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__accordion-header span {
    transition: transform 0.3s ease;
  }

  &__accordion-header span.rotated {
    transform: rotate(180deg);
  }

  &__accordion-content {
    padding: 10px;
  }
}
</style>