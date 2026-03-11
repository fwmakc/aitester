<template>
  <q-page class="row content-start items-start justify-between">
    <div class="col-12">{{ pageName }}</div>
    <router-view class="col-12" />
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

const { t } = useI18n();
const route = useRoute();

const pageName = computed(() => {
  const page = t(`pages.${String(route.name)}`);
  return page || '';
});
</script>
