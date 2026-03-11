<template>
  <div class="lang-change-component">
    <q-select v-model="lang" borderless dense emit-value label-color="white" map-options :options="LANG_OPTIONS">
      <template v-slot:append>
        <q-icon color="white" name="language" />
        <q-tooltip>{{ LANG_OPTIONS.filter(item => item.value === lang)[0]?.label }}</q-tooltip>
      </template>
      <template v-slot:selected></template>
    </q-select>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

import { LANG_OPTIONS, setLang } from 'src/boot/i18n';

const { locale } = useI18n();

const lang = computed({
  get: () => locale.value,
  set: val => {
    void setLang(val);
  },
});
</script>

<style lang="scss">
.lang-change-component {
  .q-select__dropdown-icon {
    color: white;
  }
}
</style>
