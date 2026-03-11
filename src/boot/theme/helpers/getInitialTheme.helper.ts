import { STORAGE_KEY } from '../consts/storageKey.const';
import { THEME_MODES, type ThemeMode } from '../consts/themeOptions.const';

export function getInitialTheme(): ThemeMode {
  const saved = localStorage.getItem(STORAGE_KEY);
  return THEME_MODES.includes(saved as ThemeMode) ? (saved as ThemeMode) : 'auto';
}
