import { onBeforeUnmount, onMounted, ref } from "vue";

export const useDark = () => {
  const isDark = ref(false);
  const media = "(prefers-color-scheme: dark)";

  const setRootDark = (isEnabledDark: boolean) => {
    const html = document.getElementsByTagName("html")[0];

    if (isEnabledDark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  };

  const handler = (event: MediaQueryListEvent) => {
    const isEnabledDark = event.matches;
    isDark.value = isEnabledDark;

    setRootDark(isEnabledDark);
  };

  onMounted(() => {
    const isEnabledDark = window.matchMedia(media).matches;
    isDark.value = isEnabledDark;
    setRootDark(isEnabledDark);
    window.matchMedia(media).addEventListener("change", handler);
  });

  onBeforeUnmount(() => {
    window.matchMedia(media).removeEventListener("change", handler);
  });

  return { isDark };
};
