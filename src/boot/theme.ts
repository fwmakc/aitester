import { defineBoot } from '#q-app/wrappers';

import { applyTheme } from './theme/helpers/applyTheme.helper';
import { getInitialTheme } from './theme/helpers/getInitialTheme.helper';

export const initialTheme = getInitialTheme();

export { applyTheme } from './theme/helpers/applyTheme.helper';
export { THEME_MODES } from './theme/consts/themeOptions.const';
export type { ThemeMode } from './theme/types/themeMode.type';

export default defineBoot(({ app }) => {
  const $q = app.config.globalProperties.$q;
  applyTheme(initialTheme, $q);
});
