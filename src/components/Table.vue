<template>
    <table class="table table-dark table-striped table-hover table-bordered">
        <thead>
            <tr>
                <th scope="col" v-for="column in columns" :key="column.field" class="text-uppercase" :class="{ 'w-10 text-center': column.field === 'id' }">{{ column.field === "ativo" ? "Estado" : column.label  }}</th>
                <th class="w-10"></th>
            </tr>
        </thead>
        <tbody >
            <tr v-for="item in items" :key="item.id">
                <td v-for="column in columns" :class="{ 'text-center': column.field === 'id' }" :key="column.field">{{ column.field === 'ativo' ? (item.ativo ? 'Ativo' : 'Inativo') : item[column.field] }}</td>
                <td  class="text-center">
                  <router-link class="btn" :to="`${page}/edit/${item.id}`" v-if="$route.path !== '/'">
                    <i class="bi bi-pencil-square text-warning"></i>
                  </router-link>
                  <button class="btn" @click="deleteItem(item.id)"  v-if="$route.path !== '/'">  
                    <i class="bi bi-trash-fill text-danger"></i>
                  </button>
                  <router-link class="btn" :to="`/sair/${item.id}`" v-if="$route.path === '/'">  
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
  [key: string]: any; 
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
    },
    page : String
  },
  methods: {
    deleteItem(itemId: number) {
      this.$emit('delete', itemId);
    }
  }
});
</script>
