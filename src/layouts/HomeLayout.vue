<script lang="ts">
  import { defineComponent, ref, provide } from 'vue';
  import AppHeader from '../components/AppHeader.vue';
  export default defineComponent({
    name: 'HomeLayout',
    components: {
      AppHeader,
    },
    setup() {
      const isNavOpen = ref<boolean>(false);

      const toggleNav = () => {
        isNavOpen.value = !isNavOpen.value;
      };

      provide('isNavOpen', isNavOpen);
      provide('toggleNav', toggleNav);

      return {
        isNavOpen,
        toggleNav,
      };
    },
  });
</script>

<template>
  <header class="app-header">
    <AppHeader />
    <div class="app-header__text">
      <h1>{{ $t('header.home_page.title') }}</h1>
      <h2>{{ $t('header.home_page.sub-title') }}</h2>
    </div>
  </header>
  <main>
    <router-view />
  </main>
</template>
<style lang="scss" scoped>
  .app-header {
    height: 25%;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url('@/assets/bg-images/home.png');
  }

  @include media-query('mobile') {
    .app-header {
      height: 35%;
    }
  }

  @include media-query('tablet') {
    .app-header {
      height: 40%;
    }
  }

  @include media-query('desktop') {
    .app-header {
      height: 45%;
    }
  }

  @include media-query('large-desktop') {
    .app-header {
      height: 50%;
    }
  }
</style>
