<template>
    <div class="row py-4">

        <div class="col-md-6">
            <h2 class="text-white">Marcas</h2>
        </div>

        <div class="col-md-6 text-end">
            <router-link to="/marcas/new">
                <ButtonNew desc="Cadastrar"></ButtonNew>
            </router-link>
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
                { label: 'Ativo', field: 'ativo' },
                { label: 'Nome', field: 'nome' }

            ],
            dadosDaTabela: [
                { id: 1, ativo: 'Ativo', nome: 'Toyotta'},
                { id: 2, ativo: 'Ativo', nome: 'Honda'},
                { id: 3, ativo: 'Ativo', nome: 'Jeep'}
            ]
        }
    }
});

</script>