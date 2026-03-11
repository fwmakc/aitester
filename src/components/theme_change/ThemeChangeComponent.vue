<template>
  <div class="theme-change-component">
    <q-btn dense flat :icon="THEME_ICONS[theme]" round @click="changeTheme">
      <q-tooltip>{{ t('theme.' + theme) }}</q-tooltip>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

import { THEME_ICONS, THEME_MODES, applyTheme, initialTheme, type ThemeMode } from 'src/boot/theme';

const { t } = useI18n();
const $q = useQuasar();

const theme = ref<ThemeMode>(initialTheme);

function changeTheme(): void {
  const idx = THEME_MODES.indexOf(theme.value);
  theme.value = THEME_MODES[(idx + 1) % THEME_MODES.length]!;
  applyTheme(theme.value, $q);
}
</script>
