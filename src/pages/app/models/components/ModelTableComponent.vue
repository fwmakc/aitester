<template>
  <q-table
    :columns="columns"
    flat
    row-key="name"
    :rows="filteredRows"
    :rows-per-page-options="[10, 20, 50]"
    title="Models"
  >
    <template #header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          <div class="q-mb-xs">{{ col.label }}</div>
          <q-input
            v-if="col.name !== 'apiKey'"
            v-model="filters[col.name as keyof Filters]"
            class="q-mt-xs"
            dense
            outlined
            @click.stop
          >
            <template #append>
              <q-icon
                v-if="filters[col.name as keyof Filters]"
                class="cursor-pointer"
                name="clear"
                size="xs"
                @click="filters[col.name as keyof Filters] = ''"
              />
            </template>
          </q-input>
        </q-th>
      </q-tr>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import type { QTableColumn } from 'quasar';
import { computed, reactive } from 'vue';

import type { Model } from '../interfaces/model.interface';

interface Props {
  models: Model[];
}

const props = defineProps<Props>();

interface Filters {
  apiKey: string;
  maxTokens: string;
  model: string;
  name: string;
  provider: string;
  temperature: string;
  url: string;
}

const filters = reactive<Filters>({
  apiKey: '',
  maxTokens: '',
  model: '',
  name: '',
  provider: '',
  temperature: '',
  url: '',
});

const filteredRows = computed(() => {
  return props.models.filter(row => {
    return Object.keys(filters).every(key => {
      const filterValue = filters[key as keyof Filters].toLowerCase();
      if (!filterValue) return true;
      const rowValue = row[key as keyof Model];
      if (rowValue === undefined || rowValue === null) return false;
      return String(rowValue).toLowerCase().includes(filterValue);
    });
  });
});

const columns: QTableColumn<Model>[] = [
  {
    align: 'left',
    field: 'name',
    label: 'Name',
    name: 'name',
    required: true,
    sortable: true,
  },
  {
    align: 'left',
    field: 'provider',
    label: 'Provider',
    name: 'provider',
    sortable: true,
  },
  {
    align: 'left',
    field: 'model',
    label: 'Model',
    name: 'model',
    sortable: true,
  },
  {
    align: 'left',
    field: 'url',
    label: 'URL',
    name: 'url',
    sortable: true,
  },
  {
    align: 'left',
    field: 'apiKey',
    format: (val: string) => (val ? '••••••••' : ''),
    label: 'API Key',
    name: 'apiKey',
    sortable: true,
  },
  {
    align: 'right',
    field: 'temperature',
    label: 'Temperature',
    name: 'temperature',
    sortable: true,
  },
  {
    align: 'right',
    field: 'maxTokens',
    label: 'Max Tokens',
    name: 'maxTokens',
    sortable: true,
  },
];
</script>
