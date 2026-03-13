<template>
  <q-card class="model-card">
    <q-card-section>
      <div class="text-h6">Model Configuration</div>
    </q-card-section>

    <q-card-section>
      <div class="q-gutter-md">
        <q-input v-model="localModel.name" dense :label="t('models.name')" outlined />

        <q-input v-model="localModel.provider" dense :label="t('models.provider')" outlined />

        <q-input v-model="localModel.model" dense :label="t('models.model')" outlined />

        <q-input v-model="localModel.url" dense :label="t('models.url')" outlined />

        <q-input v-model="localModel.apiKey" dense :label="t('models.apiKey')" outlined type="password" />

        <q-input
          v-model.number="localModel.temperature"
          dense
          :label="t('models.temperature')"
          outlined
          type="number"
        />

        <q-input v-model.number="localModel.maxTokens" dense :label="t('models.maxTokens')" outlined type="number" />
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
import { useI18n } from 'vue-i18n';

import type { Model } from '../interfaces/model.interface';

const { t } = useI18n();

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
