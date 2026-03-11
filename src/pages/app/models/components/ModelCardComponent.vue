<template>
  <q-card class="model-card">
    <q-card-section>
      <div class="text-h6">Model Configuration</div>
    </q-card-section>

    <q-card-section>
      <div class="q-gutter-md">
        <q-input v-model="localModel.name" dense label="Name" outlined />

        <q-input v-model="localModel.provider" dense label="Provider" outlined />

        <q-input v-model="localModel.model" dense label="Model" outlined />

        <q-input v-model="localModel.url" dense label="URL" outlined />

        <q-input v-model="localModel.apiKey" dense label="API Key" outlined type="password" />

        <q-input v-model.number="localModel.temperature" dense label="Temperature" outlined type="number" />

        <q-input v-model.number="localModel.maxTokens" dense label="Max Tokens" outlined type="number" />
      </div>
    </q-card-section>

    <q-card-actions align="right">
      <q-btn color="primary" flat label="Save" @click="onSave" />
      <q-btn color="grey" flat label="Cancel" @click="onCancel" />
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { reactive, watch } from 'vue';

import type { Model } from '../interfaces/model.interface';

interface Props {
  modelValue: Model;
}

interface Emits {
  (e: 'update:modelValue', value: Model): void;
  (e: 'save', value: Model): void;
  (e: 'cancel'): void;
}

const props = defineProps<Props>();
const emit = defineEmits<Emits>();

const localModel = reactive<Model>({ ...props.modelValue });

watch(
  () => props.modelValue,
  newVal => {
    Object.assign(localModel, newVal);
  },
  { deep: true },
);

const onSave = (): void => {
  emit('update:modelValue', { ...localModel });
  emit('save', { ...localModel });
};

const onCancel = (): void => {
  emit('cancel');
};
</script>

<style lang="scss" scoped>
.model-card {
  max-width: 500px;
  min-width: 300px;
}
</style>
