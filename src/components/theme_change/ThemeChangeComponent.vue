<template>
  <div class="theme-change-component">
    <q-btn flat round dense :icon="THEME_ICONS[theme]" @click="cycleTheme">
      <q-tooltip>{{ t('theme.' + theme) }}</q-tooltip>
    </q-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { THEME_ICONS, THEME_MODES, type ThemeMode } from './consts/themeOptions.const';
import { STORAGE_KEY } from './consts/storageKey.const';
import { getInitialTheme } from './helpers/getInitialTheme.helper';

const $q = useQuasar();
const { t } = useI18n();

const theme = ref<ThemeMode>('auto');

function applyTheme(mode: ThemeMode) {
  if (mode === 'dark') $q.dark.set(true);
  else if (mode === 'light') $q.dark.set(false);
  else $q.dark.set('auto');
  localStorage.setItem(STORAGE_KEY, mode);
}

function cycleTheme() {
  const idx = THEME_MODES.indexOf(theme.value);
  theme.value = THEME_MODES[(idx + 1) % THEME_MODES.length]!;
  applyTheme(theme.value);
}

onMounted(() => {
  theme.value = getInitialTheme();
  applyTheme(theme.value);
});
</script>
