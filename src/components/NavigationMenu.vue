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
  <nav>
    <a> LOGO </a>
    <ul>
      <li
      v-for="{ path, i18n_key } in navigationList"
      :key="path"
      :class="['navigation-menu__item', { _active: $route.path === path }]"
      @click="$router.push(path)"
    >
      <a>{{ $t(`header_menu.${i18n_key}`) }}</a>
    </li>
    </ul>
  </nav>
</template>

<style scoped>
</style>
