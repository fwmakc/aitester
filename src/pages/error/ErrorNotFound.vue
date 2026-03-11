<template>
  <q-page class="row items-top justify-between">
    <div class="fullscreen text-primary text-center q-pa-md flex flex-center">
      <div>
        <div style="font-size: 24vh">404</div>

        <div class="text-h2" style="opacity: 0.4">{{ t('errors.e404') }}</div>

        <q-btn class="q-mt-xl" color="white" :label="t('errors.mainPage')" no-caps outline text-color="blue" to="/" />
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>
