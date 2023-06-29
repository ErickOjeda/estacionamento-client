<template>
    <div class="row py-4">

        <div class="col-md-6">
            <h3 class="text-white">Nova Marca</h3>
        </div>

        <form class="mt-4" @submit.prevent="salvar">

            <div class="col-md-12">
                <label for="nome" class="form-label">Nome</label>
                <input type="text" v-model="marca.nome" name="nome" id="nome" class="form-control">
            </div>

            <div class="col-md-12 d-flex justify-content-end">
                <button type="submit" id="botao-submit" class="btn btn-warning fw-semibold mt-3">{{ modo === 'Criar' ? 'Criar' : 'Salvar' }}</button>
            </div>

        </form>
    </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import Table from '@/components/Table.vue';
import ButtonNew from '@/components/ButtonNew.vue';
import { Marca } from '@/model/marca'
import { MarcaClient } from '@/client/MarcaClient'

export default defineComponent({
    name: 'FormMarcaView',
    components: {
        Table,
        ButtonNew
    },
    data() {
        return {
            modo: '',
            marca: new Marca(),
            cliente: new MarcaClient(),
        };
    },
    created() {
        if (this.$route.name === 'novaMarca') {
            this.modo = 'Criar';
        } else if (this.$route.name === 'editMarca') {
            this.modo = 'Editar';
            
            this.carregar();
        }
    },
    methods: {
        async carregar() {
            const marcaId = Number(this.$route.params.id);
            const response = await this.cliente.findById(marcaId);
            1
            if (response) {
                this.marca = response;
            }
        },
        async salvar() {
            try {
                if(this.modo == "Criar"){
                    const response = await this.cliente.cadastrar(this.marca);
                } else {
                    const response = await this.cliente.editar(this.marca);
                }
                
                this.$router.push('/marcas');
            } catch (error) {
                console.error('Erro ao cadastrar marca:', error);
            }
        },
    },

});

</script>