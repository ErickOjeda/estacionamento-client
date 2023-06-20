<template>
  <div class="row justify-content-md-center py-4 text-white">
      <h3>Bem vindo ao ParkSpace!</h3>
  </div>

  <div class="row pb-4">
    <div class="col-md-6">
      <h3 class="text-white">No estacionamento</h3>

    </div>
    <div class="col-md-6 text-end">
      <ButtonNew type="button" class="btn" data-bs-toggle="modal" data-bs-target="#novaEntrada"
        desc="Realizar nova entrada">
      </ButtonNew>
    </div>
  </div>

  <div class="modal fade" id="novaEntrada" tabindex="-1" aria-labelledby="novaEntradaLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <form>
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-white" id="novaEntradaLabel">Nova entrada</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <div class="col-md-12 pb-2">
              <label for="placa" class="form-label">Placa</label>
              <input type="text" name="placa" id="placa" class="form-control">
            </div>

            <div class="col-md-12 pb-2">
              <label for="modelo" class="form-label">Modelo</label>
              <input type="text" id="modelo" class="form-control" disabled>
            </div>
            <div class="col-md-12 pb-2">
              <label for="marca" class="form-label">Marca</label>
              <input type="text" id="marca" class="form-control" disabled>
            </div>
            <div class="col-md-12 pb-2">
              <label for="marca" class="form-label">Ano</label>
              <input type="text" id="marca" class="form-control" disabled>
            </div>

            <div class="col-md-12 pb-2">
              <label for="condutor" class="form-label">Condutor</label>
              <input type="text" id="condutor" class="form-control">
            </div>


          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-warning fw-semibold">Salvar</button>
          </div>
        </form>
      </div>
    </div>
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
