<template>

    <button type="button" class="btn btn-warning btn-lg fw-semibold">{{ desc }}</button>

</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ButtonNew',
    props: {
        desc: String
    }
});
</script>