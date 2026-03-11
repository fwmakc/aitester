import { LANG_MODES } from '../consts/lang.const';
import { STORAGE_KEY } from '../consts/storageKey.const';
import type { LangMode } from '../types/langMode.type';

import { detectBrowserLang } from './detectBrowserLang.helper';

export function getInitialLang(): string {
  const savedLang = localStorage.getItem(STORAGE_KEY);
  if (savedLang && LANG_MODES.includes(savedLang as LangMode)) {
    return savedLang;
  }
  return detectBrowserLang();
}
