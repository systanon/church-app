<script lang="ts">
import { defineComponent } from 'vue';
import YouthMinistry from '@/components/ministries/YouthMinistry.vue';
import TabMenu, { type TabItem } from '@/components/TabMenu.vue';
import UIButton from '@/components/ui/UIButton.vue';
import { tabMinistries, TabKeys } from '@/config/tabs'

export default defineComponent({
  name: 'HomePage',
  components: {
    UIButton,
    YouthMinistry,
    TabMenu,
  },
  setup() {
    const { WOMEN, YOUTH, CHILDREN, WORSHIP, PRISON } = TabKeys

    return { WOMEN, YOUTH, CHILDREN, WORSHIP, PRISON }
  },
  computed: {
    tablist(): TabItem[] {
      return tabMinistries.map(({ key }) => ({ key, title: this.$t(`home_page.ministries.tab_title.${key}`) }));
    }
  }
});
</script>

<template>
  <div class="container">
    <section class="block-about">
      <h5 class="block-about__sub divider">{{ $t('home_page.block1.sub-title') }}</h5>
      <h3 class="block-about__title">
        <span class="bold-text">{{ $t('home_page.block1.title.bolt-text') }}</span>
        {{ $t('home_page.block1.title.other-text') }}
      </h3>
      <p class="block-about__text">{{ $t('home_page.block1.text') }}</p>
      <UIButton :text="$t('btn-text')" class="block-about__btn" />
      <div class="block-about__images">
        <img src="../assets/home-about/bg_1.png" alt="" />
        <img src="../assets/home-about/bg_2.png" alt="" />
        <img src="../assets/home-about/bg_3.png" alt="" />
      </div>
    </section>
  </div>
  <section class="block-verse">
    <div class="container">
      <span class="block-verse__top-divider divider"></span>
      <h3 class="block-verse__title pre-line">
        <span class="bold-text">{{ $t('home_page.block2.title.bold-text') }}</span>
        {{ $t('home_page.block2.title.other-text') }}
      </h3>
      <h4 class="block-verse__sub">{{ $t('home_page.block2.sub-title') }}</h4>
      <span class="block-verse__botton-divider divider"></span>
    </div>
  </section>
  <section class="block-ministries container">
    <h5 class="block-ministries__title divider">{{ $t('home_page.ministries.title') }}</h5>
    <TabMenu :tabs="tablist">
      <template v-slot:[WOMEN]>
        <YouthMinistry />
      </template>
      <template v-slot:[YOUTH]>
        <YouthMinistry />
      </template>
      <template v-slot:[CHILDREN]>
        <YouthMinistry />
      </template>
      <template v-slot:[WORSHIP]>
        <YouthMinistry />
      </template>
      <template v-slot:[PRISON]>
        <YouthMinistry />
      </template>
    </TabMenu>

  </section>
</template>

<style lang="scss" scoped>
.block-about {
  padding-top: 5rem;
  padding-bottom: 5.625rem;
  text-align: center;

  &__title {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
  }

  &__text {
    padding-bottom: 3.125rem;
  }

  &__btn {
    margin-bottom: 3.75rem;
  }

  &__images {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
  }
}

.block-verse {
  position: relative;
  text-align: center;
  padding: 5rem 0;
  color: $primary-color;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url('@/assets/home-about/bg_4.png');

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: $backdrop-bg;
  }

  &__title {
    padding-top: 5rem;
    position: relative;
    z-index: 1;
  }

  &__sub {
    position: relative;
    z-index: 1;
    padding-bottom: 5rem;
  }

  &__top-divider,
  &__botton-divider {
    &.divider {
      &::before {
        top: 0;
        background-color: $primary-color;
      }
    }
  }
}

.block-ministries {
  background-color: $bg-secondary;
  padding-top: 5rem;
  padding-bottom: 5rem;

  &__title {
    text-align: center;
  }
}

@include media-query('large-desktop') {
  .block-about__images {
    flex-wrap: nowrap;
    gap: 1.875rem;
  }
}
</style>
