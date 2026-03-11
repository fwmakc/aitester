<template>
  <q-btn dense flat :icon="themeIcons[theme]" round @click="toggleTheme">
    <q-tooltip>{{ t('theme.' + theme) }}</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { applyTheme, initialTheme, THEME_MODES, type ThemeMode } from 'src/boot/theme';

const { t } = useI18n();

const themeIcons: Record<ThemeMode, string> = {
  light: 'light_mode',
  dark: 'dark_mode',
  auto: 'brightness_auto',
};

const $q = useQuasar();
const theme = ref<ThemeMode>(initialTheme);

function toggleTheme(): void {
  const idx = THEME_MODES.indexOf(theme.value);
  theme.value = THEME_MODES[(idx + 1) % THEME_MODES.length]!;
  applyTheme(theme.value, $q);
}
</script>
