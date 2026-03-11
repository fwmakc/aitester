<template>
  <q-btn dense flat :icon="THEME_ICONS[theme]" round @click="toggle">
    <q-tooltip>{{ t('theme.' + theme) }}</q-tooltip>
  </q-btn>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { useTheme } from './composables/useTheme';

const { t } = useI18n();
const { theme, toggle, THEME_ICONS } = useTheme();
</script>
