<template>
    <button
        class="secondary"
        @click="emits('setFilter', filter)"
        :class="{ contrast: filter === currentFilter }"
    >
        {{ filter }}
    </button>
</template>

<script setup lang="ts">
import type { BouquetFilter } from "../types";

const props = defineProps<{
    filter: BouquetFilter;
    currentFilter: BouquetFilter;
}>();

const emits = defineEmits<{
    setFilter: [filter: BouquetFilter];
}>();
</script>

<style scoped>
button {
    text-transform: capitalize;
}
</style>
