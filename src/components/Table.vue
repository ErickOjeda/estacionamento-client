<template>
    <table class="table table-dark table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col" v-for="column in columns" :key="column.field">{{ column.label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in items" :key="item.id">
                <td v-for="column in columns" :key="column.field"> {{ item[column.field] }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface TableColumn {
  label: string;
  field: string;
}

interface TableItem {
  id: number;
  [key: string]: any; // permitir outras propriedades dinâmicas
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<TableItem[]>,
      required: true
    },
    columns: {
      type: Array as PropType<TableColumn[]>,
      required: true
    }
  }
});
</script>
