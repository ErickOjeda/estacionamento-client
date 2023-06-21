<template>
    <div class="row py-4">

        <div class="col-md-6">
            <h3 class="text-white">Veiculos</h3>
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
                            <h1 class="modal-title fs-5 text-white" id="novoModeloLabel">Novo veiculo</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">

                            <div class="col-md-12 pb-2">
                                <label for="placa" class="form-label">Placa</label>
                                <input type="text" name="placa" id="placa" class="form-control">
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="marca" class="form-label">Marca</label>
                                <select id="marca" class="form-select">
                                    <option disabled selected>Escolha uma marca...</option>
                                    <option value="Toyota">Toyota</option>
                                    <option value="Honda">Honda</option>
                                    <option value="Chevrolet">Chevrolet</option>
                                </select>
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="modelo" class="form-label">Modelo</label>
                                <select id="modelo" class="form-select">
                                    <option disabled selected>Escolha um modelo...</option>
                                    <option value="Corolla XRS">Corolla XRS</option>
                                    <option value="Civic Touring">Civic Touring</option>
                                    <option value="Compass Trailhawk">Compass Trailhawk</option>
                                </select>
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="cor" class="form-label">Cor</label>
                                <select id="cor" class="form-select">
                                    <option disabled selected>Escolha uma cor...</option>
                                    <option value="Azul">Azul</option>
                                    <option value="Prata">Prata</option>
                                    <option value="Preto">Preto</option>
                                </select>
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="tipo" class="form-label">Tipo</label>
                                <select id="tipo" class="form-select">
                                    <option disabled selected>Escolha um tipo...</option>
                                    <option value="Carro">Carro</option>
                                    <option value="Moto">Moto</option>
                                    <option value="Caminhão">Caminhão</option>
                                </select>
                            </div>

                            <div class="col-md-12 pb-2">
                                <label for="ano" class="form-label">Ano</label>
                                <input type="number" name="ano" id="ano" class="form-control" :min="1920" :max="2023"
                                >
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
                { label: 'Placa', field: 'placa' },
                { label: 'Modelo', field: 'modelo' },
                { label: 'Marca', field: 'marca' },
                { label: 'Cor', field: 'cor' },
                { label: 'Tipo', field: 'tipo' },
                { label: 'Ano', field: 'ano' }
            ],
            dadosDaTabela: [
                {
                    id: 1,
                    estado: 'Ativo',
                    marca: 'Toyotta',
                    placa: 'ABC1234',
                    cor: 'Azul',
                    modelo: 'Corolla XRS',
                    tipo: 'CARRO',
                    ano: 2022
                },
                {
                    id: 2,
                    estado: 'Ativo',
                    marca: 'Honda',
                    placa: 'XYZ5678',
                    cor: 'Prata',
                    modelo: 'Civic Touring',
                    tipo: 'CARRO',
                    ano: 2021
                },
                {
                    id: 3,
                    estado: 'Ativo',
                    marca: 'Jeep',
                    placa: 'DEF9876',
                    cor: 'Preto',
                    modelo: 'Compass Trailhawk',
                    tipo: 'CARRO',
                    ano: 2020
                }
            ]
        }
    }
});


</script>