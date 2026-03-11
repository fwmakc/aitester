export type LangMode = 'ru-RU' | 'en-US';

interface LangOption {
  label: string;
  value: LangMode;
}

export const LANG_MODES: LangMode[] = ['ru-RU', 'en-US'];

export const LANG_OPTIONS: LangOption[] = [
  { label: 'Русский', value: 'ru-RU' },
  { label: 'English', value: 'en-US' },
];

export const LANG_DEFAULT: LangMode = 'en-US';
