<template>{{ t('appTitle') }}{{ pageName }}</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const pageName = computed(() => {
  const page = t(`pages.${String(route.name)}`);
  return page ? `: ${page}` : '';
});
</script>
