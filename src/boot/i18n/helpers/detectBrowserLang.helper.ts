import { LANG_MODES } from '../consts/lang.const';
import type { LangMode } from '../types/langMode.type';

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

  return LANG_MODES[0] as string;
}
