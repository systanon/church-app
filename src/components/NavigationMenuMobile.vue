<script lang="ts">
import { defineComponent, type Directive } from 'vue';
import { vOnClickOutside as baseOnClickOutside } from '@vueuse/components';
import { byAuthorized, mainMenu, type NavigationMenu } from '@/config/navigation';
import UIButtonIcon from '@/components/ui/UIButtonIcon.vue';

const vOnClickOutside: Directive = baseOnClickOutside;

export default defineComponent({
  name: 'NavigationMenuMobile',
  components: {
    UIButtonIcon,
  },
  directives: {
    onClickOutside: vOnClickOutside,
  },
  data() {
    return {
      isNavOpen: false,
    };
  },

  computed: {
    navigationList(): NavigationMenu {
      return mainMenu.filter(byAuthorized(true));
    },
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    },
    close() {
      this.isNavOpen = false;
    },
  },
});
</script>

<template>
  <nav class="app-nav">
    <UIButtonIcon class="app-nav__burger-menu" @click="toggleNav" iconName="burger-menu" />
    <a class="app-nav__logo">LOGO </a>
  </nav>
  <aside class="app-navigation" :class="{ open: isNavOpen }" v-on-click-outside="close">
    <UIButtonIcon @click="toggleNav" iconName="close-square" />
    <ul class="navigation-menu">
      <li v-for="{ path, i18n_key } in navigationList" :key="path"
        :class="['navigation-menu__item', { _active: $route.path === path }]" @click="$router.push(path)">
        <span class="navigation-menu__item-text">{{ $t(`header_menu.${i18n_key}`) }}</span>
      </li>
    </ul>
  </aside>
</template>

<style lang="scss" scoped>
.app-nav {
  padding: 1rem;
  display: flex;
  align-items: center;

  &__burger-menu {
    background-color: transparent;
    transition: opacity 0.3s ease-in-out;
    color: $primary-color;
  }

  &__logo {
    padding-left: 2rem;
  }
}

.app-navigation {
  background-color: $background-color-nav;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1em;
  height: 100%;
  width: 25%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  .navigation-menu {
    width: 100%;
    color: $text-color;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    &__item {
      cursor: pointer;
    }
  }
}

.app-navigation.open {
  transform: translateX(0);
}
</style>
