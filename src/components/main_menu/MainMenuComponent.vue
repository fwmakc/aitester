<template>
  <div class="main-menu-component">
    <q-list>
      <q-item v-for="item in MENU" :key="item" v-ripple clickable :to="{ name: item }">
        <q-item-section>
          <q-item-label header>{{ t(`pages.${item}`) }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

import { MENU } from './consts/menu.const';

const { t } = useI18n();
</script>

<style lang="scss">
.main-menu-component {
  .q-select__dropdown-icon {
    color: white;
  }
}
</style>
