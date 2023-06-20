<template>
    <div class="row py-4">

        <div class="col-md-6">
            <h3 class="text-white">Modelos</h3>
        </div>

        <div class="col-md-6 text-end">
            <ButtonNew type="button" class="btn" data-bs-toggle="modal" data-bs-target="#novoModelo" desc="Cadastrar">
            </ButtonNew>
        </div>

        <div class="modal fade" id="novoModelo" tabindex="-1" aria-labelledby="novoModeloLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <form>
                        <div class="modal-header">
                            <h1 class="modal-title fs-5 text-white" id="novoModeloLabel">Nova modelo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="col-md-12 pb-2">
                                <label for="marca" class="form-label">Marca</label>
                                <select id="marca" class="form-select">
                                    <option selected disabled>Escolha uma marca...</option>
                                    <option>Toyotta</option>
                                    <option>Honda</option>
                                    <option>chevrolet</option>
                                </select>
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" name="nome" id="nome" class="form-control">
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

    </div>

    <Table :columns="colunasDaTabela" :items="dadosDaTabela"></Table>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';
import ButtonNew from '@/components/ButtonNew.vue';


export default defineComponent({
    name: 'MarcasView',
    components: {
        Table,
        ButtonNew
    },
    data() {
        return {
            colunasDaTabela: [
                { label: 'Id', field: 'id' },
                { label: 'Estado', field: 'estado' },
                { label: 'Nome', field: 'nome' },
                { label: 'Marca', field: 'marca' }

            ],
            dadosDaTabela: [
                { id: 1, estado: 'Ativo', nome: 'Corolla', marca: 'Toyotta' },
                { id: 2, estado: 'Ativo', nome: 'Civic', marca: 'Honda' },
                { id: 3, estado: 'Ativo', nome: 'Compass', marca: 'Jeep' }
            ]
        }
    }
});

</script>