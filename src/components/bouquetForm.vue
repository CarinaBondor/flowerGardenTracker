<template>
    <form @submit.prevent="formSubmitted">
        <label for="bouquetName">Create a bouquet!</label>
        <input
            type="text"
            id="bouquetName"
            name="bouquetName"
            v-model="newFlower"
            :aria-invalid="!!error || undefined"
            @input="error = ''"
        />
        <small
            v-if="error"
            id="invalid-helper"
        >
            {{ error }}
        </small>

        <div class="button-container">
            <button type="submit">Add Bouquet</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newFlower = ref("");
const error = ref("");

const emit = defineEmits<{
    addBouquet: [newFlower: string];
}>();

function formSubmitted() {
    if (newFlower.value.trim()) {
        emit("addBouquet", newFlower.value.trim());
        newFlower.value = "";
    } else {
        error.value = "Bouquet cannot be empty.";
    }
}
</script>
