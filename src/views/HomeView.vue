<template>
  <div class="row justify-content-md-center p-4">

    <div class="col-md-auto">
      <router-link to="/nova-entrada">
        <ButtonNew desc="Realizar nova entrada" />
      </router-link>
    </div>

  </div>

  <div class="row">
    <h2 class="text-white">Saidas</h2>
  </div>

  <Table :columns="colunasDaTabela" :items="dadosDaTabela"></Table>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';
import ButtonNew from '@/components/ButtonNew.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    Table,
    ButtonNew
  },
  data() {
    return {
      colunasDaTabela: [
        { label: 'Entrada', field: 'entrada' },
        { label: 'Placa', field: 'placa' },
        { label: 'Veiculo', field: 'veiculo' },
        { label: 'Condutor', field: 'condutor' }
      ],
      dadosDaTabela: [
        { id: 1, placa: 'ASCD-982', veiculo: 'Honda Civic', condutor: 'Erick', entrada: '10:53:11' },
        { id: 2, placa: 'DSAA-784', veiculo: 'Jeep Compass', condutor: 'Andre', entrada: '11:27:41' },
        { id: 3, placa: 'DALE-147', veiculo: 'Corolla', condutor: 'Emilio', entrada: '13:10:07' },
      ]
    }
  }
});
</script>
