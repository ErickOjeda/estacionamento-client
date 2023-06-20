<template>
    <table class="table table-dark table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col" v-for="column in columns" :key="column.field" :class="{ 'w-10 text-center': column.field === 'id' }">{{ column.label }}</th>
                <th class="w-10"></th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="item in items" :key="item.id">
                <td v-for="column in columns" :class="{ 'text-center': column.field === 'id' }" :key="column.field"> {{ item[column.field] }}</td>
                <td  class="text-center">
                  <router-link class="btn" to="/aaa/edit/id" v-if="$route.path !== '/'">
                    <i class="bi bi-pencil-square text-warning"></i>
                  </router-link>
                  <router-link class="btn" to="/aaa/delete/id" v-if="$route.path !== '/'">  
                    <i class="bi bi-trash-fill text-danger"></i>
                  </router-link>
                  <router-link class="btn" to="/sair/id" v-if="$route.path === '/'">  
                    <i class="bi bi-box-arrow-in-right text-warning fw-semibold"></i>
                  </router-link>
                </td>
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
