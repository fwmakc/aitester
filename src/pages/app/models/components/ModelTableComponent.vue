<template>
  <q-table
    class="full-width"
    :columns="columns"
    flat
    :no-data-label="t('table.noDataLabel')"
    :pagination-label="
      (firstRow, endRow, totalRows) => {
        const page = Math.ceil(endRow / (endRow - firstRow + 1));
        const pages = Math.ceil(totalRows / (endRow - firstRow + 1));
        return `${t('table.page')} ${page} ${page !== pages ? `${t('table.pageOfPages')} ${pages}` : ''}`;
      }
    "
    row-key="name"
    :rows="filteredRows"
    :rows-per-page-label="t('table.rowsPerPageLabel')"
    :rows-per-page-options="[10, 50, 100]"
    separator="none"
  >
    <template #top>
      <q-btn color="primary" icon="add" padding="sm" round size="xs" unelevated @click="() => {}" />
    </template>
    <template #header="props">
      <q-tr :props="props">
        <q-th v-for="col in props.cols" :key="col.name" :props="props">
          <div class="q-mb-xs row items-center no-wrap">
            <span>{{ col.label }}</span>
            <div v-if="col.name !== 'actions'">
              <q-icon
                v-if="sortBy === col.name"
                class="cursor-pointer q-ml-xs"
                :name="descending ? 'arrow_downward' : 'arrow_upward'"
                size="16px"
                @click.stop="handleSort(col.name)"
              />
              <q-icon
                v-else
                class="cursor-pointer q-ml-xs"
                color="grey-6"
                name="unfold_more"
                size="16px"
                @click.stop="handleSort(col.name)"
              />
            </div>
          </div>
          <q-input
            v-if="col.name !== 'actions'"
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
    <template v-slot:body-cell-actions="props">
      <q-td :props="props">
        <q-btn color="primary" flat icon="edit" padding="sm" round size="xs" @click="() => {}" />
        <q-btn color="negative" flat icon="delete" padding="sm" round size="xs" @click="() => {}" />
      </q-td>
    </template>
  </q-table>
</template>

<script setup lang="ts">
import type { QTableColumn } from 'quasar';
import { computed, reactive, ref } from 'vue';
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

const sortBy = ref('');
const descending = ref(false);

function handleSort(colName: string): void {
  if (sortBy.value === colName) {
    if (descending.value) {
      sortBy.value = '';
      descending.value = false;
    } else {
      descending.value = true;
    }
  } else {
    sortBy.value = colName;
    descending.value = false;
  }
}

const filteredRows = computed(() => {
  let rows = props.models.filter(row => {
    return Object.keys(filters).every(key => {
      const filterValue = filters[key as keyof Filters].toLowerCase();
      if (!filterValue) return true;
      const rowValue = row[key as keyof Model];
      if (rowValue === undefined || rowValue === null) return false;
      return String(rowValue).toLowerCase().includes(filterValue);
    });
  });

  if (sortBy.value) {
    rows = rows.sort((a, b) => {
      const aVal = a[sortBy.value as keyof Model];
      const bVal = b[sortBy.value as keyof Model];
      if (aVal === undefined || aVal === null) return 1;
      if (bVal === undefined || bVal === null) return -1;
      const cmp = String(aVal).localeCompare(String(bVal));
      return descending.value ? -cmp : cmp;
    });
  }

  return rows;
});

const columns: QTableColumn<Model>[] = [
  {
    align: 'left',
    field: 'name',
    label: t('models.name'),
    name: 'name',
    required: true,
  },
  {
    align: 'left',
    field: 'provider',
    label: t('models.provider'),
    name: 'provider',
  },
  {
    align: 'left',
    field: 'model',
    label: t('models.model'),
    name: 'model',
  },
  {
    name: 'actions',
    label: '',
    field: () => '',
    align: 'right',
  },
];
</script>
