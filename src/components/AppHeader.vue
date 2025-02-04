<script lang="ts">
import { defineComponent } from "vue";
import { byAuthorized, mainMenu, NavigationMenu } from "@/config/navigation";
import langOptions from "@/config/lang-options";

export default defineComponent({
  name: "AppHeader",
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
  <header>
    <ul>
      <li
      v-for="{ path, i18n_key } in navigationList"
      :key="path"
      :class="['navigation-menu__item', { _active: $route.path === path }]"
      @click="$router.push(path)"
    >
      <h2>{{ $t(`header_menu.${i18n_key}`) }}</h2>
    </li>
    </ul>
  </header>
</template>

<style scoped>
</style>
