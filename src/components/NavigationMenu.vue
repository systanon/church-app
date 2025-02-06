<script lang="ts">
import { defineComponent } from "vue";
import { byAuthorized, mainMenu, NavigationMenu } from "@/config/navigation";
import langOptions from "@/config/lang-options";

export default defineComponent({
  name: "NavigationMenu",
  computed: {
    navigationList(): NavigationMenu {
      return mainMenu.filter(byAuthorized(true));
    },
    // localLangOptions() {
    //   return langOptions;
    // },
  },

})
</script>

<template>
  <nav class="app-nav">
    <a class="app-nav__logo"> LOGO </a>
    <ul class="nav-menu">
      <li
      v-for="{ path, i18n_key } in navigationList"
      :key="path"
      :class="['nav-menu__item', { _active: $route.path === path }]"
      @click="$router.push(path)"
    >
      <a class="nav-menu__item-text">{{ $t(`header_menu.${i18n_key}`) }}</a>
    </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.app-nav {
  padding: 2rem 0;
  display: flex;
  justify-content: center;

  &__logo{
    color: $primary-color;
    margin-right: 2rem;
  }
  .nav-menu {
    display: flex;
    gap: 1rem;
  }
  .nav-menu__item {
    color: $primary-color;
    cursor: pointer;
    &-text {
      cursor: pointer;
    }
  }
}
</style>
