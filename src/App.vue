<template>
    <main>
        <h1>{{ message }}</h1>

        <taskForm @add-task="addTask" />

        <taskList
            :tasks
            @toggle-done="toggleDone"
        />

        <h3 v-if="!tasks.length">Add a task to get started</h3>
        <h3 v-else>{{ totalDone }}/{{ tasks.length }} completed</h3>
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TaskForm from "./components/taskForm.vue";
import type { Task } from "./types.ts";
import taskList from "./components/taskList.vue";

const message = ref("flower-garden-tracker app");

const tasks = ref<Task[]>([]);

const totalDone = computed(() =>
    tasks.value.reduce((total, task) => (task.done ? total + 1 : total), 0),
);

function addTask(newTask: string) {
    tasks.value.push({
        id: crypto.randomUUID(),
        title: newTask,
        done: false,
    });
}

function toggleDone(id: string) {
    const task = tasks.value.find((task) => task.id == id);

    if (task) {
        task.done = !task.done;
    }
}
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
