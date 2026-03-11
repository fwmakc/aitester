import { defineBoot } from '#q-app/wrappers';

import { applyTheme } from './theme/helpers/applyTheme.helper';
import { getInitialTheme } from './theme/helpers/getInitialTheme.helper';

export const initialTheme = getInitialTheme();

export { applyTheme } from './theme/helpers/applyTheme.helper';
export { THEME_MODES, THEME_ICONS, type ThemeMode } from './theme/consts/themeOptions.const';

export default defineBoot(({ app }) => {
  // Theme is applied above before app boots
  const $q = app.config.globalProperties.$q;

  applyTheme(initialTheme, $q);
});
