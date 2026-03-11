<template>
  <model-table-component :models="modelsList" />
  <div v-for="model in modelsList" :key="model.name">
    <model-card-component :modelValue="model" />
  </div>
</template>

<script setup lang="ts">
import ModelCardComponent from './components/ModelCardComponent.vue';
import ModelTableComponent from './components/ModelTableComponent.vue';
import { modelsList } from './consts/modelsList.const';
</script>
