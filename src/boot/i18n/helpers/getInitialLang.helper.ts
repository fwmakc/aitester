import type { LangMode } from '../consts/langOptions.const';
import { LANG_MODES } from '../consts/langOptions.const';
import { STORAGE_KEY } from '../consts/storageKey.const';

import { detectBrowserLang } from './detectBrowserLang.helper';

export function getInitialLang(): string {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  if (savedLang && LANG_MODES.includes(savedLang as LangMode)) {
    return savedLang;
  }
  return detectBrowserLang();
}
