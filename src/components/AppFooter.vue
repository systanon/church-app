<script lang="ts">
import { defineComponent } from 'vue'
import { byAuthorized, footerNavMenu, NavigationMenu } from "@/config/navigation";


export default defineComponent({
  name: "AppFooter",

  computed: {
    navigationList(): NavigationMenu {
      return footerNavMenu.filter(byAuthorized(true));
    },
  },

})
</script>

<template>
  <footer class="app-footer">
    <div class="app-footer__about">
      <h5 lass="app-footer__about-title">{{ $t('footer.about.title') }}</h5>
      <p class="app-footer__about-text">{{ $t('footer.about.text') }}</p>
    </div>
    <div class="app-footer__links">
      <h5>{{ $t('footer.links_title') }}</h5>
      <router-link :to="path" v-for="{ path, i18n_key } in navigationList" :key="path">
        {{ $t(`footer.links.${i18n_key}`) }}
      </router-link>
    </div>
    <div class="app-footer__follow">
      <h5 lass="app-footer__about-title">{{ $t('footer.follow.title') }}</h5>

      <a href="">Facebook</a><a href="">Instagram</a><a href="">TicToc</a><a href="">Twitter</a>
    </div>
    <div class="app-footer__contact">
      <h5 lass="app-footer__about-title">{{ $t('footer.contact.title') }}</h5>
      <p>{{ $t('footer.contact.address') }}</p>
    </div>
    <div class="app-footer__copyright">
      &copy; {{ new Date().getFullYear() }} {{ $t('footer.copyright') }}
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.app-footer {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: $secondary-color;
  gap: 1.5rem;

  &__about-title {}

  &__about-text {}

  &__links,
  &__follow {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  &__copyright {
    grid-column: 1 / -1;
    text-align: left;
  }
}


@include media-query('mobile') {
  .app-footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: left;
  }
}

@include media-query('tablet') {
  .app-footer {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: left;
  }

  .app-footer__copyright {
    text-align: center;
  }
}

@include media-query('desktop') {
  .app-footer {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    text-align: center;
  }

  .app-footer__copyright {
    text-align: center;
  }
}



@include media-query('large-desktop') {
  .app-footer {
    display: grid;
    padding: 2rem 0;
    grid-template-columns: repeat(20, 1fr);
    text-align: left;
    gap: 1.875rem;

    &__about {
      grid-column: 5/ 8;
    }

    &__links {
      grid-column: 8/ 10;
    }

    &__follow {
      grid-column: 11/ 13;
    }

    &__contact {
      grid-column: 14/ 17;
    }

    &__copyright {
      text-align: left;
      grid-column: 5/ -1;
    }
  }
}
</style>