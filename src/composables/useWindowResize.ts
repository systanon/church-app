import { ref, onMounted,provide, inject, onUnmounted, type Ref } from "vue";

const APP_WIDTH_KEY = Symbol("APP_WIDTH_KEY");
const APP_HEIGHT_KEY = Symbol("APP_HEIGHT_KEY");

export function useWindowResize() {
  const appWidth = ref(window.innerWidth);
  const appHeight = ref(window.innerHeight);

  const updateSize = () => {
    appWidth.value = window.innerWidth;
    appHeight.value = window.innerHeight;
 
  };

  onMounted(() => {
    updateSize();
    window.addEventListener("resize", updateSize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
  });
 
  provide(APP_WIDTH_KEY, appWidth);
  provide(APP_HEIGHT_KEY, appHeight);
  return { appWidth, appHeight };
}


export function useInjectWindowResize() {
  const appWidth = inject<Ref<number>>(APP_WIDTH_KEY, ref(0));
  const appHeight = inject<Ref<number>>(APP_HEIGHT_KEY, ref(0));
  return { appHeight,  appWidth};
}