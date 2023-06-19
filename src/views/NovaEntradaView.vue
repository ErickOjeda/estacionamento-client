<template>
    <form class="row g-3">

        <div class="py-4">
            <h2 class="text-white">Nova entrada</h2>
        </div>

        <div class="col-md-6">
            <label for="placa" class="form-label">Placa</label>
            <input type="text" name="placa" id="placa" class="form-control">
        </div>
        <div class="col-md-2">
            <label for="modelo" class="form-label">Modelo</label>
            <input type="text" id="modelo" class="form-control" disabled>
        </div>
        <div class="col-md-2">
            <label for="marca" class="form-label">Marca</label>
            <input type="text" id="marca" class="form-control" disabled>
        </div>
        <div class="col-md-2">
            <label for="marca" class="form-label">Ano</label>
            <input type="text" id="marca" class="form-control" disabled>
        </div>

        <div class="col-md-6">
            <label for="condutor" class="form-label">Condutor</label>
            <input type="text" id="condutor" class="form-control">
        </div>

        <div class="col-12 d-flex justify-content-end">
            <button type="submit" class="btn btn-warning fw-semibold">Realizar</button>
        </div>
    </form>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NovaEntradaView',
    components: {

    }
});
</script>
  