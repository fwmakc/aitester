<template>
  <q-layout view="hHh LpR fFf">
    <q-header bordered class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat icon="menu" round @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <header-component />
        </q-toolbar-title>

        <div class="row items-center q-gutter-xs">
          <theme-change-component class="col-auto" />
          <lang-change-component class="col-auto" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered show-if-above side="left">
      <!-- Заголовок, который виден только если drawer в режиме "мобильного" (overlay) -->
      <q-toolbar v-if="$q.screen.lt.md" class="bg-primary text-white">
        <q-toolbar-title>
          <header-component />
        </q-toolbar-title>
        <q-btn flat icon="close" round @click="leftDrawerOpen = false" />
      </q-toolbar>

      <main-menu-component />
    </q-drawer>

    <q-page-container>
      <router-view class="q-px-lg" />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import HeaderComponent from 'src/components/header/HeaderComponent.vue';
import LangChangeComponent from 'src/components/lang_change/LangChangeComponent.vue';
import MainMenuComponent from 'src/components/main_menu/MainMenuComponent.vue';
import ThemeChangeComponent from 'src/components/theme_change/ThemeChangeComponent.vue';

const leftDrawerOpen = ref(false);

function toggleLeftDrawer(): void {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
