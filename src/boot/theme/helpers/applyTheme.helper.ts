import type { QVueGlobals } from 'quasar';

import { STORAGE_KEY } from '../consts/storageKey.const';
import type { ThemeMode } from '../consts/themeOptions.const';

export function applyTheme(mode: ThemeMode, $q: QVueGlobals): void {
  if (mode === 'dark') {
    $q.dark.set(true);
  } else if (mode === 'light') {
    $q.dark.set(false);
  } else {
    $q.dark.set('auto');
  }
  localStorage.setItem(STORAGE_KEY, mode);
}
