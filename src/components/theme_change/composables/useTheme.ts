import { useQuasar } from 'quasar';
import type { Ref } from 'vue';
import { ref } from 'vue';

import { applyTheme, initialTheme, THEME_ICONS, THEME_MODES, type ThemeMode } from 'src/boot/theme';

interface IUseTheme {
  theme: Ref<ThemeMode>;
  toggle: () => void;
  THEME_ICONS: typeof THEME_ICONS;
}

export function useTheme(): IUseTheme {
  const $q = useQuasar();
  const theme = ref<ThemeMode>(initialTheme);

  function toggle(): void {
    const idx = THEME_MODES.indexOf(theme.value);
    theme.value = THEME_MODES[(idx + 1) % THEME_MODES.length]!;
    applyTheme(theme.value, $q);
  }

  return { theme, toggle, THEME_ICONS };
}
