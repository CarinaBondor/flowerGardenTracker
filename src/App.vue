<template>
    <main>
      <h1>{{ message }}</h1>

      <taskForm/> 
    </main>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TaskForm from './components/taskForm.vue'

const message = ref("flower-garden-tracker app");


</script>

<style>
main {
  max-width: 800px;
  margin: 1rem auto;
}

.button-container {
  display: flex;
  justify-content: end;
  gap: 0.5rem;
}
</style>

