import { computed, type ComputedRef } from "vue";
import { useI18n } from "vue-i18n";

export type TizerGalleryItem = {
  preview_image: string;
  images: string[];
  title: string;
};

export function useTizerGallery(): ComputedRef<TizerGalleryItem[]> {
  const { t } = useI18n();

  return computed<TizerGalleryItem[]>(() => [
    {
      preview_image: "gallery/bg_7.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.birthday"),
    },
    {
      preview_image: "gallery/bg_8.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.holidays"),
    },
    {
      preview_image: "gallery/bg_9.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.trips"),
    },
    {
      preview_image: "gallery/bg_10.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.children"),
    },
    {
      preview_image: "gallery/bg_11.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.wedding"),
    },
    {
      preview_image: "gallery/bg_12.png",
      images: ["gallery/bg_6.png", "gallery/bg_7.png", "gallery/bg_8.png", "gallery/bg_9.png", "gallery/bg_10.png"],
      title: t("tizer_gallery.people"),
    },
  ]);
}