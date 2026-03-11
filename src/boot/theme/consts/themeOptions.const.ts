export type ThemeMode = 'light' | 'dark' | 'auto';

export const THEME_MODES: ThemeMode[] = ['light', 'dark', 'auto'];

export const THEME_ICONS: Record<ThemeMode, string> = {
  light: 'light_mode',
  dark: 'dark_mode',
  auto: 'brightness_auto',
};
