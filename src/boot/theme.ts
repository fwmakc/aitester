import { defineBoot } from '#q-app/wrappers';

import { applyTheme } from './theme/helpers/applyTheme.helper';
import { getInitialTheme } from './theme/helpers/getInitialTheme.helper';

export const initialTheme = getInitialTheme();

export { applyTheme } from './theme/helpers/applyTheme.helper';
export { THEME_MODES, type ThemeMode } from './theme/consts/themeOptions.const';

export default defineBoot(({ app }) => {
  const $q = app.config.globalProperties.$q;
  applyTheme(initialTheme, $q);
});
