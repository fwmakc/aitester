import { Quasar, type QuasarLanguage } from 'quasar';

import { i18n, type MessageLanguages } from 'src/boot/i18n';

import { STORAGE_KEY } from '../consts/storageKey.const';

const modules = import.meta.glob<{ default: QuasarLanguage }>('../../node_modules/quasar/lang/(en-US|ru-RU).js');

export async function setLang(langIso: string): Promise<void> {
  i18n.global.locale.value = langIso as MessageLanguages;
  localStorage.setItem(STORAGE_KEY, langIso);
  const module = await modules[`../../node_modules/quasar/lang/${langIso}.js`]?.();
  if (module) {
    Quasar.lang.set(module.default);
  }
}
