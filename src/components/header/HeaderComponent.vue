<template>
  <div class="header-component">
    <div class="caption">{{ t('appTitle') }}{{ pageName }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const pageName = computed(() => (route.name ? `: ${t(`pages.${String(route.name)}`)}` : ''));
</script>

<style lang="scss">
.header-component {
  .caption {
    font-size: 16px;
  }
}
</style>
