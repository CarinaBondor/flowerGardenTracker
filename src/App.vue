<template>
    <main>
        <h1>{{ message }}</h1>

        <taskForm @add-task="addTask" />

        <h3 v-if="!tasks.length">Add a task to get started</h3>
        <h3 v-else>{{ totalDone }}/{{ tasks.length }} completed</h3>

        <div
            v-if="tasks.length != 0"
            class="button-container"
        >
            <filterButton
                filter="all"
                @set-filter="setFilter"
                :current-filter="filter"
            />
            <filterButton
                filter="todo"
                @set-filter="setFilter"
                :current-filter="filter"
            />
            <filterButton
                filter="done"
                @set-filter="setFilter"
                :current-filter="filter"
            />
        </div>

        <taskList
            :tasks="filteredTasks"
            @toggle-done="toggleDone"
            @remove-task="removeTask"
        />
    </main>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import TaskForm from "./components/taskForm.vue";
import type { Task, TaskFilter } from "./types.ts";
import taskList from "./components/taskList.vue";
import filterButton from "./components/filterButton.vue";

const message = ref("flower-garden-tracker app");

const tasks = ref<Task[]>([]);

const filter = ref<TaskFilter>("all");

const totalDone = computed(() =>
    tasks.value.reduce((total, task) => (task.done ? total + 1 : total), 0),
);

const filteredTasks = computed(() => {
    switch (filter.value) {
        case "all":
            return tasks.value;
        case "done":
            return tasks.value.filter((task) => task.done);
        case "todo":
            return tasks.value.filter((task) => !task.done);
        default:
            return tasks.value;
    }
});

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

function removeTask(id: string) {
    tasks.value = tasks.value.filter((task) => task.id != id);
}

function setFilter(value: TaskFilter) {
    filter.value = value;
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
