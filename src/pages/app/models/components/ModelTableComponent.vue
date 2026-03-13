<template>
  <q-table
    :columns="columns"
    flat
    row-key="name"
    :rows="filteredRows"
    :rows-per-page-options="[10, 50, 100]"
    separator="none"
  >
    <template #header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          <div class="q-mb-xs">{{ col.label }}</div>
          <q-input v-model="filters[col.name as keyof Filters]" class="q-mt-xs" dense outlined @click.stop>
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
import { useI18n } from 'vue-i18n';

import type { Model } from '../interfaces/model.interface';

const { t } = useI18n();

interface Props {
  models: Model[];
}

const props = defineProps<Props>();

interface Filters {
  model: string;
  name: string;
  provider: string;
}

const filters = reactive<Filters>({
  model: '',
  name: '',
  provider: '',
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
    label: t('models.name'),
    name: 'name',
    required: true,
    sortable: true,
  },
  {
    align: 'left',
    field: 'provider',
    label: t('models.provider'),
    name: 'provider',
    sortable: true,
  },
  {
    align: 'left',
    field: 'model',
    label: t('models.model'),
    name: 'model',
    sortable: true,
  },
];
</script>
