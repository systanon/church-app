<script lang="ts">
  import { defineComponent } from 'vue';
  import { byAuthorized, mainMenu, NavigationMenu } from '@/config/navigation';

  export default defineComponent({
    name: 'NavigationMenu',
    computed: {
      navigationList(): NavigationMenu {
        return mainMenu.filter(byAuthorized(true));
      }
    }
  });
</script>

<template>
  <nav class="app-nav">
    <a class="app-nav__logo"> LOGO </a>
    <ul class="nav-menu">
      <li
        v-for="{ path, i18n_key } in navigationList"
        :key="path"
        :class="['nav-menu__item', { _active: $route.path === path }]"
      >
        <router-link class="nav-menu__item-text" :to="path">
          {{ $t(`header_menu.${i18n_key}`) }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
  .app-nav {
    padding: 2rem;
    display: flex;
    justify-content: space-between;

    &__logo {
      color: $primary-color;
      margin-right: 2rem;
    }

    .nav-menu {
      display: flex;
      gap: 1rem;
    }

    .nav-menu__item-text {
      cursor: pointer;
      padding: 1rem;
      color: $primary-color;
      text-transform: uppercase;
      font-weight: 600;
    }
  }

  @include media-query('desktop') {
    .app-nav {
      display: grid;
      padding: 2rem 0;
      grid-template-columns: repeat(16, 1fr);
      text-align: left;
      gap: 1.875rem;

      &__logo {
        grid-column: 2/ 5;
      }

      .nav-menu {
        grid-column: 6/ 16;
        justify-content: space-around;
      }
    }
  }

  @include media-query('large-desktop') {
    .app-nav {
      display: grid;
      padding: 2rem 0;
      grid-template-columns: repeat(20, 1fr);
      text-align: left;
      gap: 1.875rem;

      &__logo {
        grid-column: 5/ 8;
      }

      .nav-menu {
        grid-column: 8/ 17;
        justify-content: space-around;
      }
    }
  }
</style>
