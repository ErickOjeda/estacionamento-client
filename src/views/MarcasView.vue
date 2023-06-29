<template>
    <div class="row py-4">
        <div class="col-md-6">
            <h3 class="text-white">Marcas</h3>
        </div>
        <div class="col-md-6 text-end">
            <router-link to="/marcas/nova">
                <ButtonNew type="button" class="btn" desc="Cadastrar" />
            </router-link>
        </div>
    </div>

    <Table :columns="colunasDaTabela" :items="dadosDaTabela" v-if="dadosDaTabela.length > 0" page="marcas" @delete="deleta"></Table>

    <zero v-else class="mt-5"></zero>


</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';
import zero from '@/components/zero.vue';
import ButtonNew from '@/components/ButtonNew.vue';
import { MarcaClient } from '@/client/MarcaClient';

interface TableColumn {
    label: string;
    field: string;
}

interface TableItem {
    id: number;
    [key: string]: any;
}

export default defineComponent({
    name: 'MarcasView',
    components: {
        Table,
        ButtonNew,
        zero
    },
    data() {
        return {
            cliente: new MarcaClient(),
            colunasDaTabela: [] as TableColumn[],
            dadosDaTabela: [] as TableItem[]
        };
    },
    mounted() {
        this.pegaBagui();
    },
    methods: {
        pegaBagui() {
            this.cliente.listAll()
                .then(response => {
                    
                    if (response.length > 0){                        
                        this.colunasDaTabela = this.extrairNomesDosCampos(Object.keys(response[0]));
                        this.dadosDaTabela = response;
                    } else {
                        this.colunasDaTabela = [];
                        this.dadosDaTabela = [];
                    }
                })
                .catch(error => {
                    console.error(error);
                });
        },
        extrairNomesDosCampos(campos: string[]): TableColumn[] {
            const colunas: TableColumn[] = [];
            const camposOrdenados = ["id", "ativo", "nome"]; // Define a ordem dos campos "id" e "ativo"

            // Adiciona os campos "id" e "ativo" no início do array de colunas
            for (const campo of camposOrdenados) {
                if (campos.includes(campo)) {
                    colunas.push({ label: campo, field: campo });
                }
            }

            // Adiciona as demais colunas
            for (const campo of campos) {
                if (!camposOrdenados.includes(campo)) {
                    colunas.push({ label: campo, field: campo });
                }
            }

            return colunas;
        },
        deleta(itemId: number) {
            this.cliente.deletar(itemId)
                .then(response => {
                    this.pegaBagui();
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
});
</script>
  