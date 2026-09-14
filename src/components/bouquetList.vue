<template>
    <TransitionGroup
        name="bouquet-list"
        tag="div"
        class="bouquet-list"
    >
        <article
            v-for="bouquet in bouquets"
            :key="bouquet.id"
            class="bouquet"
        >
            <label>
                <input
                    @input="emits('toggleDone', bouquet.id)"
                    :checked="bouquet.done"
                    type="checkbox"
                />
                <span :class="{ done: bouquet.done }">{{ bouquet.title }}</span>
            </label>

            <button
                @click="emits('removeBouquet', bouquet.id)"
                class="outline"
            >
                Remove
            </button>
        </article>
    </TransitionGroup>
</template>

<script lang="ts" setup>
import type { Bouquet } from "../types.ts";

const props = defineProps<{
    bouquets: Bouquet[];
}>();

const emits = defineEmits<{
    toggleDone: [id: string];
    removeBouquet: [id: string];
}>();
</script>

<style>
.bouquet-list {
    margin-top: 1rem;
}

.bouquet {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.done {
    text-decoration: line-through;
}

.bouquet-list-enter-active,
.bouquet-list-leave-active {
    transition: all 0.5s ease;
}
.bouquet-list-enter-from,
.bouquet-list-leave-to {
    opacity: 0;
    transform: translateX(300px);
}
</style>
