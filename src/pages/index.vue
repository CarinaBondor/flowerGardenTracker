<template>
    <div>
        <h1>Welcome to the Flower Garden Tracker</h1>

        <h2>{{ message }}</h2>

        <bouquetForm @add-bouquet="addBouquet" />

        <h3 v-if="!bouquets.length">Add a Bouquet to get started</h3>
        <h3 v-else>{{ totalDone }}/{{ bouquets.length }} completed</h3>

        <div
            v-if="bouquets.length != 0"
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

        <bouquetList
            :bouquets="filteredBouquets"
            @toggle-done="toggleDone"
            @remove-bouquet="removeBouquet"
        />
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import bouquetForm from "../components/bouquetForm.vue";
import type { Bouquet, BouquetFilter } from "../types.ts";
import bouquetList from "../components/bouquetList.vue";
import filterButton from "../components/filterButton.vue";

const message = ref("Create your bouquet!");
const bouquets = ref<Bouquet[]>([]);
const filter = ref<BouquetFilter>("all");

const totalDone = computed(() =>
    bouquets.value.reduce(
        (total, bouquet) => (bouquet.done ? total + 1 : total),
        0,
    ),
);

const filteredBouquets = computed(() => {
    switch (filter.value) {
        case "all":
            return bouquets.value;
        case "done":
            return bouquets.value.filter((bouquet) => bouquet.done);
        case "todo":
            return bouquets.value.filter((bouquet) => !bouquet.done);
        default:
            return bouquets.value;
    }
});

function addBouquet(newBouquet: string) {
    bouquets.value.push({
        id: crypto.randomUUID(),
        title: newBouquet,
        done: false,
    });
}

function toggleDone(id: string) {
    const bouquet = bouquets.value.find((bouquet) => bouquet.id == id);

    if (bouquet) {
        bouquet.done = !bouquet.done;
    }
}

function removeBouquet(id: string) {
    bouquets.value = bouquets.value.filter((bouquet) => bouquet.id != id);
}

function setFilter(value: BouquetFilter) {
    filter.value = value;
}
</script>

<style>
.button-container {
    display: flex;
    justify-content: end;
    gap: 0.5rem;
}
</style>
