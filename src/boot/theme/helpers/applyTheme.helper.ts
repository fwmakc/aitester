import type { QVueGlobals } from 'quasar';

import { STORAGE_KEY } from '../consts/storageKey.const';
import type { ThemeMode } from '../consts/themeOptions.const';

const darkValues: Record<ThemeMode, boolean | 'auto'> = {
  dark: true,
  light: false,
  auto: 'auto',
};

export function applyTheme(mode: ThemeMode, $q: QVueGlobals): void {
  $q.dark.set(darkValues[mode]);
  localStorage.setItem(STORAGE_KEY, mode);
}
