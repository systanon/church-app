import { ref, onMounted,provide, inject, onUnmounted, watch, type Ref } from "vue";

const HEADER_HEIGHT_KEY = Symbol("HEADER_HEIGHT");
const APP_WIDTH_KEY = Symbol("APP_WIDTH_KEY");
const APP_HEIGHT_KEY = Symbol("APP_HEIGHT_KEY");

export function useWindowResize(headerRef?: Ref<HTMLElement | null>) {
  const appWidth = ref(window.innerWidth);
  const appHeight = ref(window.innerHeight);
  const headerHeight = ref<number>(0);

  const updateSize = () => {
    appWidth.value = window.innerWidth;
    appHeight.value = window.innerHeight;

    if (headerRef?.value) {
      headerHeight.value = headerRef.value.offsetHeight;
    }
  };

  onMounted(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });
 
  watch(headerRef, updateSize, { immediate: true });
  provide(HEADER_HEIGHT_KEY, headerHeight);
  provide(APP_WIDTH_KEY, appWidth);
  provide(APP_HEIGHT_KEY, appHeight);
  return { appWidth, appHeight, headerHeight };
}


export function useInjectWindowResize() {
  const headerHeight = inject<Ref<number>>(HEADER_HEIGHT_KEY, ref(0));
  const appWidth = inject<Ref<number>>(APP_WIDTH_KEY, ref(0));
  const appHeight = inject<Ref<number>>(APP_HEIGHT_KEY, ref(0));
  return { headerHeight, appHeight,  appWidth};
}