import { STORAGE_KEY } from '../consts/storageKey.const';
import type { ThemeMode } from '../consts/themeOptions.const';

export function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(STORAGE_KEY) as ThemeMode | null;
  if (saved === 'dark' || saved === 'light' || saved === 'auto') {
    return saved;
  }
  return 'auto';
}
