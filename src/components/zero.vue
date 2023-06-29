<template>
    <div class="row text-center">
        <div class="col-12 justify-content-md-center">
            <h3 class="text-warning">Nenhum item encontrado <i class="bi bi-exclamation-triangle-fill"></i></h3>
            
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'zero',
    props: {
        desc: String
    }
});
</script>