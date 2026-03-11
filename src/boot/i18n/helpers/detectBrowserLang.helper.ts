import type { LangMode } from '../consts/langOptions.const';
import { LANG_DEFAULT, LANG_MODES } from '../consts/langOptions.const';

export function detectBrowserLang(): string {
  const browserLang = navigator.language;

  if (LANG_MODES.includes(browserLang as LangMode)) {
    return browserLang;
  }

  const baseLang = browserLang.split('-')[0] || '';
  const matched = LANG_MODES.find(lang => lang.startsWith(baseLang));
  if (matched) {
    return matched;
  }

  return LANG_DEFAULT;
}
