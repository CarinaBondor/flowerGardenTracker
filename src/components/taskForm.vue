<template>
    <form @submit.prevent='formSubmitted'>
        <label for="flowerName">Flower Name:</label>
        <input type="text" id="flowerName" name="flowerName" v-model='newTask'/>
        <div class="button-container">
          <button type="submit">Add Flower</button>
        </div>

      </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
    addTask: [newTask: string]
}>()

const newTask = ref("");

function formSubmitted( ){
    console.log(newTask.value)
}
</script>