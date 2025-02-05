<script lang="ts">
import { defineComponent } from 'vue'
import { byAuthorized, mainMenu, NavigationMenu } from "@/config/navigation";


export default defineComponent({
  name: "NavigationMenuMobile",
  data() {
    return {
      isNavOpen: false
    }
  },

  computed: {
    navigationList(): NavigationMenu {
      return mainMenu.filter(byAuthorized(true));
    },
  },
  methods: {
    toggleNav() {
      this.isNavOpen = !this.isNavOpen;
    }
  }
})
</script>

<template>
  <button class="menu-button" @click="toggleNav">open menu</button>
  <aside class="app-navigation" :class="{ open: isNavOpen }">
    <button @click="toggleNav">close</button>
    <ul>
      <li v-for="{ path, i18n_key } in navigationList" :key="path"
        :class="['navigation-menu__item', { _active: $route.path === path }]" @click="$router.push(path)">
        <span class="app-navigation__text">{{ $t(`header_menu.${i18n_key}`) }}</span>
      </li>
    </ul>
  </aside>
</template>


<style lang="scss" scoped>
.menu-button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.app-navigation {
  background-color: $background-color-nav;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 1em;
  height: 100%;
  width: 20%;
  position: fixed;
  top: 0;
  left: 0;
  transform: translateX(-100%);
  transition: transform 0.3s ease-in-out;
  z-index: 10;

  &__text {
    color: $text-color;
  }
}

.app-navigation.open {
  transform: translateX(0);
}
</style>