<script lang="ts">
  import { defineComponent } from 'vue';
  import AppHeader from '../components/AppHeader.vue';
  export default defineComponent({
    name: 'HomeLayout',
    components: {
      AppHeader,
    }
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
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;

    }
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
