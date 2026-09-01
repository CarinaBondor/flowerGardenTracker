<template>
    <form @submit.prevent="formSubmitted">
        <label for="flowerName">Flower Name:</label>
        <input
            type="text"
            id="flowerName"
            name="flowerName"
            v-model="newTask"
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
            <button type="submit">Add Flower</button>
        </div>
    </form>
</template>

<script setup lang="ts">
import { ref } from "vue";

const newTask = ref("");
const error = ref("");

const emit = defineEmits<{
    addTask: [newTask: string];
}>();

function formSubmitted() {
    if (newTask.value.trim()) {
        emit("addTask", newTask.value.trim());
        newTask.value = "";
    } else {
        error.value = "Task cannot be empty.";
    }
}
</script>
