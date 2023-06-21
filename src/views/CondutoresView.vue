<template>
    <div class="row py-4">

        <div class="col-md-6">
            <h3 class="text-white">Condutores</h3>
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
                            <h1 class="modal-title fs-5 text-white" id="novoModeloLabel">Novo condutor</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="col-md-12 pb-2">
                                <label for="nome" class="form-label">Nome</label>
                                <input type="text" name="nome" id="nome" class="form-control">
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="cpf" class="form-label">CPF</label>
                                <input type="text" name="cpf" id="cpf" class="form-control" maxlength="14" placeholder="000.000.000-00" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" required>
                            </div>
                            
                            <div class="col-md-12 pb-2">
                                <label for="telefone" class="form-label">Telefone</label>
                                <input type="text" name="telefone" id="telefone" class="form-control" maxlength="20" placeholder="00 9 0000-0000" pattern="\+\d{2} \d{3} \d \d{4}-\d{4}" required>
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
                { label: 'Estado', field: 'ativo' },
                { label: 'Nome', field: 'nome' },
                { label: 'CPF', field: 'cpf' },
                { label: 'Telefone', field: 'telefone' },
                { label: 'Tempo Pago', field: 'tempoPago' },
                { label: 'Tempo Desconto', field: 'tempoDesconto' }
            ],
            dadosDaTabela: [
                { id: 1, ativo: 'Ativo', nome: 'Erick', cpf: '123.456.789-01', telefone: '1234567890', tempoPago: 10, tempoDesconto: 5 },
                { id: 2, ativo: 'Ativo', nome: 'André', cpf: '987.654.321-09', telefone: '9876543210', tempoPago: 15, tempoDesconto: 8 },
                { id: 3, ativo: 'Ativo', nome: 'Luiz', cpf: '456.789.012-34', telefone: '4567890123', tempoPago: null, tempoDesconto: null }
            ]
        }
    }
});


</script>