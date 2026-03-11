<template>
  <div class="main-menu-component">
    <q-list>
      <q-item
        v-for="item in MENU"
        :key="item"
        v-ripple
        :active="active(item)"
        active-class="bg-secondary text-white"
        clickable
        :to="{ name: item }"
      >
        <q-item-section>
          <q-item-label>{{ t(`pages.${item}`) }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import { MENU } from './consts/menu.const';

const { t } = useI18n();
const route = useRoute();

const active = (name: string): boolean => route.matched[2]?.name === name;

const $q = useQuasar();

const mobile = (name: string): boolean => route.matched[2]?.name === name;
</script>
