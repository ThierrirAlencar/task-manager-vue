<script lang="ts">
    import { defineComponent } from 'vue'
    import { deleteTask } from '../api/functions/deleteATask'
    import type { task } from '../api/interfaces/task'; 

    export default defineComponent({
            name: 'TaskItem',
            props: {
                title: { type: String, required: true },
                completed: { type: Boolean, required: true },
                description: { type: String, default: null },
                id: { type: Number, required: true }
            },
            emits: ['toggle', 'delete'],
            methods: {
                async handleTaskDeletion() {
                    try {
                        await deleteTask(this.id)
                        this.$emit('delete', this.id)
                    } catch (err) {
                        console.error(err)
                    }
                }
            }
        })
</script>

<template>
    <div
        :title="description"
        :class="[
            'border',
            'w-full',
            'border-gray-300',
            'h-auto',
            'p-3',
            'flex',
            'flex-row',
            'justify-start',
            'items-center',
            'gap-3',
            'rounded-2xl',
            completed ? 'bg-green-300' : 'bg-sky-50'
        ]"
    >
        <input type="checkbox" class="w-1/12" :checked="completed" @change="$emit('toggle', id)" />
        <h1 class="w-10/12">{{ title }}</h1>
        <button
            @click="handleTaskDeletion"
            class="pi pi-trash w-1/12 text-red-500 text-xm cursor-pointer"
        ></button>
    </div>
</template>

<style scoped>
    input[type="checkbox"] {
        padding: 6px;
        transform: scale(1.3);
        accent-color: oklch(72.3% 0.219 149.579);
    }
</style>