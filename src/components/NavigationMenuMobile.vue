<script lang="ts">
import { defineComponent, inject, type Ref } from 'vue'
// import NavigationMenu from './NavigationMenu.vue';
import { byAuthorized, mainMenu, NavigationMenu } from "@/config/navigation";


export default defineComponent({
  name: "NavigationMenuMobile",
  // components: {
  //   NavigationMenu
  // },
  setup() {
    const isNavOpen = inject<Ref<boolean>>("isNavOpen");
      const toggleNav = inject<() => void>("toggleNav");
      return {
        isNavOpen,
        toggleNav,
      };
    },
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
    <button class="menu-button" @click="toggleNav">open menu</button>
    <aside class="app-menu" :class="{ open: isNavOpen }">
      <button @click="toggleNav">close</button>
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
    </aside>
</template> 


<style scoped>
.menu-button {
  padding: 10px;
  background: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  transition: opacity 0.3s ease-in-out;
}

.app-menu {
  background-color: rgb(239, 232, 232);
  color: white;
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
}

.app-menu.open {
  transform: translateX(0);
}
</style>