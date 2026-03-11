<template>
  <div class="lang-change-component">
    <q-select v-model="lang" :options="LANG_OPTIONS" label-color="white" dense borderless emit-value map-options>
      <template v-slot:append>
        <q-icon name="language" color="white" />
        <q-tooltip>{{ LANG_OPTIONS.filter(item => item.value === lang)[0]?.label }}</q-tooltip>
      </template>
      <template v-slot:selected></template>
    </q-select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import { getInitialLang } from './helpers/getInitialLang.helper';
import { LANG_DEFAULT, LANG_OPTIONS } from './consts/langOptions.const';
import type { LangMode } from './consts/langOptions.const';
import { setLang } from './helpers/setLang.helper';

const lang = ref(LANG_DEFAULT);

onMounted(async () => {
  const initialLang = getInitialLang();
  lang.value = initialLang as LangMode;
  await setLang(initialLang);
});

watch(lang, async val => {
  await setLang(val);
});
</script>

<style lang="scss">
.lang-change-component {
  .q-select__dropdown-icon {
    color: white;
  }
}
</style>
