import { defineBoot } from '#q-app/wrappers';
import { createI18n } from 'vue-i18n';

import messages from 'src/i18n';

import { getInitialLang } from './i18n/helpers/getInitialLang.helper';

export type MessageLanguages = keyof typeof messages;
export type MessageSchema = (typeof messages)['en-US'];

/* eslint-disable @typescript-eslint/no-empty-object-type */
declare module 'vue-i18n' {
  export interface DefineLocaleMessage extends MessageSchema {}
  export interface DefineDateTimeFormat {}
  export interface DefineNumberFormat {}
}
/* eslint-enable @typescript-eslint/no-empty-object-type */

const initialLocale = getInitialLang() as MessageLanguages;

export const i18n = createI18n<{ message: MessageSchema }, MessageLanguages, false>({
  locale: initialLocale,
  legacy: false,
  messages,
});

export { setLang } from './i18n/helpers/setLang.helper';
export { LANG_OPTIONS } from './i18n/consts/lang.const';
export type { LangMode } from './i18n/types/langMode.type';

export default defineBoot(({ app }) => {
  app.use(i18n);
});
